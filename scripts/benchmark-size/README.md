# SDK Size Benchmark

To avoid future issues like [#2747](https://github.com/aws/aws-sdk-js-v3/issues/2747),
it's important to validate the v3 SDK packages' sizes are reasonable. This package
provides a command line tool to benchmark and validate the SDK size
metrics, including:

- **publish size**: The size of the package's source code published to npm.
- **publish files**: The count of individual files fo the package's source code
  published to npm.
- **Webpack compatibility**: Whether users can run Webpack command successfully
  with minimal configuration, and version of Webpack tool.
- **Rollup compatibility**: Whether users can run Rollup command successfully
  with minimal configuration, and version of Rollup tool.
- **Esbuild compatibility**: Whether users can run Esbuild command successfully
  with minimal configuration, and version of Esbuild tool.

By default, the report Markdown file is generated under [report.md](report)

## How to use it

By default, the tool doesn't require any options, but it offers some options in
case you need to customize the behavior. You can see the full descriptions by
running:

```console
# from project root
yarn test:size --help
```

here's the options description:

```console
Options:
  --version           Show version number                              [boolean]
  --since             Run the size benchmark on changed package since last
                      release or main branch
              [string] [choices: "all", "last_release", "main"] [default: "all"]
  --scopeConfigPath
  [string] [default: "/path/to/project/root/scripts/benchmark-size/scope.json"]
  --limitConfigPath
  [string] [default: "/path/to/project/root/scripts/benchmark-size/limit.json"]
  --skipLocalPublish  Skip publishing the packages locally. You can skip it if
                      you didn't change any packages since last execution
                                                      [boolean] [default: false]
  --rawOutputPath [string] [default: "/path/to/project/root/benchmark/size/raw"]
  --reportPath                                                [string] [default:
        "/path/to/project/root/benchmark/size/report.md"]
  --skipRawOutput     Whether to generate the raw benchmark data to configured
                      path                            [boolean] [default: false]
  --help              Show help                                        [boolean]
```

## Important Configuration Files

The maintainers only need to test the packages that is public for customer to
consume publicly like all service clients and some utility packages like
presigner. The other internal packages are tested as dependencies of those
public packages. There are 2 config files that maintainers need to update update
to make sure the tool runs on all packages it suppose to run and validate them
with reasonable limit:

- [`scope.json`][scope-json]: Define what packages are considered as public, so
  they will exist as an entry in the report. You can use wild card in the `package`
  entry. For packages that requires peer dependencies, you can specify
  `dependencies` list. You can skip running the browser bundlers test if the package
  is Node.js runtime only by setting the `skipBundlerTests` boolean entry.
- [`limit.json`][limit-json]: Define how to validate the packages' size. For each
  package you can validate either of the metrics the tool generates: `publishSize`
  and `publishFiles`. For each metrics, you can validate them by `limit` -- the
  absolute value, or `hike` -- the percentage of increase since recent value.

## How does it work

The command works in following process:

1. Detect the packages that changed since last release, thus requires validating
   their size metrics before next release.
1. Validate they have been built locally and release to a local NPM registry
1. For each changed package, creating a temporary project with [the project templates][templates]
   The templates generation context is exactly defined in [`scope.json`][scope-json].
1. Run NPM install from the local registry and calculate the npm size metrics.
1. Run Webpack, Rollup, and Esbuild bundlers on the temporary project and calculate
   the bundle size for each of them.
1. Clear temporary projects.
1. Update the [report.md][report]. Validating them according to [`limit.json`][limit-json]

[Prior arts][prior-arts] referred during the implementation.

[report]: ../../benchmark/size/report.md
[scope-json]: ./scope.json
[limit-json]: ./limit.json
[templates]: ./templates
[prior-arts]: https://github.com/styfle/packagephobia#how-is-this-different
