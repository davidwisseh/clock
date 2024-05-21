const sass = require("gulp-sass")(require("sass"));
const { src, dest, watch, series } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const start = require("react-scripts/scripts/start");

// Sass Task
function scssTask() {
  return src("src/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("src/dist/css", { sourcemaps: "." }));
}

// Watch Task
function watchTask() {
  watch("src/scss/**/*.scss", scssTask);
}

// Default Gulp Task
exports.default = series(scssTask, watchTask);
