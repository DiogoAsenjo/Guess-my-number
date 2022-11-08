'use strict';
/*
console.log(document.querySelector(`.message`).textContent); //Aqui nós estamos selecionando a classe "message" que está contida no documento html. Que no caso é "Start guessing..." já o .textContent é para ver apenas os elemntos de texto, contidos e não todo o código em HTML. Lembrando que para chamar classe usando os ."classe" se dosse id para charm é necessário usar #.

document.querySelector(`.message`).textContent = `🎉 Correct Number!`; // Aqui a gente fez o mesmo que em cima, mas não apenas viu o elemtno, mas mudou o que estava escrito.

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 5; //Nesse caso, como no documento HTML, a classe guess está dentro de um input. devemos usar o .value ao invés do .textContent
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // O Math.random() sempre dá números aleatórios entre 0 e 1. Como queremos no máximo 20, devemos multiplicar por 20. E também, como não queremos nenhum decimal, apenas o número inteiro usamos o .trun. E por fim, como não queremos que o resultado seja 0 e queremos a possibilidade do 20, adicionamos o + 1 no fim.
console.log(secretNumber);

let score = 20; //Aqui, eu poderia ter só usado o document.querySelector(`.score`).textContent. Acontece que, é bom eu ter o valor dentro do código, não apenas no DOM. Além de deixar o código mais limpo.

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
}; //Isso aqui foi feito por causa do refactoring, ao invés de escrever document.querySelector(`.xxx`).textContent todas as vezes que for alterar a mensagem, é mais fácil fazer uma função que ocupa bem menos espaço e deixa o código mais limpo.

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess); //Essa funcção só é chamada com o evento (Check é clicado) acontece.

  if (!guess || guess > 20 || guess < 1) {
    // document.querySelector(`.message`).textContent = `❌ Try a valid number!`;
    displayMessage(`❌ Try a valid number!`); //Aqui é um exmplo de como fazer o refactoring.

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`; //Aqui estamos manipulando CSS com JavaScript. Ao invés de usar o .xxx depois do querySelector, usamos apenas o body, que foi a área que queriamos mudar, depois selecionamos o elemento backgroud-color do CSS, selecionamos .style porque queremos mudar a cor e escrevemos em camelCase conforme pede o JavaScript e selecionamos a cor. Ou seja, quando a pessoa ganha, a cor muda.
    document.querySelector(`.number`).style.width = `30rem`; //Aqui nós fazemos o mesmo esquema da cor, mas mudamos a largura do caixa onde fica o ?
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //When guess is wrong
  } else if (gues !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Lower...` : `Higer...`); //Lembrar de ternay operator.
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost ☠`);
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ` `;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
