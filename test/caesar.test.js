const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar function", () => {
    it("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {

        let ans = caesar("test", 30)
        expect(ans).to.be.false
        
    })

    it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {

        const ans1 = caesar("test", 1)
        const ans2 = caesar("Test", 1)
        expect(ans1).to.equal(ans2)
        
    })

    it("When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)", () => {

        const ans = caesar("Zebra Magazine", 3)
        const expected = "cheud pdjdclqh"

        expect(ans).to.equal(expected)
        
    })

    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {

        let ans = caesar("abc efg99 123", 1)
        const expected = "bcd fgh99 123"
        expect(ans).to.equal(expected)
        
    })
})

