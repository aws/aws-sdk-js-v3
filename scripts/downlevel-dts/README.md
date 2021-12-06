# How to downlevel-dts

## Prerequisite

- Node.js version >= 12.

## Options

```
Runs downlevel-dts npm script (if present) in each workspace of monorepo, and
strips comments from *.d.ts files.

Usage: index.mjs

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```

## Examples

- Run downlevel-dts for workspaces in monorepo:

  `yarn downlevel-dts`
