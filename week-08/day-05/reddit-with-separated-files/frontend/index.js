function convertEpoch(timestamp) {
    let time = ((Math.floor(Date.now() / 1000)) - timestamp)
}

window.onload = () => {
    fetch('http://localhost:3000/posts')
        .then(responseJson => responseJson.json())
        .then(response => {
            const responseObject = response.posts

            responseObject.forEach(post => {
                const div = document.getElementsByClassName('posts')[0]
                const newDiv = document.createElement('div')

                const newTitle = document.createElement('h2')
                const newURL = document.createElement('a')
                const newTime = document.createElement('p')
                const newScore = document.createElement('p')
                const newModify = document.createElement('a')
                const newRemove = document.createElement('a')

                newTitle.innerHTML = post.title
                newURL.innerHTML = post.url
                newTime.innerHTML = convertEpoch(post.timestamp)
                newScore.innerHTML = post.score
                newModify.innerHTML = "modify"
                newRemove.innerHTML = "remove"

                newDiv.appendChild(newTitle)
                newDiv.appendChild(newURL)
                newDiv.appendChild(newTime)
                newDiv.appendChild(newScore)
                newDiv.appendChild(newModify)
                newDiv.appendChild(newRemove)
                div.appendChild(newDiv)
            })
        })
}