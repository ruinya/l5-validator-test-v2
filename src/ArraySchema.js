export default class ArraySchema {
    validators = [(value) => Array.isArray(value)];
  
    constructor(newValidators) {
      if (newValidators) this.validators = newValidators;
    }
  
    isValid(value) {
      return this.validators.every((validator) => validator(value));
    }
  
    maxDepth(value) {
      const validator = (array) => {
        const getMaxDeep = (arr, deep = 0) => {
          if (arr.length === 0) return deep;
          const deeps = arr.map((val) => (Array.isArray(val) ? getMaxDeep(val, deep + 1) : deep));
          return Math.max(...deeps);
        };
        return getMaxDeep(array) <= value;
      };
      return new ArraySchema([...this.validators, validator]);
    }
}