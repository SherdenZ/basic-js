const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const RATE_OF_REACTION = 0.693 / HALF_LIFE_PERIOD;
  
  if ( typeof sampleActivity !== 'string' ||  sampleActivity.length == 0 || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  let numSampleActivity = parseFloat(sampleActivity);

  if (numSampleActivity > 15 || numSampleActivity <= 0) {
    return false;
  }

  let ageFind = Math.ceil((Math.log(MODERN_ACTIVITY / numSampleActivity)) / RATE_OF_REACTION);
  return ageFind;
};
