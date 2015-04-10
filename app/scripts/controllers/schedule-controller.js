'use strict'

function scheduleController(scheduleService) {

    var vm = this;

    vm.schedule = {};
    vm.schedules = [];
    
    // Get a schedule detail with scheduleId
    vm.getSchedule = function() {
        scheduleService.get({scheduleId:vm.scheduleId}).$promise.then(function(data) {
            vm.schedule = data;
        });
        console.log(vm.schedule);
    };

    // Get all of schedule
    vm.getAllSchedule = function() {

        scheduleService.query().$promise.then(function(data) {
            vm.schedules = data;
        });
        console.log(vm.schedules);
    };

    // Make a new schedule
    vm.newSchedule = function() {
        
        var scheduleData = {};
        
        scheduleData.scheduleName = vm.scheduleName;
        scheduleData.scheduleDescription = vm.scheduleDescription;
        scheduleData.proposedDates = vm.proposedDates.split(",");
        
        scheduleService.save({},scheduleData).$promise.then(function(data) {
          vm.schedule = data;
        });
        console.log(vm.schedule);
     };
    
    // Remove an existing schedule
    vm.removeSchedule = function(schedule) {
        console.log(schedule.scheduleId);
        scheduleService.remove({scheduleId:schedule.scheduleId}).$promise.then(function(data) {
            vm.schedules.splice(vm.schedules.indexOf(schedule), 1);
        });
     };
}
