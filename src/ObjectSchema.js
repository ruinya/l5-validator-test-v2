/* eslint-disable class-methods-use-this */
export default class ObjectSchema {
    constructor(validator) {
      this.validator = validator;
    }
  
    isValid(object) {
      const keys = Object.keys(object);
      if (keys.length !== Object.keys(this.validator).length) return false;
      return keys.every((key) => this.validator[key].isValid(object[key]));
    }
  
    shape(object) {
      return new ObjectSchema(object);
    }
}
