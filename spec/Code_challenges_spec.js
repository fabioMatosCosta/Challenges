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
