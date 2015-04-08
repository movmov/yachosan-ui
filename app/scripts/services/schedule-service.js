'use strict';

function scheduleService($resource) {
  return $resource(
    'http://yachosan-api.herokuapp.com/api/v1/schedules/:scheduleId',
    { scheduleId:'@scheduleId' },
    {
        // GET method for local Test
        //'get': {method:'GET'},
        
         // POST method for local test
         //'save': {method:'POST', url:'http://localhost:9000/api/v1/schedules/'}
        
         // DELETE method for local test
         //'remove': {method:'DELETE', url:'http://localhost:9000/api/v1/schedules/:scheduleId'}
    }
      
   );
}