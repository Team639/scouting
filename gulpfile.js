var gulp = require('gulp');
var webpack = require('webpack');
var nodemon = require('nodemon');
var del = require('del');

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('clean', function(){
  del('./bin');
});

gulp.task('build-be', ['clean'], function(done) {
  webpack(require('./webpack-server.config')).run(onBuild(done));
});

gulp.task('build-fe', ['clean'], function(done) {
  webpack(require('./webpack-client.config')).run(onBuild(done));
});

gulp.task('watch-be', function() {
  webpack(require('./webpack-server.config')).watch(100, function(err, stats){
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('watch-fe', function() {
  webpack(require('./webpack-client.config')).watch(100, onBuild());
});

gulp.task('build', ['build-fe', 'build-be']);

gulp.task('watch', ['watch-fe', 'watch-be']);

gulp.task('run-dev', ['watch-be', 'watch-fe'], function() {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: './bin/server.js',
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
});