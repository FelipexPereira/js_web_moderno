// 12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero) {
  let resultado = numero;
  for (i = numero - 1; i > 0; i--) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log(fatorial(4));
