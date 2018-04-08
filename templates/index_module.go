package templates

import (
	"github.com/orange-lightsaber/julian.run/templater"
)

func registerIndex() templater.TemplateModule {
	index := templater.NewTemplateModule("index")
	index.SetTemplate(GetAsset("index.gohtml"))
	return index
}
