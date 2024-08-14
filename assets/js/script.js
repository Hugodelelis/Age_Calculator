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
    }

    isDayValid() {
        const day = document.querySelector('#day')
        let valid = true

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

        if(!day.value) {
            this.setError(day, 'Preencha o campo')
            valid = false
        }

        if(day.value.length > 2 || day.value > countDays) {
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

        if(month.value.length > 2 || month.value > 12) {
            this.setError(month, 'Més inválido')
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

        if(year.value.length > 4 || year.value > this.date.getFullYear()) {
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

