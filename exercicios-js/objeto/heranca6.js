function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 321)
console.log(aula1,aula2)


// Simulando NEW
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 789)
const aula4 = novo(Aula, 'Bem vindo kkkk', 788889)
console.log(aula3,aula4)