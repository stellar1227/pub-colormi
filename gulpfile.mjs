import gulp, { src, dest, watch } from 'gulp'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import fileInclude from 'gulp-file-include'
import browserSync from 'browser-sync'
import htmlBeautify from 'gulp-html-beautify'
import fs from 'fs'
import path from 'path'

const sassCompiler = gulpSass(sass)
const bs = browserSync.create()

const paths = {
  styles: {
    mo: {
      src: 'shared/styles/mo.scss',
      watch: ['shared/styles/**/*', 'shared/styles/screen/_mo.scss'],
      dest: 'build/mo/styles/',
      lib: 'build/mo/styles/lib/',
    },
    pc: {
      src: 'shared/styles/pc.scss',
      watch: ['shared/styles/**/*', 'shared/styles/screen/_pc.scss'],
      dest: 'build/pc/styles/',
      lib: 'build/pc/styles/lib/',
    },
    libSrc: 'shared/styles/lib/**/*',
  },
  assets: {
    src: 'shared/assets', // 공통 assets 소스 경로
    pcDest: 'build/pc/assets/', // PC용 assets 복사 경로
    moDest: 'build/mo/assets/', // MO용 assets 복사 경로
  },
  scripts: {
    src: ['shared/scripts/**/*.js', '!shared/scripts/sweetalert2.all.min.js'],
    dest: 'build/scripts/',
    copy: [
      'shared/scripts/sweetalert2.all.min.js',
      'shared/scripts/jquery-3.7.1.min.js',
      'shared/scripts/swiper-bundle.min.js',
    ],
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
    guide: {
      src: 'src/guide/**/*.html',
      dest: 'build/guide/',
    },
    include: 'shared/include/**/*.html',
  },
}

const htmlParse = (target) => {
  const beautifyOptions = {
    indent_size: 2,
    indent_with_tabs: false,
  }

  const pathConfig = paths.html[target]
  const srcPath = `src/${target}`

  if (!fs.existsSync(srcPath)) {
    console.log(
      `'${srcPath}' 디렉터리가 존재하지 않아 'html${target.toUpperCase()}' 작업을 건너뜁니다.`
    )
    return Promise.resolve()
  }

  return src(pathConfig.src)
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: 'shared/include',
      })
    )
    .pipe(htmlBeautify(beautifyOptions))
    .pipe(dest(pathConfig.dest))
    .pipe(bs.stream())
}

export const htmlPC = () => htmlParse('pc')
export const htmlMO = () => htmlParse('mo')
export const htmlGuide = () => htmlParse('guide')

const stylesParse = (target) => {
  const pathConfig = paths.styles[target]
  const sassOptions = {
    outputStyle: 'expanded',
  }

  return src(pathConfig.src)
    .pipe(sassCompiler(sassOptions).on('error', sassCompiler.logError))
    .pipe(cleanCSS())
    .pipe(
      rename({
        basename: target,
        suffix: '.min',
      })
    )
    .pipe(dest(pathConfig.dest))
    .pipe(bs.stream())
}

export const stylesMO = () => stylesParse('mo')
export const stylesPC = () => stylesParse('pc')

// lib 폴더 복사 작업
const copyLibPC = () =>
  src(paths.styles.libSrc).pipe(dest(paths.styles.pc.lib)).pipe(bs.stream())

const copyLibMO = () =>
  src(paths.styles.libSrc).pipe(dest(paths.styles.mo.lib)).pipe(bs.stream())

// Node.js 기반 파일 복사 함수
const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true })
    fs.readdirSync(src).forEach((childItem) => {
      copyRecursiveSync(path.join(src, childItem), path.join(dest, childItem))
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

// PC용 assets 복사 작업
const copyAssetsPC = (done) => {
  copyRecursiveSync(paths.assets.src, paths.assets.pcDest)
  bs.reload()
  done()
}

// MO용 assets 복사 작업
const copyAssetsMO = (done) => {
  copyRecursiveSync(paths.assets.src, paths.assets.moDest)
  bs.reload()
  done()
}

export const scripts = () =>
  src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(concat('ui.js'))
    .pipe(dest(paths.scripts.dest))
    .pipe(bs.stream())

export const copyScripts = () =>
  src(paths.scripts.copy).pipe(dest(paths.scripts.dest))

export const htmlIndex = () =>
  src(paths.html.index.src).pipe(dest(paths.html.index.dest)).pipe(bs.stream())

// Gulp 서버 및 감시
export const serve = () => {
  bs.init({
    server: {
      baseDir: 'build',
    },
    serveStaticOptions: {
      extensions: ['png', 'jpg', 'jpeg', 'svg', 'gif'],
    },
    cors: true,
    open: true,
  })

  watch(paths.styles.mo.watch, stylesMO)
  watch(paths.styles.pc.watch, stylesPC)
  watch(paths.styles.libSrc, gulp.series(copyLibPC, copyLibMO)) // lib 파일 변경 감지
  watch(paths.assets.src, gulp.series(copyAssetsPC, copyAssetsMO)) // assets 파일 변경 감지
  watch(paths.scripts.src, scripts)
  watch(paths.html.index.src, htmlIndex)
  watch(paths.html.pc.src, htmlPC)
  watch(paths.html.mo.src, htmlMO)
  watch(paths.html.guide.src, htmlGuide)
  watch(paths.html.include, gulp.series(htmlPC, htmlMO, htmlGuide))
}

// Gulp 빌드
const build = gulp.series(
  gulp.parallel(
    stylesMO,
    stylesPC,
    copyLibPC,
    copyLibMO,
    copyAssetsPC, // PC용 assets 복사
    copyAssetsMO, // MO용 assets 복사
    scripts,
    copyScripts,
    htmlIndex,
    htmlPC,
    htmlMO,
    htmlGuide
  )
)

export default gulp.series(build, serve)
