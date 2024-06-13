const convertToCelsius = function(F) {

  let conversion = (F - 32) * 5 / 9;

  return parseFloat(conversion.toFixed(1));

};

const convertToFahrenheit = function(C) {

  let conversion = C * 9 / 5 + 32;

  return parseFloat(conversion.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
