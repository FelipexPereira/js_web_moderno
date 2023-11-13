// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capInicial, taxa, tempo) {
  console.log(`Juros simples: ${capInicial + (capInicial * taxa * tempo)}`);
}

function jurosComposto(capInicial, taxa, tempo) {
    console.log(`Juros composto: ${capInicial*(1 + taxa)**tempo}`)
}


jurosSimples(100,10/100,2)
jurosComposto(100,10/100,2)