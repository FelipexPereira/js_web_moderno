function calcularMedia(aluno) {
  let media = 0;
  for (let i = 0; i < aluno.length; i++) {
    media += aluno[i];
  }
  media = media / aluno.length;
  return media;
}

function mostrarInfoAluno(aluno, media) {
  console.log(`Nome: ${aluno.nome} \nIdade: ${aluno.idade} \nMedia: ${media}`);
}

const aluno = {
  nome: "Felipe",
  idade: 26,
  notas: [10, 8, 7],
};

const media = calcularMedia(aluno.notas);
const infoAluno = mostrarInfoAluno(aluno, media);
infoAluno;
