function contarElementoEspecifico(array, elemento){
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        if(elemento === array[i]){
            resultado++;
        }
    }
    return resultado;
}

const arrayelementos = [1,2,3,4,5,1,2,5,4,1];
const elemento = 1;
const resultado = contarElementoEspecifico(arrayelementos, elemento);

console.log(resultado)