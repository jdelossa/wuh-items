var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
 'bootstrap': 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
}

elixir(function(mix) {
 mix.sass("app.scss", 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/']})
});

//elixir(function(mix) {
//    mix.sass(['app.scss'], 'public/css/app.css');
//});
