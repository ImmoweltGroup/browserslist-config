# @immowelt/browserlist-config

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/browserslist-config.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/browserslist-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Config to share target browsers between different [ImmoweltGroup](https://github.com/ImmoweltGroup) front-ends.

## Usage

Add it to your dependencies.

```bash
npm i -D @immowelt/browserlist-config
```

Use your [Browserlist](https://github.com/browserslist/browserslist#shareable-configs) settings in your `package.json`.

```json
"browserslist": [
  "extends @immowelt/browserslist-config"
]
```

## License

See the `LICENSE` file at the root of the repository.
