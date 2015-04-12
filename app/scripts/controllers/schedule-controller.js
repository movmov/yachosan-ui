'use strict'

function scheduleController(scheduleService) {

    var vm = this;

    vm.schedule = {};
    vm.schedules = [];
    vm.participant = {};
    
    // Get a schedule detail with scheduleId
    vm.getSchedule = function() {
        scheduleService.get({scheduleId:vm.scheduleId}).$promise.then(function(data) {
            vm.schedule = data;
        });
        console.log("View Model after GET schedule Method");
        console.log(vm);
        console.log(vm.schedule);
    };

    // Get all of schedule
    vm.getAllSchedule = function() {

        scheduleService.query().$promise.then(function(data) {
            vm.schedules = data;
        });
        console.log("View Model of GET ALL schedules method");
        console.log(vm);
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
        console.log("View Model of POST new schedule method");
        console.log(vm.schedule);
     };
    
    // Remove an existing schedule
    vm.removeSchedule = function(schedule) {
        console.log(schedule.scheduleId);
        scheduleService.remove({scheduleId:schedule.scheduleId}).$promise.then(function(data) {
            vm.schedules.splice(vm.schedules.indexOf(schedule), 1);
        });
     };
    
    // Participate the event
    vm.newParticipant = function() {
        
        console.log(vm);
        scheduleService.newParticipant({scheduleId:vm.schedule.scheduleId},vm.participant).$promise.then(function(data) {
            console.log("Return Value of POST Participant");
            console.log(data);
        });
        
        // スケジュールをアップデートさせるため再度取得
        // ToDo View側でリアルタイムにテーブル情報が反映されない
        // 処理が重ければ、参加者追加の中でvm.scheduleのParticipants配列にオブジェクト追加
        scheduleService.get({scheduleId:vm.schedule.scheduleId}).$promise.then(function(data) {
            vm.schedule = data;
        });
        console.log("View Model after POST Participant method");
        console.log(vm);
     };
    
    // Cancel the event
    vm.removeParticipant = function(participant) {
        
        console.log(vm);
        
        scheduleService.removeParticipant({scheduleId:vm.schedule.scheduleId,nickname:participant.nickname}).$promise.then(function(data) {
            console.log("Return Value of DELETE Participant");
            console.log(data);
        });
        
        // スケジュールをアップデートさせるため再度取得
        // ToDo View側でリアルタイムにテーブル情報が反映されない
        // 処理が重ければ、参加者追加の中でvm.scheduleのParticipants配列にオブジェクト追加
        scheduleService.get({scheduleId:vm.schedule.scheduleId}).$promise.then(function(data) {
            vm.schedule = data;
        });
        console.log("View Model after DELETE Participant method");
        console.log(vm);
     };
}
