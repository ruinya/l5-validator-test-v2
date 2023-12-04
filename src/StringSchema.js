export default class stringSchema {
    validators = [(value) => typeof value === "string"];

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }

    startsFromUpperCase() {
        const validator = (value) => {
            return value.trim() !== '' && /^[A-Z]/.test(value.charAt(0));
        };
        this.validators.push(validator);
        return this;
    }

    length(num) {
        const validator = (value) => (value !== null ? value.length === num : false);
        this.validators.push(validator);
        return this;
    }
    
    hasExclamation() {
        const validator = (value) => (value.includes("!"));
        this.validators.push(validator);
        return this;
    }
}