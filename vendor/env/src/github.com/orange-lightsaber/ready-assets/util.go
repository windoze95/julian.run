package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"os"

	"github.com/tdewolff/minify"
	"github.com/tdewolff/minify/js"
	"github.com/tdewolff/parse/buffer"
	"github.com/yosssi/gcss"
)

var m = minify.New()

func minifyJS(path string) []byte {
	newWriter, newReader := load(path)
	err := js.Minify(m, newWriter, newReader, nil)
	checkErr(err)

	fmt.Printf("Minified and staged %s: %d bytes\n", path, len(newWriter.Bytes()))

	return newWriter.Bytes()
}

func transpileGCSS(path string) []byte {
	f, err := os.Open(path)
	checkErr(err)
	defer func() {
		checkErr(f.Close())
	}()

	out := []byte{}
	w := bytes.NewBuffer(out)

	_, err = gcss.Compile(w, f)
	checkErr(err)

	fmt.Printf("Transpiled and staged %s: %d bytes\n", path, len(w.Bytes()))

	return w.Bytes()
}

func writeToFile(b []byte, destFilePath string) {
	destFile, err := os.Create(destFilePath)
	checkErr(err)
	defer destFile.Close()

	_, err = destFile.Write(b)
	checkErr(err)
}

func cp(srcFilePath string, destFilePath string) {
	srcFile, err := os.Open(srcFilePath)
	checkErr(err)
	defer srcFile.Close()

	destFile, err := os.Create(destFilePath)
	checkErr(err)
	defer destFile.Close()

	_, err = io.Copy(destFile, srcFile)
	checkErr(err)

	err = destFile.Sync()
	checkErr(err)

	fmt.Printf("Staged %s\n", srcFilePath)
}

func load(path string) (newWriter *buffer.Writer, newReader *buffer.Reader) {
	asset, err := ioutil.ReadFile(path)
	checkErr(err)

	newWriter = buffer.NewWriter(make([]byte, 0, len(asset)))
	newReader = buffer.NewReader(asset)

	return
}

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
