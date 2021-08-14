let counterRef = document.querySelector("#counter");
let valueRef = counterRef.querySelector("#value");
let decrementRef = counterRef.querySelector('[data-action="decrement"]');
let incrementRef = counterRef.querySelector('[data-action="increment"]');

counterRef.addEventListener("click", (event) => {
  if (event.target === incrementRef) {
    valueRef.textContent = increment(valueRef.textContent);
  }
  if (event.target === decrementRef) {
    valueRef.textContent = decrement(valueRef.textContent);
  }
});

function increment(value) {
  return Number(value) + 1;
}

function decrement(value) {
  return Number(value) - 1;
}
