const del = require('del');
const gulp = require('gulp');
const elixir = require('laravel-elixir');
const webpack = require('laravel-elixir-webpack-official');

elixir.config.assetsPath = 'src/';
elixir.config.publicPath = 'dist/';

const Task = elixir.Task;

Elixir.extend('remove', function(path) {

    new Task('remove', function() {
        console.log(`Current directory: ${process.cwd()}`);
        return del(path);
    });
});

elixir(mix => {

    mix.remove([ 'public/build']);

    mix.sass('app.scss')

        .webpack('app.js');      

    mix.copy('node_modules/font-awesome/fonts', 'dist/fonts/')
})