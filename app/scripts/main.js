/* jshint devel:true */
'use strict';

$(function() {

  var $window = $(window),
      $intro = $('.intro'),
      $logo = $('.logo'),
      $slash = $('.intro .slash'),
      $main = $('.main'),
      $header = $('.main header .container'),
      $subtitle = $('.main h2'),
      $manifesto = $('.main .manifesto'),
      $skills = $('.main .skills');


  var Portfolio = function () {
    console.log('App instance created');
  };

  Portfolio.prototype.init = function () {

    $window.on('load resize', function () {
      $intro.height($window.height());
    });

    var height = $window.height();
    
    TweenMax.to($slash, 1.5, {delay: 1.5, left: '-70%', top: '-' + height / 2 + 'px', onComplete: function () {
      $logo.hide();
    } }, '<>');
    TweenMax.to($intro, 0.7, {delay: 3, height: '80px', padding: '0', onComplete: this.stageTwo, onCompleteScope: this }, '<>');
  };

  Portfolio.prototype.stageTwo = function () {
    $intro.hide();
    $main.show();
    TweenMax.to($header, 0.3, {delay: 0, opacity: '1', onComplete: this.stageThree });
  };

  Portfolio.prototype.stageThree = function () {
    console.log('Stage 3');
    TweenMax.to($subtitle, 0.5, {delay: 0, opacity: '1', left: '0' });
    TweenMax.to($manifesto, 0.5, {delay: 1, opacity: '1' });
    TweenMax.to($skills, 0.5, {delay: 2, opacity: '1', left: '0' });
  };


  // init
  var app = new Portfolio();
  app.init();


});
