// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaUtil(dia) {
  switch (dia) {
    case 1:
      console.log("Domingo dia inútil");
      break;
    case 2:
      console.log("Segunda-feira dia útil");
      break;
    case 3:
      console.log("Terça-feira dia útil");
      break;
    case 4:
      console.log("Quarta-feira dia útil");
      break;
    case 5:
      console.log("Quinta-feira dia útil");
      break;
    case 6:
      console.log("Sexta-feira dia útil");
      break;
    case 7:
      console.log("Sábado dia inútil");
      break;
    default:
      console.log("Sei lá que dia é esse e se ele é útil");
  }
}

diaUtil();
