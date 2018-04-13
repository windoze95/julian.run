package templates

import (
	"github.com/orange-lightsaber/julian.run/templater"
	"github.com/orange-lightsaber/julian.run/templates/boot"
	"github.com/orange-lightsaber/julian.run/templates/four_oh_four"
	"github.com/orange-lightsaber/julian.run/templates/index"
)

func loadModules(t templater.Templates) {
	t.Register(
		four_oh_four.Register(),
		index.Register(),
		boot.Register(),
	)
}

func GetModules() (t templater.Templates) {
	t = templater.New()
	loadModules(t)
	return
}
