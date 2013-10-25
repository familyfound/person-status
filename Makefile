
build: components index.js person-status.css template.js
	@component build --dev

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

lint:
	@jshint *.json *.js --verbose

.PHONY: clean
