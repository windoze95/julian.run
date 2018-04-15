package main

import (
	"flag"
	"log"
	"os"
	"path/filepath"
	"sync"
)

func handleGOHTML(srcFilePath string, tmpPath string, wg *sync.WaitGroup) {
	defer wg.Done()

	destFilePath := filepath.Join(tmpPath, filepath.Base(srcFilePath))
	cp(srcFilePath, destFilePath)
}

func handleJS(srcFilePath string, tmpPath string, wg *sync.WaitGroup) {
	defer wg.Done()

	destFilePath := filepath.Join(tmpPath, filepath.Base(srcFilePath))
	writeToFile(minifyJS(srcFilePath), destFilePath)
}

func handleGCSS(srcFilePath string, tmpPath string, wg *sync.WaitGroup) {
	defer wg.Done()

	destFilePath := filepath.Join(tmpPath, filepath.Base(srcFilePath))
	writeToFile(transpileGCSS(srcFilePath), destFilePath)
}

func main() {
	templateModulesPathFlag := flag.String("template-modules-path", "", "path the assets to be handled")
	tmpPathFlag := flag.String("tmp-path", "", "path the tmp folder when assets are imported to") // "$PWD/tmp"
	flag.Parse()
	if *templateModulesPathFlag == "" {
		log.Fatal("template-modules-path flag must be set")
	}
	if *tmpPathFlag == "" {
		log.Fatal("tmp-path flag must be set")
	}

	var wg sync.WaitGroup
	err := filepath.Walk(*templateModulesPathFlag, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		switch filepath.Ext(path) {
		case ".gohtml":
			wg.Add(1)
			go handleGOHTML(path, *tmpPathFlag, &wg)
		case ".js":
			wg.Add(1)
			go handleJS(path, *tmpPathFlag, &wg)
		case ".gcss":
			wg.Add(1)
			go handleGCSS(path, *tmpPathFlag, &wg)
		}
		return nil
	})
	checkErr(err)

	wg.Wait()
}
