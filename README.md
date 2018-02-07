# eslint-plugin-mirego

The linting rules used at Mirego.

### Installation

```shell
$ npm install -D eslint-plugin-mirego
```

### Usage

If you don’t already have it installed, you’ll need `babel-eslint`:

```shell
$ npm install -D babel-eslint
```

Modify your `.eslintrc` file:

```json
{
  "plugins": ["mirego"],
  "extends": [
    "plugin:mirego/recommended"
  ],
  "rules": {
    "you-can-override": "rules here"
  }
}
```

## License

`eslint-plugin-mirego` is © 2018 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-best-language/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
