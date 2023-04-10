const express = require("express");

//Define uma aplicação backend em Express
//Recursos pré-configurados
const app = express();

//Define um roteamento
//Manipulador

app.get ("/", (requisicao, resposta) => {
    resposta.send("<h2>Hello,World! é top</h2>");
    });

    //Inicializa a escuta de requisicoes do servidor
    app.listen(3000);