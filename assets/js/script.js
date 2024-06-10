const data = new Date()
const currentYear = data.getFullYear()
const currentMonth = data.getMonth() + 1
const currentDay = data.getDate()
const yesterday = data.getFullYear()

const addZero = (num) => {
    return num < 10 ? `0${num}` : `${num}`
}

const results = () => {
    const day = Number(document.querySelector('#day').value);
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);

    let yearResult 
    let monthResult 
    let dayResult 
    let totDay = 0

    if (currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10 || currentMonth == 12) {
        totDay = 31
    } else if (currentMonth == 2) {
        totDay = 28
    } else {
        totDay = 30
    }
    
    console.log(totDay)
    console.log(currentMonth)
    currentYear > year ? yearResult = (year - currentYear) * (-1) : yearResult = (year - currentYear)
    document.querySelector('#result-years').innerHTML = addZero(yearResult-1)

    currentMonth > month ? monthResult = (month - currentMonth) * (-1) : monthResult = (month - currentMonth)
    document.querySelector('#result-months').innerHTML = monthResult  

    currentDay < day ? dayResult = (day - currentDay) : dayResult = (day - currentDay) + totDay
    document.querySelector('#result-days').innerHTML = addZero(dayResult) 

    if (year == currentYear) document.querySelector('#result-years').innerHTML = addZero(yearResult)

    if (month <= currentMonth && day <= currentDay) {
        document.querySelector('#result-years').innerHTML = addZero(yearResult)
    }
}

const verify = () => {
    const day = Number(document.querySelector('#day').value);
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);

    let spanDay = document.querySelector('#spanDay')
    let spanMonth = document.querySelector('#spanMonth')
    let spanYear = document.querySelector('#spanYear') 

    if (!day) {
        spanDay.innerHTML = 'Preencha o campo'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--'
        return
    } else if (1 > day || day > 31) {
        spanDay.innerHTML = 'Dia inválido'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--' 
        return
    } else {
        spanDay.innerHTML = ''
    }

    if (!month) {
        spanMonth.innerHTML = 'Preencha o campo'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--'
        return
    } else if (1 > month || month > 12) {
        spanMonth.innerHTML = 'Més inválido'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--'
        return
    } else {
        spanMonth.innerHTML = ''
    }

    if (!year) {
        spanYear.innerHTML = 'Preencha o campo'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--'
        return
    } else if (1600 > year || year > currentYear) {
        spanYear.innerHTML = 'Ano inválido'
        document.querySelector('#result-days').innerHTML = '--'
        document.querySelector('#result-months').innerHTML = '--'
        document.querySelector('#result-years').innerHTML = '--'
        return
    } else {
        spanYear.innerHTML = ''
    }

    if (day && month && year && 1 <= day || day <= 31 && 1 <= month || month <= 12 && 1600 <= year || year >= currentYear) {
        spanDay.innerHTML = ''
        spanMonth.innerHTML = ''
        spanYear.innerHTML = ''
        results()
    }
}