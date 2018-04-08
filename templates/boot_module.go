package templates

import (
	"github.com/orange-lightsaber/julian.run/templater"
)

func registerBoot() (templater.TemplateModule, templater.TemplateModule) {
	boot := templater.NewTemplateModule("boot1")
	boot.SetTemplate(GetAsset("boot1.gohtml"))
	boot2 := templater.NewTemplateModule("boot2")
	boot2.SetTemplate(GetAsset("boot2.gohtml"))
	return boot, boot2
}
