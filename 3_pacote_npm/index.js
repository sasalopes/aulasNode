const CPF = require("cpf");

console.log(CPF.generate());
console.log(CPF.format("11111111111"));
console.log(CPF.isValid("11111111111"));


/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

const CPF = require("cpf");
const fs = require("fs");

let cpfList = '';
for (let i = 0; i < 1000; i++) {
    const cpf = fs.br.cpf();
    cpfList += cpf + '\n';
}
fs.writeFileSync("./cpfs.txt")

const arquivoCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
for (let cpf of arquivoCpfs){
    console.log(cpf)
}



