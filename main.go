package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/orange-lightsaber/julian.run/assets"
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
	mux.GET("/asset/:module", func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		module := ps.ByName("module")
		a, err := assets.GetAsset(module)
		if err != nil {
			http.Error(w, string(a), http.StatusNotFound)
			return
		}
		_, err = fmt.Fprint(w, string(a))
		HandleError(w, err)
	})
	mux.GET("/template/:template", func(w http.ResponseWriter, req *http.Request, ps httprouter.Params) {
		templateName := ps.ByName("template")
		tpl := templateModules.GetTemplateModule(templateName)
		err := tpl.Template.Execute(w, nil)
		HandleError(w, err)
	})
	mux.NotFound = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fof := templateModules.GetTemplateModule("404")
		err := fof.Template.Execute(w, fof.Data)
		HandleError(w, err)
	})
	log.Fatal(http.ListenAndServe(":8080", mux))
}

func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
