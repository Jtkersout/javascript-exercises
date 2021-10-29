const ftoc = function(ftoc) {
let convertedCelcius = (ftoc-32)*5/9;
    convertedCelcius = convertedCelcius.toFixed(1);
    convertedCelcius = parseFloat(convertedCelcius);

    return convertedCelcius;
};

const ctof = function(ctof) {
  let convertFahrenheit = (ctof*9/5)+32;
  convertFahrenheit = convertFahrenheit.toFixed(1);
  convertFahrenheit = parseFloat(convertFahrenheit);
  return convertFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
