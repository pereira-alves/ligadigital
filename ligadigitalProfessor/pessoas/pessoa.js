const { Module } = require("module");

class Pessoa {
    #nome = '';
    #cpf = '';
    #sexo = '';
    
    constructor(nome, cpf, sexo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#sexo = sexo;
    }

obterNome = function() {
    return this.#nome;
}

alterarNome = function (novoNome) {
    this.#nome = novoNome;
}

// VOLTAR E EXIBIR TODOS OS DADOS COM ESSA NOCA FUNCTION

exibirClasse = function(){
    this.#nome
    this.#cpf
    this.#sexo
}

descrever = function() {
    console.log(this.#nome + " - " +this.#cpf )
}

}


let anderson = new Pessoa('Anderson', '12345678', 'Masculino');

console.log(anderson.obterNome());
anderson.alterarNome("Tiago");
console.log(anderson.obterNome())

anderson.exibirClasse(anderson)

module.exports=Pessoa