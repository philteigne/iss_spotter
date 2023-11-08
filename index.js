const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);

  //  search IP location once IP has been found
  // fetchCoordsByIP(ip, (error, location) => {
  //   if (error) {
  //     console.log("It didn't work", error);
  //     return;
  //   }
  //   console.log("I know where you live:", location);
  // });
});

fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, issInfo) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }
  console.log("Look up, it might be there right now!", issInfo);
});