angular.module('app', ['ngResource'])
.controller('scheduleController', ['scheduleService', scheduleController])
.service('scheduleService', ['$resource', scheduleService]);