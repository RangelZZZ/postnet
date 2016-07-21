'use strict';
const code = require('../main/main.js');

describe("checkZipCode", ()=> {

    it("should check zip code", ()=> {
        const zipCode = '95413';
        const value = code.checkZipCode(zipCode);
        expect(value).toEqual(false);
    });

    it("should judge zip code dight", ()=> {
        const zipCode = '923134';
        const value = code.checkZipCode(zipCode);
        expect(value).toEqual(false);
    });

    it("should judge zip code format", ()=> {
        const zipCode = 'a1345';
        const value = code.checkZipCode(zipCode);
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

        expect(checkCode).toEuqal(expectCheckCode);
    });

    it("should buildCheckCode", ()=> {
        const zipCode = '123456789';
        const expectCheckCode = '1234567895';
        const checkCode = code.buildCheckCode(zipCode);

        expect(checkCode).toEqual(expectCheckCode);
    });
});


