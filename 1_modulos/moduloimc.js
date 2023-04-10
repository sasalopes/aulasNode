function calcularImc(peso, altura){
    return peso / (altura*altura);
}
/** EXERCÍCIO I: Adicione e exporte uma função que recebe um valor de IMC e retorna o nível de acordo com alguma tabela de IMC */

function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade grau 1";
    } else if (imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }

    module.exports = {calcularImc, classificarIMC};