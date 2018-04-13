package boot

import (
	"log"

	"github.com/orange-lightsaber/julian.run/assets"
	"github.com/orange-lightsaber/julian.run/templater"
)

func Register() (boot templater.TemplateModule) {
	boot = templater.NewTemplateModule("boot")
	a, err := assets.GetAsset("boot.gohtml")
	if err != nil {
		log.Fatal(err)
	}
	boot.SetTemplate(a)
	return
}
