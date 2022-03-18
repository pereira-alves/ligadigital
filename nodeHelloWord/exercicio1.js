const media = 6;
console.log('Média ' + media);

const sala = [
    aluno = {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [6.5, 4.3, 7.1, 5.0]
    },
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];
// console.log(sala)

const aluno1 = sala[0];
const aluno2 = sala[1];

console.log(aluno1.nome);
// console.log(aluno2.nome);

const mediaAluno1 = ( aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3] ) / 4;

var statusAluno1 = '???';

if(mediaAluno1 < media) {
    statusAluno1 = 'Reprovado'
} else{
    statusAluno1 = 'Aprovado'
}

console.log('Média do aluno ' + aluno1.nome + ' = ' + mediaAluno1)


console.log(`Aluno: ${aluno1.nome} - ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);


// ---------- Repetindo aluno 2

console.log(aluno2.nome);
// console.log(aluno2.nome);

const mediaAluno2 = ( aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3] ) / 4;

var statusAluno2 = '???';

if(mediaAluno2 < media) {
    statusAluno2 = 'Reprovado'
} else{
    statusAluno2 = 'Aprovado'
}

console.log('Média do aluno ' + aluno2.nome + ' = ' + mediaAluno2)


console.log(`Aluno: ${aluno2.nome} - ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${statusAluno2}`);

