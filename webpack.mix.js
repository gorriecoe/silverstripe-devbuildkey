const { mix } = require('laravel-mix');

// javascript
mix.js('js/src/background.js', 'js/dist')
    .js('js/src/newtab.js', 'js/dist')
    .sourceMaps()
