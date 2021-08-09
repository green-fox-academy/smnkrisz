const button = document.querySelector('button');
let counter = 0;

button.addEventListener('click', (event) => {
    if (counter < 1) {
        counter++;
        console.log(Date.now());
    }
});

// OR

button.addEventListener('click', () => {
    console.log(Date.now());
    button.disabled = true;
});