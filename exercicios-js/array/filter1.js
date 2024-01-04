const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return false;
  })
);

// 1ª que eu fiz
// console.log(produtos.filter(function(p){
//     return p.preco >= 500
// }).filter(function(p){
//     return p.fragil == true
// }))

// 2ª e melhor opção criando 2 function
const caro = (produto) => produto.preco >= 500;
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

// SYNTAX 
// let novoArray = arrayOriginal.filter(function(elemento, indice, array) {
//     // Retorna true se o elemento deve ser incluído no novo array, caso contrário, retorna false.
//   });
// elemento: O valor do elemento atual do array.
// indice: O índice do elemento atual no array.
// array: O array original que está sendo filtrado.

// EXEMPLO
// // Array original
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Utilizando filter para criar um novo array apenas com números pares
// let numerosPares = numeros.filter(function(numero) {
//   return numero % 2 === 0;
// });

// console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]