const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', () => {
    setTimeout(() => {
        text.innerHTML = '2 second ellapsed';
    }, 2000);
});