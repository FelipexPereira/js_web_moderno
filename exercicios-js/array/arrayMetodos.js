const pilotos = ['Vettel', 'Alonso', 'Massa', 'Raikkonen']
console.log(pilotos)
pilotos.pop() //ultimo elemento sai
console.log(pilotos)

pilotos.push('Verstappen') // add elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // add na primeira posição
console.log(pilotos)

// splice pode add ou remover elementos
// 1º onde inicia, 2º qtd remover, 3º add, add ...
pilotos.splice(2, 2, 'W', 'K')
console.log(pilotos)
pilotos.splice(2, 0, 'X', 'Y')
console.log(pilotos)

const algunsPiTotal = pilotos.slice(2) // novo array
console.log(algunsPiTotal)

const algunsPilotos2 = pilotos.slice(1, 4) // pego do indice 1 ao 3
console.log(algunsPilotos2)