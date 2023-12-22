// Definindo a classe Lancamento
class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

// Definindo a classe cicloFinanceiro
class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.Lancamentos = [];
    }

    addLancamentos(...Lancamentos) {
        Lancamentos.forEach(l => this.Lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

// Criando instâncias da classe Lancamento
const salario = new Lancamento('Salario', 45000);
const contaLuz = new Lancamento('Luz', -220);

// Criando uma instância da classe cicloFinanceiro
const contas = new cicloFinanceiro(6, 2018);

// Adicionando lançamentos à instância cicloFinanceiro
contas.addLancamentos(salario, contaLuz);

// Exibindo o resultado do método sumario() no console
console.log(contas.sumario());
console.log(contas)
