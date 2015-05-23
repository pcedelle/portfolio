/* jshint devel:true */
'use strict';

$(function() {

  var $window = $(window),
      $intro = $('.intro'),
      $logo = $('.logo'),
      $slash = $('.intro .slash'),
      $main = $('.main'),
      $header = $('.main header .container'),
      $content = $('.main .content');


  var Portfolio = function () {
    console.log('App instance created');
  };

  Portfolio.prototype.init = function () {
    $intro.height($window.height());
    TweenMax.to($slash, 1.5, {delay: 1, left: '-70%', onComplete: function () {
      $logo.hide();
    } }, '<>');
    TweenMax.to($intro, 0.7, {delay: 2.5, height: '80px', padding: '0', onComplete: this.stageTwo }, '<>');
  };

  Portfolio.prototype.stageTwo = function () {
    $intro.hide();
    $main.show();
    TweenMax.to($header, 0.3, {delay: 0, opacity: '1'});
    TweenMax.to($content, 0.3, {delay: 0.5, opacity: '1'});
  };

  Portfolio.prototype.loop = function(first_argument) {
    // body...
  };

  // init
  var app = new Portfolio();
  app.init();


});
