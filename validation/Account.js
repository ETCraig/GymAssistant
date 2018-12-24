const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateAccountInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be 2 - 40 Characters.';
    }
    if (Validator.isEmpty(data.handle)) {
        errors.status = 'Handle is required.';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}