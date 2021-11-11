const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countDownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds) < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = getTimeUnit(minutes) < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = getTimeUnit(hours) < 10 ? '0' + hours : hours
    daysContainer.textContent = getTimeUnit(days) < 10 ? '0' + days : days
}

const updateCountDown = () =>  {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24   
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountDownValues({ days, hours, minutes, seconds })
}

const handleCountDownDisplay = () => {
    spinnerLoading.remove()
    countDownContainer.style.display = 'flex' 
}

setTimeout(handleCountDownDisplay, 100)

setInterval((updateCountDown), 1000)
