const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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