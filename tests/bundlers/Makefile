.PHONY: test build vite webpack

# asserts that bundles contain expected content.
test:
	node test.spec.mjs

# create bundles
build:
	make vite webpack

vite:
	npx vite build

webpack:
	npx webpack