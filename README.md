# @immowelt/browserslist-config

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Build Status](https://github.com/ImmoweltGroup/browserslist-config/actions/workflows/release.yml/badge.svg)](https://github.com/ImmoweltGroup/browserslist-config/actions?query=branch%3Amaster)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Config to share target browsers between different [ImmoweltGroup](https://github.com/ImmoweltGroup) front-ends.

## Usage

Add it to your dependencies.

```bash
yarn add @immowelt/browserslist-config --dev
```

Use your [Browserslist](https://github.com/browserslist/browserslist#shareable-configs) settings in your `package.json`.

```json
"browserslist": [
  "extends @immowelt/browserslist-config"
]
```

## Commits

Please use one of the following prefixes in your commit message:

- `BUGFIX:` for small fixes
- `FEATURE:` for minor changes and
- `BREAKING:` for breaking changes

## License

See the `LICENSE` file at the root of the repository.
