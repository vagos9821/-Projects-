// Variables
let answer = document.getElementById('answer')
const results = ['Yes!', 'Of Course!', 'Yup', 'Maybe', "I'm not sure", 'No!', 'In your dreams', 'Nope']
let btn = document.getElementById('btn')
let yeses = results.slice(0, 3)
let maybes = results.slice(3, 5)
let nos = results.slice(5, 7)
let magic = document.getElementById('magic')


// Pick random answer
btn.addEventListener('click', function() {
    let question = document.getElementById('question').value
    if (question.length < 1.5) {
        alert('Type your question in the text box')
    } else if (question.includes('?') === false) {
        alert('A question must end with a question mark')
    } else if (question.length > 1.5 && question.includes('?') === true) {
        answer.innerHTML = results[Math.floor(Math.random() * results.length)]
    }

    // Styling
    if (answer.innerHTML == yeses[0] || answer.innerHTML == yeses[1] || answer.innerHTML == yeses[2]) {
        magic.classList.remove('no')
        magic.classList.remove('maybe')
        magic.classList.remove('magic')
        magic.classList.add('yes')
    } else if (answer.innerHTML == nos[0] || answer.innerHTML == nos[1] || answer.innerHTML == nos[2]) {
        magic.classList.remove('yes')
        magic.classList.remove('maybe')
        magic.classList.remove('magic')
        magic.classList.add('no')
    } else if (answer.innerHTML == maybes[0] || answer.innerHTML == maybes[1] || answer.innerHTML == maybes[2]) {
        magic.classList.remove('yes')
        magic.classList.remove('no')
        magic.classList.remove('magic')
        magic.classList.add('maybe')
    }
})