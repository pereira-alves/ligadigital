const express = require('express')
const app = express();
const port = 3000;

app.get(`/hello`, (requisicao, resposta) => {
    console.log(requisicao.query)
    const nome = requisicao.query.nome;
    const sobrenome = requisicao.query.sobrenome || '';

    resposta.send(`Hello ${nome} ${sobrenome}`);
});

app.get('/bye' , (requisicao, resposta) =>{
    resposta.send(`Tchau`)
})

const sala = [
    {
        nome: "Tiago dos Santos",
        disciplina: "Matematica",
        notas: [6.5 , 4.3, 7.1, 5.0]
    },
    {
        nome: "Alex Carneiro",
        disciplina: "Português",
        notas: [7.5 , 9.3, 8.1, 5.0]
    },
    {
        nome: "Alexandre Silva",
        disciplina: "Matematica",
        notas: [10 , 8.4, 9.1, 10.0]
    },
    {
        nome: "Tiago da Costa",
        disciplina: "Matematica",
        notas: [6.5 , 4.3, 7.1, 5.0]
    },
    
];
app.get('/aluno/:numeroAluno', (requisicao, resposta) => {
    const aluno = sala[requisicao.params.numeroAluno - 1];
});

app.get('/busca', (requisicao, resposta) => {
    const termoBusca = requisicao.query.nome.toLowerCase();
    let resultados = [];
    for (let indice=0; indice < sala.length; indice++) {
        if (sala[indice].nome.toLowerCase().includes(termoBusca)) {
            resultados.push(sala[indice]);
        }
    }
    if (resultados.length == 0) {
        return resposta.status(404).send('Nenhum resultado encontrado');
    }
    return resposta.send(resultados)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
