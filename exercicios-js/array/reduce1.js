const alunos = [
    { nome:'João', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 9.2, bolsista: true},
    { nome:'Pedro', nota: 8.3, bolsista: false},
    { nome:'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)

// SYNTAX 
// let resultado = arrayOriginal.reduce(function(acumulador, elemento, indice, array) {
//     // Retorna o valor atualizado do acumulador
//   }, valorInicialDoAcumulador);
//   acumulador: O valor acumulado resultante das operações anteriores.
//   elemento: O valor do elemento atual do array.
//   indice: O índice do elemento atual no array.
//   array: O array original que está sendo reduzido.
//   valorInicialDoAcumulador: O valor inicial do acumulador (opcional).

//   EXEMPLO
// // Array original
// let numeros = [1, 2, 3, 4, 5];

// // Utilizando reduce para calcular a soma dos números
// let soma = numeros.reduce(function(acumulador, numero) {
//   return acumulador + numero;
// }, 0);

// console.log(soma); // Saída: 15