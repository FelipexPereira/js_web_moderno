const escola = "Cod3r";

console.log(escola.charAt(4)); // posicao
console.log(escola.charAt(5)); // posicao 

console.log(escola.charCodeAt(3)); // tabelas unicode

console.log(escola.indexOf('3'));

console.log(escola.substring(1)); //ate o indice 1
console.log(escola.substring(0, 3)); //ate o indice 3 sem incluir ele

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log('Ana, Maria, Pedro'.split(','));