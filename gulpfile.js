//https://github.com/negomi/react-burger-menu/blob/master/gulpfile.js

let gulp = require('gulp')
let defaultGulpTasks = require('./tasks/default')

let taskConfig = {
	files:['src/*.js', 'src/*/*.js']
}


defaultGulpTasks(gulp, taskConfig)