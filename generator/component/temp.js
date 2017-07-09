import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      component: '<%= name %>'
    });
})

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
