import Calculate from './calculate'

export default class Validation {
    constructor() {
        this.form = document.querySelector('#form')
        this.date = new Date()
        this.dayField = document.querySelector('#day')
        this.monthField = document.querySelector('#month')
        this.yearField = document.querySelector('#year')
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handlesubmit(e)
        })

        this.dayField.addEventListener('input', () => {
            this.isDayValid()
        })

        this.monthField.addEventListener('input', () => {
            this.isMonthValid()
        })

        this.yearField.addEventListener('input', () => {
            this.isYearValid()
        })
    }

    handlesubmit(e) {
        e.preventDefault()
        const isDayValid = this.isDayValid()
        const isMonthValid = this.isMonthValid()
        const isYearValid = this.isYearValid()

        if(isDayValid && isMonthValid && isYearValid) {
            const calculate = new Calculate()
        }
    }

    isDayValid() {
        let valid = true

        const months = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        let countDays = 30

        if (
            months[this.monthField.value - 1] === 'Janeiro' ||
            months[this.monthField.value - 1] === 'Março' ||
            months[this.monthField.value - 1] === 'Maio' ||
            months[this.monthField.value - 1] === 'Julho' ||
            months[this.monthField.value - 1] === 'Agosto' ||
            months[this.monthField.value - 1] === 'Outubro' ||
            months[this.monthField.value - 1] === 'Dezembro'
        ) countDays = 31;

        if (months[this.monthField.value - 1] === 'Fevereiro') countDays = 29;

        if (this.dayField.value <= 0 || this.dayField.value > countDays) {
            this.setError(this.dayField, 'Dia inválido.')
            valid = false
        }

        console.log(typeof(this.dayField.value))

        if (!this.dayField.value) {
            this.setError(this.dayField, 'Preencha o campo.')
            valid = false
        }

        if (valid) {
            const errorElement = this.dayField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }
        
        return valid
    }

    isMonthValid() {
        let valid = true

        if (this.monthField.value <= 0 || this.monthField.value > 12) {
            this.setError(this.monthField, 'Més inválido.')
            valid = false
        }

        if (!this.monthField.value) {
            this.setError(this.monthField, 'Preencha o campo.')
            valid = false
        }


        if (valid) {
            const errorElement = this.monthField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }

        return valid
    }

    isYearValid() {
        let valid = true

        if(this.yearField.value > this.date.getFullYear() || this.yearField.value < 1900) {
            this.setError(this.yearField, 'Ano inválido.')
            valid = false
        }

        if (!this.yearField.value) {
            this.setError(this.yearField, 'Preencha o campo.')
            valid = false
        }

        if (valid) {
            const errorElement = this.yearField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }

        return valid
    }

    setError(campo, msg) {
        const existingError = campo.nextElementSibling;
        if(existingError && existingError.classList.contains('error-text')) {
            existingError.remove();
        }

        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

