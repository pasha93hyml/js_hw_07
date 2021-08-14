let inputRef = document.querySelector('input[type="text"]');
let spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
        spanRef.textContent = event.target.value;
})