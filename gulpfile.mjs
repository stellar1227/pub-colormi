import gulp, { src, dest, watch } from 'gulp'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import fileInclude from 'gulp-file-include'
import browserSync from 'browser-sync'
import fs from 'fs'

const sassCompiler = gulpSass(sass)
const bs = browserSync.create()

/**
 * @see fileInclude https://www.npmjs.com/package/gulp-file-include
 */

const paths = {
  styles: {
    mo: {
      src: 'shared/styles/mo.scss',
      watch: 'shared/styles/**/*',
      dest: 'build/mo/styles/',
    },
    pc: {
      src: 'shared/styles/pc.scss',
      watch: 'shared/styles/**/*',
      dest: 'build/pc/styles/',
    },
  },
  scripts: {
    src: 'shared/scripts/**/*.js',
    dest: 'build/scripts/',
  },
  html: {
    index: {
      src: 'src/index.html',
      dest: 'build/',
    },
    pc: {
      src: 'src/pc/**/*.html',
      dest: 'build/pc/',
    },
    mo: {
      src: 'src/mo/**/*.html',
      dest: 'build/mo/',
    },
    include: 'shared/include/**/*.html',
  },
}

export function stylesMO() {
  return src(paths.styles.mo.src)
    .pipe(sassCompiler())
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: 'mo',
        suffix: '.min',
      })
    )
    .pipe(dest(paths.styles.mo.dest))
    .pipe(bs.stream())
}

export function stylesPC() {
  return src(paths.styles.pc.src)
    .pipe(sassCompiler())
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: 'pc',
        suffix: '.min',
      })
    )
    .pipe(dest(paths.styles.pc.dest))
    .pipe(bs.stream())
}

export function scripts() {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(concat('ui.js'))
    .pipe(dest(paths.scripts.dest))
    .pipe(bs.stream())
}

export function htmlIndex() {
  return src(paths.html.index.src)
    .pipe(dest(paths.html.index.dest))
    .pipe(bs.stream())
}

export function htmlPC() {
  return src(paths.html.pc.src)
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: 'shared/include',
      })
    )
    .pipe(dest(paths.html.pc.dest))
    .pipe(bs.stream())
}

export function htmlMO() {
  if (fs.existsSync('src/mo')) {
    return src(paths.html.mo.src)
      .pipe(
        fileInclude({
          prefix: '@@',
          basepath: 'shared/include',
        })
      )
      .pipe(dest(paths.html.mo.dest))
      .pipe(bs.stream())
  }
  console.log("Skipping 'htmlMO' task as 'src/mo' directory does not exist.")
  return Promise.resolve()
}

/*
 * You could even use `export as` to rename exported tasks
 */
export function serve() {
  bs.init({
    server: {
      baseDir: 'build',
    },
    open: true, // 기본 페이지 자동 열기 활성화
  })

  watch(paths.styles.mo.watch, stylesMO)
  watch(paths.styles.pc.watch, stylesPC)
  watch(paths.scripts.src, scripts)
  watch(paths.html.index.src, htmlIndex)
  watch(paths.html.pc.src, htmlPC)
  watch(paths.html.mo.src, htmlMO)
  watch(paths.html.include, gulp.series(htmlPC, htmlMO))
}

const build = gulp.series(
  gulp.parallel(stylesMO, stylesPC, scripts, htmlIndex, htmlPC, htmlMO)
)

/*
 * Export a default task
 */
export default gulp.series(build, serve)
