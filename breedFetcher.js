const request = require('request');
const args = process.argv.slice(2);
const search = args[0];
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(api + search, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('No results found.');
    return 0;
  }
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0].description);
});