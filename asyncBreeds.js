// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed, endFunc) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) endFunc(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const printsBreed = breed => {
console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printsBreed);
