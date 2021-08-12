const button = document.querySelector('button')
const pTag = document.querySelector('p')

button.addEventListener('click', () => {
    fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(jokes => {
            pTag.innerHTML = jokes.value.joke
        })
        .catch((error) => {
            console.log(error)
        });
});