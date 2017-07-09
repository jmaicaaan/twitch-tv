import angular from 'angular';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import uiBootstrap from 'angular-ui-bootstrap';
import ngLoadingBar from 'angular-loading-bar';
import 'normalize.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.min.js';

angular.module('app', [
    ngResource,
    ngAnimate,
    ngLoadingBar,
    uiBootstrap,
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
