import angular from 'angular';
import service from './twitch.service';

let twitchService = angular.module('app.common.twitchService', [

])

.service('twitchService', service)

.name;
    

export default twitchService;