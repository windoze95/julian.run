package templates

import (
	"log"

	"github.com/orange-lightsaber/julian.run/assets"
	"github.com/orange-lightsaber/julian.run/templater"
)

func loadModules(t templater.Templates) {
	t.Register(registerBoot())
	t.Register(registerIndex())
}

func GetModules() (t templater.Templates) {
	t = templater.New()
	loadModules(t)
	return
}

func GetAsset(assetName string) []byte {
	a, err := assets.Asset(assetName)
	if err != nil {
		log.Fatalf("Asset %s not found: %s\n", assetName, err)
	}
	return a
}
