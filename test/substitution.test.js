const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function", () => {
    it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {

        const res = substitution("message", "plmoknijbuhvygctfxrdzeswaqasdasfasfasfasf")
        const expected = false
        expect(res).to.equal(expected)

    })

    it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
        let res = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
        let expected = "ykrrpik"
        expect(res).to.equal(expected)

        res = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expected = "message"

        expect(res).to.equal(expected)

 
    })

    it("It returns false if there are any duplicate characters in the given alphabet.", () => {
        const res = substitution("message", "ppmoknijbuhvygctfxrdzeswaq")
        const expected = false

        expect(res).to.equal(expected)
    })

    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        const res =substitution("message message", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykrrpik ykrrpik"
        expect(res).to.equal(expected)
        
    })

    it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
        const res = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
        const expected = substitution("Message", "plmoknijbuhvygctfxrdzeswaq")
        expect(res).to.equal(expected)


        
    })
})

