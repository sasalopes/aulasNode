const moduloImc = require("./moduloimc");
console.log(moduloImc.calcularImc(87.5, 1.88));
console.log(moduloImc.classificarIMC(21.5));
//OU 
//const moduloImc = require("./moduloImc");
//const resultado = moduloImc.calcularImc(88.5, 1.9);
//console.log(moduloImc.statusImc(resultado));



//const calculadora = require("./moduloCalculadora")
const { celsiusParaFahrenheit, fahrenheitParaCelsius} = require ("./moduloConversores")
const tempCelsius = 25;
const tempFahrenheit = celsiusParaFahrenheit(tempCelsius);
console.log(tempFahrenheit);

const tempF = 77;
const tempC = fahrenheitParaCelsius(tempF);
console.log(tempC);

//console.log(calculadora.soma(1,1));
//console.log(calculadora.sub(50,3));
//console.log(calculadora.mult(calculadora.pi,2));





