
build: components index.js person-status.styl template.js
	@component build --dev -u component-stylus-plugin

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

lint:
	@jshint *.json *.js --verbose

.PHONY: clean
