let input = document.getElementById('input')
let display = document.getElementById('display')
let generate = document.getElementById('generate')

let dataDisplay
let displayDataNumber = 0
let initialTime = 0
let finalTime = 0
let dataDisplayText = ''
let time = document.getElementById('time')

let enter = document.getElementById('enter')
let body = document.querySelector('body')
let previous = input.placeholder
let info = document.getElementById('info')
let closeButton = document.getElementById('close')
let scoreInSeconds = document.getElementById('scoreInSeconds')
let scoreInMinutes = document.getElementById('scoreInMinutes')
let words = document.getElementById('words')
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let character
let word
let wordLength
let answerInSeconds = 0
let answerInMinutes = 0
let finalTimeMinute
let background = document.getElementById('background')
let wordcount = document.querySelectorAll('.words')
console.log(wordcount)
console.log(words)

const data = [
  "The cat jumped over the tall fence and escaped",
  "She quickly grabbed her coat and ran outside for help",
  "He built a small shelter near the river last night",
  "They danced happily around the fire singing loud joyful songs",
  "My friend helped me finish my homework before the deadline",
  "The dog chased a squirrel across the field all day",
  "We drove through the mountains during a heavy snowstorm yesterday",
  "The kids played soccer in the muddy field after school",
  "I found an old book hidden beneath the dusty shelf",
  "She painted a colorful mural on the school's main wall",
  "The chef prepared a delicious meal using only fresh ingredients",
  "He fixed the broken bike using tools from the shed",
  "They explored the ancient ruins under the bright full moon",
  "She planted new flowers in the garden every spring morning",
  "The storm destroyed many homes during the night without warning"
];



function getData () {
  dataDisplayNumber = Math.floor(Math.random() * data.length)
  dataDisplay = data[dataDisplayNumber]
  display.textContent = dataDisplay
  dataDisplayText = display.textContent
}

function timer () {
  if (input.value === '') {
    initialTime = Date.now()
    time.value = initialTime
    return
  }
}

function restart () {
  if (dataDisplay) {
    dataDisplay = ''
    input.value = ''
    input.placeholder = previous
    return
  }
}

info.style.display = 'none'
time = 0

let normal = background.style.backgroundColor

generate.addEventListener('click', function () {
  getData()
  restart()
  return
})

input.addEventListener('click', function () {
  input.placeholder = ''
  timer()
  return
})

function score () {
  word = input.value.split(' ')
  wordLength = word.length
  finalTimeMinute = finalTime / 60
  answerInSeconds = wordLength / finalTime
  answerInMinutes = wordLength / finalTimeMinute
  scoreInSeconds.textContent = answerInSeconds.toFixed(2) + 'w/s'
  scoreInMinutes.textContent = answerInMinutes.toFixed(2) + 'w/m'

  wordcount.forEach(w => {
    w.textContent = wordLength + ' words'
  })
  minutes.textContent = finalTimeMinute.toFixed(2) + 'min'
  seconds.textContent = finalTime.toFixed(2) + 's'
  return
}

body.addEventListener('keydown', function checker (event) {
  if (event.key === 'Enter') {
    if (input.value === dataDisplayText) {
      finalTime = (Date.now() - initialTime) / 1000
      display.textContent = ''

      score()

      input.placeholder = previous
      time.textContent = finalTime
      background.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      info.style.display = 'flex'

      input.value = ''
      input.textContent = ''
      return
    }
  }
})

closeButton.addEventListener('click', function () {
  info.style.display = 'none'
  background.style.backgroundColor = normal
})
