// Roman Numerals Decoder
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