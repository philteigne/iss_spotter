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

module.exports = { fetchMyIP };