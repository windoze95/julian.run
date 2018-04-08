package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/orange-lightsaber/julian.run/templates"
)

func main() {
	mux := httprouter.New()
	templateModules := templates.GetModules()
	mux.GET("/", func(w http.ResponseWriter, req *http.Request, _ httprouter.Params) {
		index := templateModules.GetTemplateModule("index")
		err := index.Template.Execute(w, index.Data)
		HandleError(w, err)
	})
	mux.GET("/assets/js/:module", func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		module := ps.ByName("module")
		_, err := fmt.Fprint(w, string(templates.GetAsset(module)))
		HandleError(w, err)
	})
	mux.GET("/boot/:step", func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		var err error
		var s string
		step := ps.ByName("step")
		switch step {
		case "1":
			s = "boot" + step
		case "2":
			s = "boot" + step
		case "3":
			s = "boot" + step
		default:
			HandleError(w, fmt.Errorf("%s is not a valid boot step.", step))
			return
		}
		boot := templateModules.GetTemplateModule(s)
		err = boot.Template.Execute(w, nil)
		HandleError(w, err)
	})
	log.Fatal(http.ListenAndServe(":8080", mux))
}

func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
