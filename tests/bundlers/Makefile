.PHONY: test build vite webpack

# asserts that bundles contain expected content.
test:
	node bundlers.spec.mjs
	du -sh ./dist-min/*

# create bundles
build:
	rm -rf ./dist/*
	rm -rf ./dist-min/*
	make vite webpack esbuild

# note: vite deletes files in the build folders and must run first.
vite:
	npx vite build --config vite.config.ts
	npx vite build --config vite.min.config.ts

webpack:
	npx webpack
	npx webpack -c webpack.min.config.js

esbuild:
	npx esbuild ./source.ts --bundle --outfile=./dist/esbuild-dist.js --format=esm --tree-shaking=true
	npx esbuild ./source.ts --bundle --outfile=./dist-min/esbuild-dist.min.js --format=esm --tree-shaking=true --minify

clean:
	rm -rf dist dist-min dist-vite dist-esbuild dist-webpack