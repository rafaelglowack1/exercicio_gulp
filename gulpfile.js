const gulp =require("gulp");
const sass =require("gulp-sass")(require('sass'));
const uglify =require("gulp-uglify");
const obfuscate =require("gulp-obfuscate");
const imagemin =require("gulp-imagemin");

gulp.task("default" , function(done){
    console.log("gulp funciona");
    done();
})

function compilaSASS(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'))
}

function compilaJS(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/script'))
}

function compilaIMG(){
    return gulp.src('./source/img/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}


exports.watch = function(){
    gulp.watch('./source/styles/*.scss' , {ignoreInitial:false}, gulp.series(compilaSASS));
    gulp.watch('./source/script/*.js' , {ignoreInitial:false}, gulp.series(compilaJS));
    gulp.watch('./source/img/**/*.{png,jpg,jpeg,gif,svg}' , {ignoreInitial:false}, gulp.series(compilaIMG));
}