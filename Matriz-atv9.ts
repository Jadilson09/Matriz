//9- Crie uma matriz 6x6 com entrada manual. Em seguida,
//calcule e exiba a soma dos elementos das colunas pares da matriz.

let teclado = require (`Prompt-sync`)();

let matrizDois: number[][] = new Array(3);
let somaMatriz: number = 0;

for (let i = 0; i < 6; i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 6; j++) {
        let numero: number = parseInt(teclado(`Digite os números que vão estar no endereço [${i}, ${j}] da matriz: `));
        matrizDois[i][j] = numero;
        if (j % 2 == 0){
            somaMatriz = somaMatriz + numero
        }
    }
}

console.log(matrizDois);
console.log(somaMatriz);