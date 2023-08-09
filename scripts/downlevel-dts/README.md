# How to downlevel-dts

## Prerequisite

- Node.js version >= 12.

## Options

```
Runs build:types:downlevel npm script (if present) in each workspace of monorepo, and
strips comments from *.d.ts files.

Usage: index.mjs

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```

## Examples

- Run build:types:downlevel for workspaces in monorepo:

  `yarn build:types:downlevel`
