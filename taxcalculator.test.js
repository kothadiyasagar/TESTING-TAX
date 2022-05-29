const tax = require("./tax_calculator")

//{test, expect} = require("@jest/globals")

const{test, expect} =  require("@jest/globals")

describe("tax", function(){

    test("for less than 2,50,000", function ()
    {
        expect(tax(10000)).toBe("no tax")
       
    })

    test("for 2,50,000 to 500000", function ()
    {
        expect(tax(300000)).toBe(270000)
       
    })

    test("for greater than 1000000", function ()
    {
        expect(tax(1000001)).toBe(900000.9)
       
    })
    test("for 1000000", function ()
    {
        expect(tax(1000000)).toBe(700000)
       
    })
    test("for 500000", function ()
    {
        expect(tax(500000)).toBe(
            450000)
       
    })

    test("for 250000", function ()
    {
        expect(tax(250000)).toBe("225000")
       
    })

  
    
    test("for string", function ()
    {
        expect(tax("1200")).toBe("no tax")
       
    })
    
    test("for string", function ()
    {
        expect(tax(" ")).toBe("no tax")
       
    })




})
