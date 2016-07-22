'use strict';

function checkZipCode(zipCode, validChars) {

    const lengthVerified = (zipCode.length == 5 && zipCode.length !== 9 && zipCode.length !== 10);

    const charsVerified = !zipCode
        .split('')
        .some(code => validChars.every(validChar => validChar !== code));

    return lengthVerified && charsVerified;
}

function buildCheckCode(zipCode) {

    const numbers = zipCode
        .split('')
        .filter(code => code !== '-')
        .map(code => parseInt(code));

    const sum = numbers.reduce((a, b)=> a + b);

    if (sum % 10 === 0) {
        numbers.push(0);
    } else {
        numbers.push(10 - (sum % 10));
    }

    return numbers.join('');
}

function buildBarcodes(checkCode, numberFormat) {

    const codes = checkCode.split('')
        .map(code =>numberFormat[code]);

    return `|${codes.join('')}|`;
}

module.exports = {
    checkZipCode: checkZipCode,
    buildCheckCode: buildCheckCode,
    buildBarcodes: buildBarcodes
};