const valores = [7.8, 7.9, 8.9, 5.5];
console.log(valores[0], valores[2]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);
console.log(valores.pop());
delete valores[0]
console.log(valores)
console.log(typeof valores)