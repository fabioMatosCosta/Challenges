describe("Roman numerals decoder", ()=>{
    it("Should be a function", ()=>{
        expect(typeof solution).toEqual("function");
    })
    it("Should return a number", ()=>{
        expect(typeof(solution("X"))).toEqual("number");
    })
    it("Should decode the roman numerals", ()=>{
        expect(solution("X")).toEqual(10);
        expect(solution("XXI")).toEqual(21);
        expect(solution("I")).toEqual(1);
        expect(solution("IV")).toEqual(4);
        expect(solution("MMVIII")).toEqual(2008);
        expect(solution("MDCLXVI")).toEqual(1666);
        expect(solution("XIV")).toEqual(14);
    })
})

describe("Printer Errors", ()=>{
    it("Should be a function", ()=>{
        expect(typeof printerError).toEqual("function")
    })
    it("Should return the number of printing errors", ()=>{
        let string = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        expect(printerError(string)).toEqual("3/56");
        expect(printerError("aaabbbbhaijjjm")).toEqual("0/14");
        expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toEqual("8/22");
    })
})

describe("Your order, please", ()=>{
    it("Should be a function", ()=>{
        expect(typeof orderString).toEqual("function");
    })
    it("Should order the words in a string according to the number in the word", ()=>{
        expect(orderString("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
        expect(orderString("4of Fo1r pe6ople g3ood th5e the2")).toEqual("Fo1r the2 g3ood 4of th5e pe6ople");
        expect(orderString("")).toEqual("");
        expect(orderString("1 4 3 5 2")).toEqual("1 2 3 4 5");
    })
})

describe("Find the divisors", ()=>{
    it("Should be a function", ()=>{
        expect(typeof divisors).toEqual("function");
    })
    it("Should return an array if the number is not prime", ()=>{
        expect(typeof(divisors(15))).toEqual("object");
        expect(divisors(15)).toEqual([3,5]);
        expect(divisors(12)).toEqual([2, 3, 4, 6]);
    })
    it("Should return a string when the number is prime", ()=>{
        expect(typeof(divisors(13))).toEqual("string");
        expect(divisors(13)).toEqual("13 is prime");
        expect(divisors(7)).toEqual("7 is prime");
    })
});

describe("Descending Order", ()=>{
    it("Should be a function", ()=>{
        expect(typeof descendingOrder).toEqual("function");
    })
    it("Should return descending order numbers", ()=>{
        expect(descendingOrder(0)).toEqual(0);
        expect(descendingOrder(1)).toEqual(1);
        expect(descendingOrder(121)).toEqual(211);
        expect(descendingOrder(12345678)).toEqual(87654321);
        expect(descendingOrder(3425178)).toEqual(8754321);
    })
})

let values_true = [69,57,6,13,91,75,13,522,974,1011,17209]
let values_false = [8,16,32,512,1024,32768]

describe("Consecutive Ducks", ()=>{
    it("Should be a function", ()=>{
        expect(typeof consecutiveDucks).toEqual("function");
    })
    it("Should return true if num can be expressed as a sum of two or more consecutive positive numbers", ()=>{
        for(let i = 0; i < values_true.length; i++){
            expect(consecutiveDucks(values_true[i])).toEqual(true)
        }
    })
    it("Should return false if num cannot be expressed as a sum of two or more consecutive positive numbers", ()=>{
        for(let i = 0; i < values_false.length; i++){
            expect(consecutiveDucks(values_false[i])).toEqual(false)
        }
    })
})

describe("Break camelCase", ()=>{
    it("Should be a function", ()=>{
        expect(typeof breakCamelCase).toEqual("function")
    })
    it("Should add a space between a lowercased letter and a uppercased letter", ()=>{
        expect(breakCamelCase("camelCase")).toEqual("camel Case");
        expect(breakCamelCase("camelCasingTest")).toEqual("camel Casing Test");
    })
})