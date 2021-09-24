// index.js
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTime = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    console.log("It didn't work!", error);
  }
//success case
  printPassTime(passTimes);





});



















// fetchISSFlyOverTimes({ latitude: 43.6909, longitude: -79.3098 }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   }

//   console.log("It worked! Returned flyover times: ", passTimes);
// });

// fetchCoordsByIP('99.237.131.205', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", e)
//   }
//   console.log(data);
// });




// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });