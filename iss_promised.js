const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json', (error) => {
    if (error) {
      return error;
    }
  });
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`, (error) => {
    if (error) {
      return error;
    }
  });
};

const fetchISSFlyOverTimes = (body) => {
  const coords = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error) => {
    if (error) {
      return error;
    }
  });
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    });
};

// given an array of ISS pass time objects log them as a string to the console
const logPassTimes = (array) => {
  // only return the first 5 entries
  if (array.length > 5) {
    array.length = 5;
  }
  array.forEach(item => {
    let timeOccur = new Date(item.risetime);
    console.log(`Next pass at ${timeOccur} for ${item.duration} seconds!`);
  });
};

module.exports = { nextISSTimesForMyLocation, logPassTimes };

// http://ipwho.is/${ip}

// https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}