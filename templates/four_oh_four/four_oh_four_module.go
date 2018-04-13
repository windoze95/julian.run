package four_oh_four

import (
	"log"

	"github.com/orange-lightsaber/julian.run/assets"
	"github.com/orange-lightsaber/julian.run/templater"
)

func Register() (fourOhFour templater.TemplateModule) {
	fourOhFour = templater.NewTemplateModule("404")
	a, err := assets.GetAsset("404.gohtml")
	if err != nil {
		log.Fatal(err)
	}
	fourOhFour.SetTemplate(a)
	return
}
