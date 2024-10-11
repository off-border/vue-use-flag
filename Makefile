test: install
	npx vitest

build: install
	npx tsc

install:
	npm install