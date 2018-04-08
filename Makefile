GOCMD=go
GOCLEAN=$(GOCMD) clean
GOBUILD=$(GOCMD) build
GOGET=$(GOCMD) get -u
MKDIR_P = mkdir -p
OS=linux
ARCH=amd64
PATH_DIST=dist
PATH_TMP=tmp
ASSETS_FILE=assets.go
PATH_ASSETS=assets
PATH_TEMPLATES=templates
BINARY_NAME=julian.run

clean:
	$(GOCLEAN)
	rm -rf $(PATH_DIST)
	rm -rf $(PATH_TMP)
	rm -rf $(PATH_ASSETS)
build:
	make clean
	$(MKDIR_P) $(PATH_TMP) $(PATH_DIST) $(PATH_ASSETS)
	cp $(PATH_TEMPLATES)/**/*.gohtml $(PATH_TMP)
	cp $(PATH_TEMPLATES)/**/*.js $(PATH_TMP)
	go-bindata -pkg $(PATH_ASSETS) -prefix=$(PATH_TMP) -o $(PATH_ASSETS)/$(ASSETS_FILE) $(PATH_TMP)/...
	CGO_ENABLED=0 GOOS=$(OS) GOARCH=$(ARCH) $(GOBUILD) -o $(PATH_DIST)/$(BINARY_NAME) -v
	rm -rf $(PATH_TMP)
	rm -rf $(PATH_ASSETS)
run:
	$(GOBUILD) -o $(PATH_DIST)/$(BINARY_NAME) -v
	$(PATH_DIST)/$(BINARY_NAME)
deps:
	$(GOGET) github.com/jteeuwen/go-bindata
	$(GOGET) github.com/julienschmidt/httprouter