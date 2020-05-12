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

