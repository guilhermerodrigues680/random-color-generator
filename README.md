# Random color generator

[![npm (scoped)](https://img.shields.io/npm/v/@guilhermerodrigues680/random-color-generator.svg)](https://www.npmjs.com/package/@guilhermerodrigues680/random-color-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![install size](https://packagephobia.com/badge?p=@guilhermerodrigues680/random-color-generator)](https://packagephobia.com/result?p=@guilhermerodrigues680/random-color-generator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@guilhermerodrigues680/random-color-generator.svg)](https://www.npmjs.com/package/@guilhermerodrigues680/random-color-generator)
[![github1s](https://img.shields.io/badge/github1s-One%20second%20to%20read%20GitHub-blue?logo=github)](https://github1s.com/guilhermerodrigues680/random-color-generator)
[![npm](https://img.shields.io/npm/dt/@guilhermerodrigues680/random-color-generator?logo=npm)](https://www.npmjs.com/package/@guilhermerodrigues680/random-color-generator)


Publicando meu primeiro pacote no npm.

Gerador de cores aleatórias

## Instalando

### Usando npm:

```bash
$ npm install @guilhermerodrigues680/random-color-generator
```

```js
// CommonJS
const randomColorGenerator = require('@guilhermerodrigues680/random-color-generator');

// ES6 modules
import randomColorGenerator from '@guilhermerodrigues680/random-color-generator';
```

### Usando jsDelivr CDN:

#### Load project hosted on npm

>- `https://cdn.jsdelivr.net/npm/package@version/file`

```html
<script src="https://cdn.jsdelivr.net/npm/@guilhermerodrigues680/random-color-generator"></script>
```

#### Load GitHub release, commit, or branch

_Note: we recommend using npm for projects that support it_

>- `https://cdn.jsdelivr.net/gh/user/repo@version/file`

```html
<script src="https://cdn.jsdelivr.net/gh/guilhermerodrigues680/random-color-generator@1.0.0-alpha.1/dist/random-color-generator.js"></script>
```

### Usando unpkg CDN:

>- unpkg is a fast, global content delivery network for everything on npm
>- `unpkg.com/:package@:version/:file`

```html
<script src="https://unpkg.com/@guilhermerodrigues680/random-color-generator"></script>
```

### Usando Skypack CDN:

>-  Load optimized npm packages with no install and no build tools.
>- `https://cdn.skypack.dev/@scope/package-name`

```html
<script type="module">
  import guilhermerodrigues680RandomColorGenerator from 'https://cdn.skypack.dev/@guilhermerodrigues680/random-color-generator';
</script>
```

## Funcionalidades CDN

Anexe um / no final de um URL para ver uma lista de todos os arquivos em um pacote.

- `https://cdn.jsdelivr.net/npm/package@version/folder/`
- `https://cdn.jsdelivr.net/gh/user/repo@version/folder/`
- `unpkg.com/:package@:version/:file/`

**jsdelivr:** add ".min" to any JS/CSS file to get a minified version, if one doesn't exist, we'll generate it for you

- `https://cdn.jsdelivr.net/npm/package@version/file.min.js`
- `https://cdn.jsdelivr.net/gh/user/repo@version/file.min.js`

**Skypack:**

View metadata about any package.
- `https://cdn.skypack.dev/:packageSpecifier?meta`

Minified (?min)
- `https://cdn.skypack.dev/preact?min`

Package Export
- `https://cdn.skypack.dev/preact/hooks`


## NPM

```bash
# Init
$ npm set init-author-email <user.email.com>
$ npm set init-author-name <user>
$ npm set init-license MIT
$ npm adduser
$ npm init

# Publish
$ npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
$ npm publish
$ npm publish --access=public
$ npm unpublish @guilhermerodrigues680/random-color-generator@1.0.0
$ npm deprecate @guilhermerodrigues680/random-color-generator@"< 1.0.0" "bug crítico corrigido em v1.0.0"
```

## Versionamento

Este projeto segue o seguinte o [Versionamento Semântico 2.0.0](https://semver.org/lang/pt-BR/spec/v2.0.0.html).

<!-- ## Changelog -->
<!-- https://keepachangelog.com/en/1.0.0/ -->

### Desenvolvimento

- `npm run live-server` - Inicia um servidor com hot reload na porta 8080.
- `npm run server` - Inicia um servidor na porta 8080.
- `npm run build-browser` - Compila o arquivo `src/browser.js` para distribuição.

## Licença

O código fonte do projeto está sob a licença **MIT License**, disponível no arquivo [LICENSE](./LICENSE) deste projeto.

## Autor

Guilherme Rodrigues - [github.com/guilhermerodrigues680](https://github.com/guilhermerodrigues680)
