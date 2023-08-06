const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

let correct = true

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            correct = true
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if (correct) renderNewQuote()
})



function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data?.content)
}
async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = ''
    quoteInputElement.value = null
    quote.split('')?.forEach(element => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = element
        quoteDisplayElement.appendChild(characterSpan)
    });
    startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date
    setInterval(() => {
        // timerElement.innerText = getStartTimer()
        timer.innerText = getStartTimer()
    }, 1000)
}
function getStartTimer() {
    return Math.floor((new Date - startTime) / 1000)
}

renderNewQuote()