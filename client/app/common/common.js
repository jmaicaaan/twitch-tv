import angular from 'angular';
import twitch from './twitch/twitch.component';

let commonModule = angular.module('app.common', [
  twitch
])
  
.name;

export default commonModule;
