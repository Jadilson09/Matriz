//8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
//Em seguida, exiba a matriz na tela e encontre o maior
//elemento da matriz e a posição em que ele se encontra.
console.clear();
let teclado = require (`Prompt-sync`)();
let maior: number =0;
let linha: number =0;
let coluna: number =0;
let matrizDois: number[][] = new Array (3);

for (let i = 0; i < 3; i++) {

matrizDois[i] = new Array(3);

for (let j = 0; j < 3; j++) {

let numero: number = Math.floor(Math.random() * 21);

if (numero > maior){
    maior = numero 
    linha = i
    coluna = j
}

matrizDois[i][j] = numero;

  }
}

console.log(matrizDois);