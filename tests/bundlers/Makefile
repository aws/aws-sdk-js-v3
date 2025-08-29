.PHONY: test build vite webpack

# asserts that bundles contain expected content.
test:
	node test.spec.mjs

# create bundles
build:
	make vite webpack esbuild

vite:
	npx vite build

webpack:
	npx webpack

esbuild:
	npx esbuild ./source.ts --bundle --outfile=./dist/esbuild-dist.js --format=esm --tree-shaking=true