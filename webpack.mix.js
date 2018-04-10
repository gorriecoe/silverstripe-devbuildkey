const { mix } = require('laravel-mix');

// javascript
mix.js('js/src/devbuildkey.js', 'js/dist').sourceMaps()
