class Validation {
    constructor() {
        this.form = document.querySelector('#inputs')
        this.date = new Date()
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handlesubmit(e)
        })
    }

    handlesubmit(e) {
        e.preventDefault()

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        const isDayValid = this.isDayValid()
        const isMonthValid = this.isMonthValid()
        const isYearValid = this.isYearValid()

        if(isDayValid && isMonthValid && isYearValid) {
            const calculate = new Calculate()
        }
    }

    isDayValid() {
        const day = document.querySelector('#day')
        const month = document.querySelector('#month')
        let valid = true

        const months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        let countDays = 30

        if (
            months[month.value - 1] === 'Janeiro' ||
            months[month.value - 1] === 'Março' ||
            months[month.value - 1] === 'Maio' ||
            months[month.value - 1] === 'Julho' ||
            months[month.value - 1] === 'Agosto' ||
            months[month.value - 1] === 'Outubro' ||
            months[month.value - 1] === 'Dezembro'
        ) countDays = 31;

        if (months[month.value - 1] === 'Fevereiro') countDays = 29;
        if(!day.value) {
            this.setError(day, 'Preencha o campo')
            valid = false
        }

        if(day.value.length > 2 || day.value > countDays || day.value <= 0) {
            this.setError(day, 'Dia inválido')
            valid = false
        }
        
        return valid
    }

    isMonthValid() {
        const month = document.querySelector('#month')
        let valid = true

        if(!month.value) {
            this.setError(month, 'Preencha o campo')
            valid = false
        }

        if(month.value.length > 2 || month.value > 12 || month.value <= 0) {
            this.setError(month, 'Mês inválido')
            valid = false
        }

        return valid
    }

    isYearValid() {
        const year = document.querySelector('#year')
        let valid = true

        if(!year.value) {
            this.setError(year, 'Preencha o campo')
            valid = false
        }

        if(year.value.length > 4 || year.value > this.date.getFullYear() || year.value <= 1200 ) {
            this.setError(year, 'Ano inválido')
            valid = false
        }

        return valid
    }

    setError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validation = new Validation()

