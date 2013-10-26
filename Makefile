
build: components index.js person-status.styl template.js
	@component build --dev -u component-stylus-plugin

lint:
	@jshint *.json *.js --verbose

template.js: template.html
	@component convert $<

template.html: template.jade
	@jade -P $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

node_modules: package.json
	@npm install

# open browser correctly in mac or linux
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Linux)
		open := google-chrome
endif
ifeq ($(UNAME_S),Darwin)
		open := open
endif

test: build
	@${open} test/index.html

testci: build node_modules
	@./node_modules/.bin/testem test/testem.json

example: build
	@${open} test/example.html

.PHONY: clean test testci example
