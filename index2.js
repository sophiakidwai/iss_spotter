const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTime } = require('./index')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });