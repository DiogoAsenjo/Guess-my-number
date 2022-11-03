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

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess); //Essa funcção só é chamada com o evento (Check é clicado) acontece.

  if (!guess || guess > 20 || guess < 1) {
    document.querySelector(`.message`).textContent = `❌ Try a valid number!`;

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`; //Aqui estamos manipulando CSS com JavaScript. Ao invés de usar o .xxx depois do querySelector, usamos apenas o body, que foi a área que queriamos mudar, depois selecionamos o elemento backgroud-color do CSS, selecionamos .style porque queremos mudar a cor e escrevemos em camelCase conforme pede o JavaScript e selecionamos a cor. Ou seja, quando a pessoa ganha, a cor muda.
    document.querySelector(`.number`).style.width = `30rem`; //Aqui nós fazemos o mesmo esquema da cor, mas mudamos a largura do caixa onde fica o ?
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //Guess to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Lower...`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost ☠`;
      score = 0;
      document.querySelector(`.score`).textContent = score;
    }

    //Guess to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Higer...`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost ☠`;
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
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ` `;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
