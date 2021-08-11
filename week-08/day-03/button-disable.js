const form = document.querySelector('form')
const dog = document.querySelector('#dog')
const cat = document.querySelector('#cat')
const goldfish = document.querySelector('#Viktor')
const yes = document.querySelector('#yes')
const no = document.querySelector('#no')
const loveCat = document.querySelector('#i-love-cats')
const signUp = document.querySelector('#sign-up')

form.addEventListener('click', () => {
    if (dog.checked === true || cat.checked === true) {
        signUp.removeAttribute('disabled')
    }
    if (dog.checked === true || cat.checked === true && yes.checked === true) {
        loveCat.removeAttribute('disabled')
        loveCat.addEventListener('click', () => {
            alert(`Thank you, you've successfully signed up for cat facts!`)
        })
    }
    if (goldfish.checked === true && no.checked === true) {
        signUp.removeAttribute('disabled')
        signUp.addEventListener('click', () => {
            alert('Sigh, we still added you to the cat facts list.')
        })
    }
})