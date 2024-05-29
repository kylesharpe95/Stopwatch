const number = document.getElementById('number');
const increase = document.getElementById('increase-button');
const decrease = document.getElementById('decrease-button');
const reset = document.getElementById('reset-button');

let count = 0;

const increaseNumber = () => {
  count++;
  number.innerHTML = count;
}

increase.onclick = increaseNumber;

const decreaseNumber = () => {
  count--;
  number.innerHTML = count;
}

decrease.onclick = decreaseNumber;

const resetNumber = () => {
  count = 0;
  number.innerHTML = count;
}

reset.onclick = resetNumber;
