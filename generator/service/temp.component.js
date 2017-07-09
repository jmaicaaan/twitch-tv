import angular from 'angular';
import service from './<%= name %>.service';

let <%= name %>Service = angular.module('app.common.<%= name %>Service', [

])

.service('<%= name %>Service', service)

.name;
    

export default <%= name %>Service;