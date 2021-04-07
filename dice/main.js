function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

const btn = document.querySelector('.btn');
const face = document.querySelector('#face');
const change = document.querySelector('#change');
const diceValue = document.querySelector('.dice-value');
const facesOfDice = [
  '<i class="fas fa-dice-one dice"></i>',
  '<i class="fas fa-dice-two dice"></i>',
  '<i class="fas fa-dice-three dice"></i>',
  '<i class="fas fa-dice-four dice"></i>',
  '<i class="fas fa-dice-five dice"></i>',
  '<i class="fas fa-dice-six dice"></i>',
];

btn.addEventListener('click', (e) => {
  e.preventDefault(e);

  const diceFace = getRandomInt(1, 6);

  change.classList.add('hidden');
  face.classList.remove('hidden');
  face.classList.add('bounce');
  face.addEventListener('animationend', function () {
    this.classList.remove('bounce');
  });

  diceValue.innerHTML = facesOfDice[diceFace - 1];
});
