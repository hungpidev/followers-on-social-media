const { src, dest, watch, series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const browsersync = require("browser-sync").create();

// Image
function imageTask() {
  return src("app/images/*")
    .pipe(imagemin())
    .pipe(dest("public/home/images"));
}

// Sass Task
function sassTask() {
  return src("app/sass/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("public/home/css", { sourcemaps: "." }));
}

// Pug Task
function pugTask() {
  return src("app/views/*.pug")
    .pipe(pug())
    .pipe(dest("public"));
}

// JavaScript Task
function jsTask() {
  return src("app/js/*.js", { sourcemaps: true })
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("public/home/js", { sourcemaps: "." }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "public",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("public/*.html", browsersyncReload);
  watch(
    [
      "app/images/*",
      "app/sass/**/*.scss",
      "app/views/**/*.pug",
      "app/js/**/*.js",
    ],
    series(sassTask, pugTask, jsTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(
  imageTask,
  sassTask,
  pugTask,
  jsTask,
  browsersyncServe,
  watchTask
);
