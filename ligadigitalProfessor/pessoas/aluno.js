const Pessoa = require("./Pessoa");
const generationRA = require("./utils");

class Aluno extends Pessoa{
    #ra = ""

    constructor(nome, cpf, sexo) {
        super(nome, cpf , sexo);

        console.log(this.#ra);
        this.#ra = generationRA();
        console.log(this.#ra)
    }

    obterRA = function(){
        console.log(this.nome + " - " + this.#ra)
    }
}


let Anderson = new Aluno("Anderson","123456789", "M")
console.log(Anderson.descrever())
console.log(Anderson.obterRA())