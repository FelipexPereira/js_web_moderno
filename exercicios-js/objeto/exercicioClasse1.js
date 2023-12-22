// Exercício: Classe Pessoa

// Crie uma classe chamada Pessoa com as seguintes características:

// Propriedades:

// nome (string): Representa o nome da pessoa.
// idade (number): Representa a idade da pessoa.
// email (string): Representa o endereço de e-mail da pessoa.
// Métodos:

// cumprimentar(): Um método que exibe uma mensagem de cumprimento no console, incluindo o nome da pessoa.
// verificarMaioridade(): Um método que retorna true se a pessoa for maior de 18 anos e false caso contrário.
// enviarEmail(destinatario, mensagem): Um método que simula o envio de um e-mail para o destinatário especificado com a mensagem fornecida.

class Pessoa {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  
    cumprimentar(){
      console.log(`Olá sr(a) ${this.nome}!`)
    }
  
    verificarMaioridade(){
      return this.idade >= 18
    }
  
    enviarEmail(destinatario, mensagem){
      destinatario = this.email
      console.log(`Email: ${destinatario} \nMensagem: ${mensagem}`)
    }
  }
  
  const pessoa1 = new Pessoa('Felipe', 26, 'Felipe@gmail.com')
  const pessoa2 = new Pessoa('Victoria', 26, 'Victoria@gmail.com')
  
  pessoa1.cumprimentar()
  console.log(pessoa1.verificarMaioridade())
  pessoa1.enviarEmail('','oi')
  
  
  
  