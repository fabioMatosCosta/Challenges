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

function maskify(cc) {
    let arr = []
    if (cc.length <= 4 || cc === "") {
        return cc;
    } else {
        for (let i = cc.length; i> -1; i--){
            if(i > cc.length -5) {
                arr.push(cc[i])
            } else {
                arr.push("#");
            }
        }
        return (arr.reverse().join(""))
    }
}

//*Watermelon

// It's too hot, and they can't even…
// One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate.
// They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.
// Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons 
// in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory 
// that the parts are equal.
// Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.
// The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out,
//  whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.
// Task
// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons 
// so that each of them gets an even amount.

// Examples
// divide(2) === false // 2 = 1 + 1
// divide(3) === false // 3 = 1 + 2
// divide(4) === true  // 4 = 2 + 2
// divide(5) === false // 5 = 2 + 3
// divide(6) === true  // 6 = 2 + 4

function divide(weight){
    if (weight % 2 === 0 && weight > 2){
        return true;
    } else {
        return false;
    }
}


//*Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
//  They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club,
//  handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.
// Note for F#: The input will be of (int list list) which is a List<List>
// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) 
// stating whether the respective member is to be placed in the senior or open category.
// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let arr = [];
    for (let i= 0; i<data.length; i++){
        if (data[i][0] >= 55 && data[i][1] > 7){
            arr.push('Senior');
        } else {
            arr.push('Open');
        }
    }
    return arr;
}

//*Good vs Evil
// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. 
// Different races will certainly be involved. Each race has a certain worth when battling against others.
//  On the side of good we have the following races, with their associated worth:
// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:
// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and 
// compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil,
//  determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space.
//  Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, 
// or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good,evil){
    let worth = {
        gd: [
            1,
            2,
            3,
            3,
            4,
            10
        ],
        el: [
            1,
            2,
            2,
            2,
            3,
            5,
            10
        ]
    }
    let goodWorth = 0;
    let evilWorth = 0;
    let goodNmbr = good.split(" ");
    let evilNmbr = evil.split(" ");

    for(let i=0; i<worth.gd.length; i++){
        goodWorth += (worth.gd[i]*goodNmbr[i])
    }
    for(let i=0; i<worth.el.length; i++){
        evilWorth += (worth.el[i]*evilNmbr[i])
    }

    if(goodWorth > evilWorth) return `Battle Result: Good triumphs over Evil`
    if(goodWorth < evilWorth) return `Battle Result: Evil eradicates all trace of Good`
    if(goodWorth === evilWorth) return `Battle Result: No victor on this battle field`
}

//*Count characters in your string

// The main idea is to count all the occurring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(string){
    let res = {};
    if(string === "") return {}
    for(let i = 0; i< string.length; i++){
        let char = string.charAt(i);
        if(!res.hasOwnProperty(char)){
            res[char] = 1;
        }else{
            res[char] += 1;
        }
    }
    return res
}


//*Create Phone Number

//Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    if(numbers.length !== 10) return "need 10 numbers"
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

//*Pick peaks

// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. 
// If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, 
//     we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak,
//  please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} 

function pickPeaks(arr){
    if(arr.length === 0) return {pos:[],peaks:[]}
    let pos = [];
    let peaks = [];
    for(let i = 1; i< arr.length ; i++){
        let a = arr[i+1]-arr[i]
        let b = arr[i+2]-arr[i+1]
        console.log(`a:${a} b:${b}`)
        if( a <= 0 && b <= 0){
            pos.push(i)
            peaks.push(arr[i])
        }
    }
    for(i = 0; i< peaks.length; i++){
        debugger
        if(peaks[i]===peaks[i+1]){
            peaks.splice(i+1, 1)
            pos.splice(i+1, 1)
        }
    }
    console.log("pos",pos, "peaks",peaks)
    return {"pos":pos, "peaks":peaks}
}
