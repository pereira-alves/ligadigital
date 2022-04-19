const Carro = require('./carro')

let fusca = new Carro("VW", "Fusca", "Azul", "1980");
let brasilia = new Carro("VW", "Brasilia", "Amarela", "1975");

fusca.descrever();
fusca.ligar();
fusca.situacao();
fusca.acelerar();
fusca.situacao();
fusca.acelerar();
fusca.acelerar();
fusca.situacao();
fusca.frear();
fusca.situacao();
fusca.frear();
fusca.frear();
fusca.frear();
fusca.situacao();
fusca.frear();
fusca.frear();
fusca.situacao();
fusca.desligar();
console.log("Substituindo o porçante ...")
brasilia.descrever();
brasilia.ligar();
brasilia.situacao();
brasilia.acelerar();
brasilia.situacao();
brasilia.acelerar();
brasilia.acelerar();
brasilia.situacao();
brasilia.frear();
brasilia.situacao();
brasilia.frear();
brasilia.frear();
brasilia.frear();
brasilia.situacao();
brasilia.frear();
brasilia.frear();
brasilia.situacao();
brasilia.desligar();