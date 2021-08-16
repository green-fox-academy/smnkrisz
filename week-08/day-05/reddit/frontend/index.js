function convertEpoch(timestamp) {
    let time = ((Math.floor(Date.now() / 1000)) - timestamp)
}

window.onload = () => {
    fetch('http://localhost:3000/posts')
        .then(responseJson => responseJson.json())
        .then(response => {
            const responseObject = response.posts

            responseObject.forEach(post => {
                const div = document.querySelector('.posts')
                const newDiv = document.createElement('div')
                div.appendChild(newDiv)

                const newTitle = document.createElement('h2')
                newTitle.innerHTML = post.title
                newDiv.appendChild(newTitle)

                const newURL = document.createElement('a')
                newURL.innerHTML = post.url
                newDiv.appendChild(newURL)

                const newTime = document.createElement('p')
                newTime.innerHTML = convertEpoch(post.timestamp)
                newDiv.appendChild(newTime)

                const newScore = document.createElement('p')
                newScore.innerHTML = post.score
                newDiv.appendChild(newScore)

                const newModify = document.createElement('a')
                newModify.innerHTML = "modify"
                newDiv.appendChild(newModify)

                const newRemove = document.createElement('a')
                newRemove.innerHTML = "remove"
                newDiv.appendChild(newRemove)

            })
        })
}