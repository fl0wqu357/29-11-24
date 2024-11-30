const button = document.getElementById('button');
const input = document.getElementById('input');
const text = document.getElementById('text');

button.addEventListener('click', () => {
    const inputValue = input.value;

    if (inputValue.trim() !== '') {
        text.textContent = inputValue;
    } else {
        alert('Por favor, escribí algo en el campo de texto.');
    }
});
