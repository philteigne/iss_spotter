const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https:/api.ipify.org?format=json', (error) => {
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

module.exports = { nextISSTimesForMyLocation };

// http://ipwho.is/${ip}

// https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}