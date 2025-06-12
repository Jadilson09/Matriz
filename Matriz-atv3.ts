//3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.

console.clear()
let teclado = require (`Prompt-sync`)();
let minhaMatriz: string[][] = [];
let coluna: number =2;
let linha: number =4;
let matriztres: string [][] = new Array(3);
for (let z = 0; z < linha; z++) {

 minhaMatriz[z] = new Array(3);

 for (let x = 0; x < coluna; x++) {
 let nome: string = teclado (`Digite o nome que vai estar no endereço [${z}. ${x}] da matriz: `);
 
minhaMatriz[z][x] = nome;
 }
}

console.log(minhaMatriz);