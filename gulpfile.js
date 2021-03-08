const gulp = require("gulp");

// load gulp tasks from ./tasks
require("gulp-load-tasks")();

// default tasks
gulp.task(
  "default",
  gulp.series(
    "fetch"
  )
)


