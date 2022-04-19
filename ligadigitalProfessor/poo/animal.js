class Animal {
    constructor(tipo, nome, som, idade){
        this.tipo = tipo;
        this.nome = nome;
        this.som = som;
        this.idade = idade;
    }
    makeASound(){
        console.log(`${this.nome} faz: ${this.som}`);
    }
}
var pudim = new Animal('gato', 'Pudim', 'miau', 3);
var misty = new Animal('cachorro','Misty', 'Au Au', 5)
var vaca = new Animal('vaca','vaca','Muuu',);

console.log(pudim);
console.log(misty);
console.log(vaca);

pudim.makeASound();
misty.makeASound();
vaca.makeASound();