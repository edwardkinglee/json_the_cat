const request = require('request');

const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function (breedName, callback) {

  request(api + breedName, (error, response, body) => {
   
    if (error) {
      return callback(error,null);
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback('No results found', null);
    }

    breedName = data[0].description;
    callback(error, breedName);
  });

};

module.exports = { fetchBreedDescription };