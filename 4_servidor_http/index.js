const http= require("http")
const os = require("os")
const cpf = require("cpf");


const host = "localhost";
const porta = 3000;

const servidor = http.createServer((requisicao, resposta) =>{
    console.log("Requisição ocorreu!");
    // o que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Informacoes do sistema</h1>");
    resposta.write("<hr/>");
    resposta.write(`<p>${os.hostname()} | ${os.platform()} | ${os.type()}</p>`);
    resposta.write(`<p><b>Total de cpus:</b> ${os.cpus().length}</p>`);

    resposta.write(`<p>Proprietário: ${cpf.generate()}</p>`)
    //Encerra a comunicação
    resposta.end();
});

//Servidor fica esperando requisições
servidor.listen(porta, host);

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
 * um cpf aleatório.
 */