# plugin-stylus

[Stylus](http://stylus-lang.com) loader plugin for [SystemJS](https://github.com/systemjs/systemjs). Can easily be installed with the
[jspm](http://jspm.io) package manager.

```sh
$ jspm install scss=sass
```

To apply your Stylus styles to your current page asynchronously:

```js
System.import('./style.scss!');
```

or synchronously

```js
import './style.scss!';
```


## Importing from jspm packages

In your stylesheet you can import Stylus files from jspm packages using the `jspm:` prefix. To add Bootstrap support for example, you would use

```sh
jspm install bootstrap-stylus=npm:bootstrap-styl
```

to install the package, and then use

 For example, if you have jspm installed `twbs/bootstrap-sass`:

```styl
@import 'jspm:bootstrap-stylus/assets/stylesheets/bootstrap';
```

## Testing the plugin

```sh
$ npm install -g gulp
...
$ npm install
...
$ jspm install
```

Now you can test runtime compilation

```sh
$ gulp test:runtime
```

bundling

```sh
$ gulp test:bundle
```

or static bundling

```sh
$ gulp test:bundleStatic
```

After that open [http://localhost:3000](http://localhost:3000) in the browser
of your choice.
