const request = require('request');

//  retrieve users IP through API request
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    //  error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipString = JSON.parse(body).ip;
    callback(error, ipString);
    return;
    
  });
  // use request to fetch IP address from JSON API https://api.ipify.org?format=json
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${42}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const locationParse = JSON.parse(body);

    if (!locationParse.success) {
      const msg = `Success status was ${locationParse.success}. Server message says: ${locationParse.message} when fetching for IP ${locationParse.ip}`;
      callback(Error(msg), null);
      return;
    }

    const locationObj = {
      latitude: locationParse.latitude,
      longitude: locationParse.longitude,
    };

    callback(error, locationObj);
    return;
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };