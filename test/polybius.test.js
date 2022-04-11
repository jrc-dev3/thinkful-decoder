const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius function", () => {
    it("When encoding, it translates the letters i and j to 42.", () => {

        let res = polybius("i")
        const expected = 42
        expect(res).to.equal("42")

        res = polybius("j")
        expect(res).to.equal("42")

        res = polybius("message")
        expect(res).to.equal("23513434112251")

    })

    it("When decoding, it translates 42 to (i/j).", () => {
        let res = polybius("4432423352125413", false); 
        const expected = "th(i/j)nkful"
        expect(res).to.equal(expected)
 
    })

    it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
        let res = polybius("Hello world");
        let res2 = polybius("hello world");

        expect(res).to.equal(res2)
    })

    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        let res = polybius("i j");
        let expected = "42 42"
        expect(res).to.equal(expected)

        res = polybius("11 11", false);
        expected = "a a"
        expect(res).to.equal(expected)
        
    })
})


