const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const body = {
        question: form.elements.question.value,
        name: [
            {
                answer_1: form.elements.answer_1.value,
                is_correct: 0
            },
            {
                answer_2: form.elements.answer_2.value,
                is_correct: 0
            },
            {
                answer_3: form.elements.answer_3.value,
                is_correct: 0
            },
            {
                answer_4: form.elements.answer_4.value,
                is_correct: 0
            }
        ]
    }

    const requestOption = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    }
    const responseJSON = await fetch('http://localhost:3000/api/questions', requestOption)
    const response = await responseJSON.json()
})