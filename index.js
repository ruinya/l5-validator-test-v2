import ArraySchema from './src/ArraySchema.js';
import StringSchema from './src/StringSchema.js';

class Validator {
    string() {
        return new StringSchema();
    }

    array() {
        return new ArraySchema([(value) => Array.isArray(value)]);
    }
}

export default Validator;