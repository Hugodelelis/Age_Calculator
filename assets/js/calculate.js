class Calculate {
    constructor() {
        this.day = document.querySelector('#result-days');
        this.month = document.querySelector('#result-months');
        this.year = document.querySelector('#result-years');
        this.date = new Date()
        this.operation()
    }

    operation() {
        const dayValue = document.querySelector('#day').value
        const monthValue = document.querySelector('#month').value
        const yearValue = document.querySelector('#year').value

        let yearResult = this.date.getFullYear() - yearValue

        if (monthValue - 1 > this.date.getMonth() && dayValue !== this.date.getDate()) yearResult -= 1

        this.year.innerHTML = yearResult
        

        let monthResult = (12 - monthValue) + this.date.getMonth()

        if(dayValue <= this.date.getDate()) monthResult += 1
        if(monthResult === 12) monthResult = 0

        this.month.innerHTML = this.format(monthResult)

        const months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        let countDays = 0

        if(months[this.date.getMonth()] === 'Abril' || 
        months[this.date.getMonth()] === 'Junho' || 
        months[this.date.getMonth()] === 'Setembro' || 
        months[this.date.getMonth()] === 'Novembro'
        ) countDays = 30

        if (
            months[this.date.getMonth()] === 'Janeiro' ||
            months[this.date.getMonth()] === 'Março' ||
            months[this.date.getMonth()] === 'Maio' ||
            months[this.date.getMonth()] === 'Julho' ||
            months[this.date.getMonth()] === 'Agosto' ||
            months[this.date.getMonth()] === 'Outubro' ||
            months[this.date.getMonth()] === 'Dezembro'
        ) countDays = 31;

        if (months[this.date.getMonth()] === 'Fevereiro') countDays = 29;


        let dayResult
        dayValue <= this.date.getDate() ? dayResult = this.date.getDate() - dayValue : dayResult = (countDays - dayValue) + this.date.getDate()

        this.day.innerHTML = this.format(dayResult)
    }

    format(value) {
        value < 10 ? value = `0${value}` : value

        return value
    }
}