package templater

import (
	"html/template"
)

type Templates struct {
	templateModules map[string]TemplateModule
}

func (t *Templates) Register(tMs ...TemplateModule) {
	for _, tM := range tMs {
		t.templateModules[tM.Name] = tM
	}
}

func (t *Templates) GetTemplateModule(name string) (templateModule TemplateModule) {
	templateModule, exists := t.templateModules[name]
	if !exists {
		templateModule = t.templateModules["404"]
	}
	return

}

func New() (newTemplates Templates) {
	newTemplates = Templates{templateModules: make(map[string]TemplateModule)}
	return
}

type TemplateModule struct {
	Name     string
	Template *template.Template
	Data     interface{}
}

func (tm *TemplateModule) SetTemplate(asset []byte) {
	tm.Template = template.Must(template.New(tm.Name).Parse(string(asset)))
}

func (t *TemplateModule) SetData(d interface{}) {
	t.Data = d
}

func NewTemplateModule(name string) (templateModule TemplateModule) {
	templateModule = TemplateModule{Name: name}
	return
}
