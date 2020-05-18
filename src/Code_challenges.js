// *Roman Numerals Decoder
//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.
//  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

function solution(roman){
    let sum = 0;
    if(roman[roman.length-1]=== "V"){
        sum += 4;
        roman = roman.substring(0, roman.length-2);
    
        for(let i=0; i<roman.length; i++){
            switch(roman[i]){
                case "I":
                sum += 1;
                break;
                case "V":
                sum+= 5;
                break;
                case "X":
                sum+= 10;
                break;
                case "L":
                sum+=50;
                break;
                case "C":
                sum+= 100;
                break;
                case "D":
                sum+= 500;
                break;
                case "M":
                sum+= 1000;
                break;
            }
        } 
    }else{
        for(let i=0; i<roman.length; i++){
            switch(roman[i]){
            case "I":
            sum += 1;
            break;
            case "V":
            sum+= 5;
            break;
            case "X":
            sum+= 10;
            break;
            case "L":
            sum+=50;
            break;
            case "C":
            sum+= 100;
            break;
            case "D":
            sum+= 500;
            break;
            case "M":
            sum+= 1000;
            break;
            }
        }
    }
    return sum
}

//*Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity,
// are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm 
//meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced
// e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will output the error rate of the printer as 
//a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
//Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// #Examples:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(str){
    let a = 0;
    for(let i = 0; i< str.length; i ++){
        if(str[i] > "m"){
            a++
        }
    }
    return `${a}/${str.length}`
}

//*Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the 
//position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function orderString(words){
    if(words.length !== 0){
        let arr =[];
        arr = words.split(" ");
        arr =arr.sort(function(a, b){
        return +a[a.search(/[0-9]/)] - +b[b.search(/[0-9]/)];
        });
        var wordSort = arr.join(" ");
        return wordSort 
    }else{
        return ""
    }
}

//*Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's 
//divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string 
//'(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    let arr = [];
    for(let i = 2; i< integer; i++){
        if(integer % i === 0){
            arr.push(i)
        }
    }
    if(arr.length < 2) {
        return `${integer} is prime`
    } else {
        return arr
    }
};

//*Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it 
//with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let str = n.toString().split("").sort(function(a, b){return b-a});;
    return Number(str.join(""))
}

//*Consecutive Ducks

//Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.
// Consider an Example :
// 10 , could be expressed as a sum of 1 + 2 + 3 + 4.

function consecutiveDucks(num){
    return (((num & (num - 1)) != 0) && num != 0)
}

//*Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// solution("camelCasing")  ==  "camel Casing"

function breakCamelCase(str){
    let brokeCamelCaseStr = "";
    for(let i=0; i<str.length; i++){
        brokeCamelCaseStr += `${str[i]}`
        if(str[i] > "Z" && str[i+1]<="Z"){
            brokeCamelCaseStr += ` `
        }
    }
    return brokeCamelCaseStr
}


//*Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer 
// to your most secret question is still correct. However, since someone could look over your shoulder, you 
// don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

