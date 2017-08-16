import angular from 'angular';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngLoadingBar from 'angular-loading-bar';
import 'normalize.css';
import 'animate.css';

angular.module('app', [
    ngResource,
    ngAnimate,
    ngAria,
    ngMaterial,
    ngLoadingBar,
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
