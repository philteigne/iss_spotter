const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }
  const ipString = JSON.parse(ip);

  console.log("It worked! Returned IP:", ipString.ip);
});