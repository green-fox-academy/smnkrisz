window.onload = () => {
    fetch('http://localhost:3000/game')
        .then(responseJson => responseJson.json())
        .then(response => {
            const responseObject = response.questions

            responseObject.forEach(question => {
                const questions = document.getElementsByClassName('questions-container')[0]
                questions.appendChild(createQuestion(question))
            })
        })
}

const createQuestion = object => {

    const questionDiv = document.createElement('div')
    questionDiv.className = 'question'

    const answerDiv = document.createElement('div')
    answerDiv.className = 'answers'

    const allQuestions = document.createElement('h2')
    allQuestions.innerHTML = object.question

    const allAnswers = document.createElement('a')
    allAnswers.innerHTML = object.answer


    questionDiv.appendChild(allQuestions)
    answerDiv.appendChild(allAnswers)
}