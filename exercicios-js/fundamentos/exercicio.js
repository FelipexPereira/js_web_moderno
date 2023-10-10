function calcularMedia(aluno) {
  let media = 0;
  for (let i = 0; i < aluno.length; i++) {
    media += aluno[i];
  }
  media = media / aluno.length;
  return media;
}

function mostrarInfoAluno(aluno, media) {
  let infoAluno = console.log(`Nome: ${aluno.nome} \n
Idade: ${aluno.idade} \n
Media: ${media}`);
  return infoAluno;
}

const aluno = {
  nome: "Felipe",
  idade: 26,
  notas: [10, 8, 7],
};

const media = calcularMedia(aluno.notas);
//console.log(`A media do ${aluno.nome} é ${media}`);
const infoAluno = mostrarInfoAluno(aluno, media);
console.log(infoAluno);
