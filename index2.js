const { nextISSTimesForMyLocation, logPassTimes } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(passTimes => {
    logPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work", error.message);
  });