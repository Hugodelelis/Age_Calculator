export default class Mask {
    constructor(){
        this.dayField = document.querySelector('#day');
        this.monthField = document.querySelector('#month');
        this.yearField = document.querySelector('#year');
        this.applyMask();
    }

    applyMask() {
        this.dayField.addEventListener('input', () => {
            this.dayField.value = this.maskTwoDigits(this.dayField.value);
        });

        this.monthField.addEventListener('input', () => {
            this.monthField.value = this.maskTwoDigits(this.monthField.value);
        });

        this.yearField.addEventListener('input', () => {
            this.yearField.value = this.maskThreeDigits(this.yearField.value);
        });
    }

    maskTwoDigits(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 2) {
            value = value.slice(0, 2);
        }

        return value;
    }

    maskThreeDigits(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        return value;
    }
}