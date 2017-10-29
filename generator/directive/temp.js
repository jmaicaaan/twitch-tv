import angular from 'angular';
import directive from './<%= name %>.directive';

/**
 * https://github.com/toddmotto/angularjs-styleguide#directives
 * es5 directive as class based rather than object
 */

let <%= name %>Directive = angular.module('app.common.<%= name %>Directive', [

])

.directive('<%= name %>', () => new directive()) 

.name;

export default <%= name %>Directive;
