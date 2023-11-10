let comparacaComThis = function(param){
    console.log(this === param)
}

comparacaComThis(global)

const obj = {}
comparacaComThis = comparacaComThis.bind(obj)
comparacaComThis(global)
comparacaComThis(obj)

let comparacaComThisArrow = param => console.log(this === param)
comparacaComThis(global)
comparacaComThisArrow(module.exports)

comparacaComThisArrow = comparacaComThisArrow.bind(obj)
comparacaComThisArrow(obj)
comparacaComThisArrow(module.exports)