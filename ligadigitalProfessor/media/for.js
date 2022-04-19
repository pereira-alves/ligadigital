let tamanhoMaximo = 25;

for (let contator = 0; contator <= tamanhoMaximo; contator++) {
    let contatorPar = contator % 2 == 0;
    if (contatorPar) {
        console.log(contator);
    }
}