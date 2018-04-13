package index

import (
	"log"

	"github.com/orange-lightsaber/julian.run/assets"
	"github.com/orange-lightsaber/julian.run/templater"
)

func Register() (index templater.TemplateModule) {
	index = templater.NewTemplateModule("index")
	a, err := assets.GetAsset("index.gohtml")
	if err != nil {
		log.Fatal(err)
	}
	index.SetTemplate(a)
	return
}
