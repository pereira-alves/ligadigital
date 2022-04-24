const express = require('express')
const app = express();
const port = 3000;

app.get(`/soma`, (requisicao, resposta) => {
    console.log(requisicao.query)
    const a = requisicao.query.a;
    const b = requisicao.query.b;

    resposta.send(` A soma de ${a} e ${b} é igual : ${(Number(a)+Number(b))} </br>
                    A subtração de ${a} e ${b} é igual : ${(Number(a)-Number(b))} </br>
                    A multiplicação de ${a} e ${b} é igual : ${(Number(a)*Number(b))} </br>
                    A divisão de ${a} e ${b} é igual : ${(Number(a)/Number(b))}`);

});


app.get('/bye' , (requisicao, resposta) =>{
    resposta.send(`Tchau`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
