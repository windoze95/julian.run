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

func (t *Templates) GetTemplateModule(name string) TemplateModule {
	return t.templateModules[name]
}

func New() (T Templates) {
	T.templateModules = make(map[string]TemplateModule)
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

func NewTemplateModule(name string) TemplateModule {
	return TemplateModule{Name: name}
}
