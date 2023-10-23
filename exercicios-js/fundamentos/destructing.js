const pessoa = { nome: 'João', idade: 30 };
const frutas = ['maçã', 'banana', 'laranja'];
const cores = ['vermelho', 'verde', 'azul'];
const numeros = [1, 2, 3, 4, 5];

// Perguntas
console.log("Pergunta 1: Desestruturando um objeto simples:");
console.log(`Desestruture o objeto 'pessoa' para obter 'nome' e 'idade.`);
console.log("-------------------------------------------------------");

console.log("Pergunta 2: Definindo valores padrão:");
console.log(`Desestruture o objeto 'pessoa' para obter 'nome' com um valor padrão de 25 para 'idade'.`);
console.log("-------------------------------------------------------");

console.log("Pergunta 3: Alias (renomeando variáveis):");
console.log(`Desestruture o objeto 'pessoa' para obter 'nomeCompleto' renomeando-o como 'nome'.`);
console.log("-------------------------------------------------------");

console.log("Pergunta 4: Desestruturando um array:");
console.log(`Desestruture o array 'frutas' para obter os elementos individualmente.`);
console.log("-------------------------------------------------------");

console.log("Pergunta 5: Ignorando elementos não desejados:");
console.log(`Desestruture o array 'cores' para obter apenas o primeiro e o terceiro elemento.`);
console.log("-------------------------------------------------------");

console.log("Pergunta 6: Desestruturação com spread/rest operator:");
console.log(`Desestruture o array 'numeros' para obter o primeiro e o segundo elemento, e o restante como um novo array.`);
console.log("-------------------------------------------------------");

// Respostas
const { nome, idade } = pessoa;
console.log(`Resposta 1: nome = ${nome}, idade = ${idade}`);

const { nome: nome2, idade: idade2 = 25 } = pessoa;
console.log(`Resposta 2: nome = ${nome2}, idade = ${idade2}`);

const { nomeCompleto: nome3 } = pessoa;
console.log(`Resposta 3: nome = ${nome3}`);

const [fruta1, fruta2, fruta3] = frutas;
console.log(`Resposta 4: fruta1 = ${fruta1}, fruta2 = ${fruta2}, fruta3 = ${fruta3}`);

const [cor1, , cor3] = cores;
console.log(`Resposta 5: cor1 = ${cor1}, cor3 = ${cor3}`);

const [primeiro, segundo, ...resto] = numeros;
console.log(`Resposta 6: primeiro = ${primeiro}, segundo = ${segundo}, resto = [${resto}]`);
