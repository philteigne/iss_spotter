const { nextISSTimesForMyLocation } = require('./iss_promised');

// given array of objects parse numbers into dates
const parseNumToDate = (number) => {
  return new Date(number);
};

nextISSTimesForMyLocation()
  .then(passTimes => {
    passTimes.forEach(item => {
      console.log(`Next pass at ${parseNumToDate(item.risetime)} for ${item.duration} seconds!`);
    });
  })
  .catch((error) => {
    console.log("It didn't work", error.message);
  });