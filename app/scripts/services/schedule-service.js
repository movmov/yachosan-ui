'use strict';

function scheduleService($resource) {
  return $resource(
    'http://yachosan-api.herokuapp.com/api/v1/schedules/:scheduleId',
    { scheduleId:'@scheduleId' },
    {
        // GET method for local Test
        //'get': {method:'GET', url:'http://localhost:9000/api/v1/schedules/:scheduleId'},
        
        // POST method for local test
        //'save': {method:'POST', url:'http://localhost:9000/api/v1/schedules/'}
        
        // DELETE method for local test
        //'remove': {method:'DELETE', url:'http://localhost:9000/api/v1/schedules/:scheduleId'}
        
        // POST method of Participant for local test
        //'newParticipant': {method:'POST', url:'http://localhost:9000/api/v1/schedules/:scheduleId/participants'},

        // POST method of Participant
        'newParticipant': {method:'POST', url:'http://yachosan-api.herokuapp.com/api/v1/schedules/:scheduleId/participants'},

        // DELETE method of Participant
        'removeParticipant': {method:'DELETE', url:'http://yachosan-api.herokuapp.com/api/v1/schedules/:scheduleId/participants/:nickname'}

    }
   );
}