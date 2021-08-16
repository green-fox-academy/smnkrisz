const createPost = document.querySelector('#createPost')

createPost.addEventListener('submit', () => {
    const newPost = {
        title: createPost.title.value,
        url: createPost.url.value
    }

    const requestOption = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            title: createPost.title.value,
            url: createPost.url.value
        })
    }

    fetch('http://localhost:3000/posts', requestOption)
        .then(responseJSON => responseJSON.json())
        .then(response => response)
        .catch((error) => {
            console.log(error)
        });
});