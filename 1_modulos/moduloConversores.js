
/** EXERCÍCIO II: Crie um novo módulo chamado moduloConversores.js e exporte funções que convertem, utilize elas no index usando o require:
 * - celsius para fahrenheit;
 * - fahrenheit para celsius;
 */
function celsiusParaFahrenheit(tempCelsius) {
    const tempFahrenheit = (tempCelsius * 1.8) + 32;
    return tempFahrenheit;
  }

  function fahrenheitParaCelsius(tempF) {
    const tempC = (tempF - 32) / 1.8;
    return tempC;
  }

  module.exports = { celsiusParaFahrenheit, fahrenheitParaCelsius};