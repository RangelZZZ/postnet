'use strict';

function checkZipCode(zipCodes) {
    const zipCode = zipCodes.split(',');
    if (zipCode.length !== 5 || zipCode.length !== 9 || zipCode.length !== 10) {
        return false;
    }
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-'];
    for (const code of zipCode) {
        let value = '';
        if (array.includes(code)) {
            value = true;
        }
        else {
            return false;
        }
    }
    return true;
}

function buildCheckCode(zipCodes) {
    const zipCode = zipCodes.split('');
    const zipCodeTotal = zipCode.reduce((pre, next)=> {
        return parseInt(pre) + parseInt(next);
    });
    if (zipCodeTotal / 10 !== 0) {
        zipCodes = zipCodes.concat(10 - (zipCodeTotal % 10));
    }
    return zipCodes;
}

module.exports = {
    checkZipCode: checkZipCode,
    buildCheckCode: buildCheckCode
};