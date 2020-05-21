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
            expect(consecutiveDucks(values_true[i])).toEqual(true);
        }
    })
    it("Should return false if num cannot be expressed as a sum of two or more consecutive positive numbers", ()=>{
        for(let i = 0; i < values_false.length; i++){
            expect(consecutiveDucks(values_false[i])).toEqual(false);
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

describe("Credit Card Mask", ()=>{
    it("Should be a function", ()=>{
        expect(typeof maskify).toEqual("function");
    })
    it("Should return the same string if the length is less than 4 or if it's an empty string", ()=>{
        expect(maskify("1")).toEqual("1");
        expect(maskify("")).toEqual("");
        expect(maskify("nana")).toEqual("nana");
    })
    it("Should replace all the caracters on the string with # expect the last 4", ()=>{
        expect(maskify("4556364607935616")).toEqual("############5616");
        expect(maskify("Skippy")).toEqual("##ippy");
        expect(maskify("Nananananananananananananananana Batman!")).toEqual("####################################man!");
        expect(maskify("64607935616")).toEqual("#######5616");
    })
})

describe("Watermelon", ()=>{
    it("Should be a function", ()=>{
        expect(typeof divide).toEqual("function")
    })
    it("Should return true if the weight can be divided into even numbers", ()=>{
        expect(divide(4)).toEqual(true);
        expect(divide(10)).toEqual(true);
        expect(divide(32)).toEqual(true);
        expect(divide(88)).toEqual(true);
    })
    it("Should return false if the weight cannot be divided into even numbers", ()=>{
        expect(divide(2)).toEqual(false);
        expect(divide(5)).toEqual(false);
        expect(divide(67)).toEqual(false);
        expect(divide(99)).toEqual(false);
    })
})

let handicap1 = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
let category1 = ["Open", "Open", "Senior", "Open", "Open", "Senior"];
let handicap2 = [[45, 12],[55,21],[19, -2],[104, 20]];
let category2 = ["Open", "Senior", "Open", "Senior"];
let handicap3 = [[3, 12],[55,1],[91, -2],[54, 23]];
let category3 = ['Open', 'Open', 'Open', 'Open'];

describe("Categorize New Member", ()=>{
    it("Should be a function", ()=>{
        expect(typeof openOrSenior).toEqual("function")
    })
    it("Should return an array with Open or Senior, if the first value on the array is greater or equal than 55 and the second value is greater than 7", ()=>{
        expect(openOrSenior(handicap1)).toEqual(category1);
        expect(openOrSenior(handicap2)).toEqual(category2);
        expect(openOrSenior(handicap3)).toEqual(category3);
    })
})

describe("GoodvsEvil", ()=>{
    it("Should be a function", ()=>{
        expect(typeof goodVsEvil).toEqual("function")
    })
    it("should return the battle result", ()=>{
        expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toEqual("Battle Result: Evil eradicates all trace of Good");
        expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toEqual("Battle Result: Good triumphs over Evil");
        expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toEqual("Battle Result: No victor on this battle field");
    })
})