function celsiusToFarenheit(celsius) {
    let farenheit = (celsius * 1.8) + 32;
 return farenheit;

}
let firstCelsiusValue = celsiusToFarenheit(13).toFixed(2);
console.log('In fahrenheit:',firstCelsiusValue);

let secondCelsiusValue =celsiusToFarenheit(41);
console.log('In fahrenheit:' ,secondCelsiusValue);