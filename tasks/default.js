let concat = require('gulp-concat')

module.exports = function(gulp, config) 
{
    gulp.task(
        'default',
        function()
        {
            return gulp.src(config.files)
                //.pipe(concat('all.js'))
                .pipe(gulp.dest('dist/'))
        }
    )
}