function convertEpoch(timestamp) {
    let time = ((Math.floor(Date.now() / 1000)) - timestamp)
}

window.onload = () => {
    fetch('http://localhost:3000/posts')
        .then(responseJson => responseJson.json())
        .then(response => {
            const responseObject = response.posts

            responseObject.forEach(post => {
                const posts = document.getElementsByClassName('posts')[0]
                posts.appendChild(createPosts(post))
            })
        })
}

const createPosts = object => {

    const newDiv = document.createElement('div')
    newDiv.className = 'posts'

    const newTitle = document.createElement('h2')
    newTitle.innerHTML = object.title

    const newURL = document.createElement('a')
    newURL.innerHTML = object.url

    const newTime = document.createElement('p')
    newTime.innerHTML = convertEpoch(object.timestamp)

    const newScore = document.createElement('p')
    newScore.innerHTML = object.score

    const newModify = document.createElement('a')
    newModify.innerHTML = "modify"

    const newRemove = document.createElement('a')
    newRemove.innerHTML = "remove"

    newDiv.appendChild(newTitle)
    newDiv.appendChild(newURL)
    newDiv.appendChild(newTime)
    newDiv.appendChild(newScore)
    newDiv.appendChild(newModify)
    newDiv.appendChild(newRemove)

    return newDiv
}