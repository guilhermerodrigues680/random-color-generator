# First npm package

Publicando meu primeiro pacote no npm.

## Instalando

Usando npm:

```bash
$ npm install guilhermerodrigues680--first-npm-package
```

Usando jsDelivr CDN:

```txt
// load any project hosted on npm
https://cdn.jsdelivr.net/npm/package@version/file
```

```html
<script src="https://cdn.jsdelivr.net/npm/guilhermerodrigues680--first-npm-package"></script>
```

```txt
// load any GitHub release, commit, or branch
// note: we recommend using npm for projects that support it
https://cdn.jsdelivr.net/gh/user/repo@version/file
```

```html
<script src="https://cdn.jsdelivr.net/gh/guilhermerodrigues680/first-npm-package@1.0.0-alpha.1/dist/first-npm-package.js"></script>
```

Usando unpkg CDN:

```txt
// unpkg is a fast, global content delivery network for everything on npm
unpkg.com/:package@:version/:file
```

```html
<script src="https://unpkg.com/guilhermerodrigues680--first-npm-package"></script>
```

## Funcionalidades CDN

Anexe um / no final de um URL para ver uma lista de todos os arquivos em um pacote.

```txt
https://cdn.jsdelivr.net/npm/package@version/folder/
https://cdn.jsdelivr.net/gh/user/repo@version/folder/
unpkg.com/:package@:version/:file/
```

**jsdelivr:** add ".min" to any JS/CSS file to get a minified version, if one doesn't exist, we'll generate it for you

```txt
https://cdn.jsdelivr.net/npm/package@version/file.min.js
https://cdn.jsdelivr.net/gh/user/repo@version/file.min.js
```

## NPM

```bash
# Init
$ npm set init-author-email <user.email.com>
$ npm set init-author-name <user>
$ npm set init-license MIT
$ npm adduser
$ npm init

# Publish
$ npm publish
$ npm unpublish guilhermerodrigues680--first-npm-package@1.0.0
$ npm deprecate guilhermerodrigues680--first-npm-package@"< 1.0.0" "bug crítico corrigido em v1.0.0"
```
