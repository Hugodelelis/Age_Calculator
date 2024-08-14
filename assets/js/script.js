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

        if(!day.value) {
            this.setError(day, 'Preencha o campo')
            valid = false
        }

        if(day.value.length > 2) {
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

        if(month.value.length > 2) {
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

        if(year.value.length > 4) {
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

