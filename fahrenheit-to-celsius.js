function getFahrenheitToCelsius(fahrenheit){
    let celsius =(fahrenheit-32)*(5/9);
    return celsius;
}

let firstFahrenheitValue= getFahrenheitToCelsius(105.8).toFixed(2);
console.log('Celsius degree is: ', firstFahrenheitValue);

let secondFahrenheitValue= getFahrenheitToCelsius(12).toFixed(2);
console.log('Celsius degree is: ', secondFahrenheitValue);

