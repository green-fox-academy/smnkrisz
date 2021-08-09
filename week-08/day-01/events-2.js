const button = document.querySelector('button');
const listItems = document.querySelectorAll('li');
const result = document.querySelector('.result');

button.onclick = () => {
    result.innerHTML = listItems.length;
};