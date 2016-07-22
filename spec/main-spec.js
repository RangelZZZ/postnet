'use strict';
const code = require('../main/main.js');

describe("checkZipCode", ()=> {
    const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];
    it("should check zip code", ()=> {
        const zipCode = '93145';
        const value = code.checkZipCode(zipCode, array);
        expect(value).toEqual(true);
    });

    it("should judge zip code dight", ()=> {
        const zipCode = '923134';
        const value = code.checkZipCode(zipCode, array);
        expect(value).toEqual(false);
    });

    it("should judge zip code format", ()=> {
        const zipCode = 'a1345';
        const value = code.checkZipCode(zipCode, array);
        expect(value).toEqual(false);
    });

    it("should buildCheckCode", ()=> {
        const zipCode = '95713';
        const expectCheckCode = '957135';
        const checkCode = code.buildCheckCode(zipCode);

        expect(checkCode).toEqual(expectCheckCode);
    });

    it("should buidCheckCode", ()=> {
        const zipCode = '12345-6789';
        const expectCheckCode = '1234567895';
        const checkCode = code.buildCheckCode(zipCode);

        expect(checkCode).toEqual(expectCheckCode);
    });

    it("should buildCheckCode", ()=> {
        const zipCode = '65432';
        const expectCheckCode = '654320';
        const checkCode = code.buildCheckCode(zipCode);

        expect(checkCode).toEqual(expectCheckCode);
    });

    it("should buildCheckCode", ()=> {
        const zipCode = '123456789';
        const expectCheckCode = '1234567895';
        const checkCode = code.buildCheckCode(zipCode);

        expect(checkCode).toEqual(expectCheckCode);
    });
    it("should build barcode", ()=> {
        const numberFormat = [
            '||:::',
            ':::||',
            '::|:|',
            '::||:',
            ':|::|',
            ':|:|:',
            ':||::',
            '|:::|',
            '|::|:',
            '|:|::'
        ];
        const checkCode = '957135';
        const expecBarcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
        const barcode = code.buildBarcodes(checkCode, numberFormat);
        expect(barcode).toEqual(expecBarcode);
    });

});


