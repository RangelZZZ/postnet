'use strict';

const table = [
    '||:::', ':::||', '::|:|', '::||:', ':|::|',
    ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];

function zipcode2Barcode(zipcode) {
    if (!vaildZipcode(zipcode)) {
        return {success: false, error: 'invalid_zipcode'};
    }

    const zipcodeWithoutDash = formateZipcode(zipcode);
    const zipcodeInDightArray = toDightArray(zipcodeWithoutDash);
    const checkDight = caculateCheckcode(zipcodeInDightArray);
    const barcode = toBarcode(zipcodeInDightArray.concat(checkDight));
    const value = formatBarcode(barcode);

    return {success: true, value};
}

function vaildZipcode(zipcode) {

    return /^\d{5}$/.test(zipcode)
        || /^\d{9}$/.test(zipcode)
        || /^\d{5}-\d{4}/.test(zipcode);
}

function formateZipcode(zipcode) {

    return zipcode.replace('-', '');
}

function toDightArray(zipcode) {

    return zipcode.split('').map(c=>parseInt(c));
}

function caculateCheckcode(barcode) {
    return (10 - sum(barcode) % 10) % 10;
}

function sum(zipcode) {
    return zipcode.reduce((a, b) =>a + b)
}

function toBarcode(checkDight) {

    return checkDight.map(i=>table[i]).join('');
}

function formatBarcode(barcode) {

    return  `|${barcode}|`;
}

exports.zipcode2Barcode = zipcode2Barcode;