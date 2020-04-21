// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    console.log(str[0].match(/[A-Z]/i))
    if(str[0].match(/[A-Z]/i)){

        console.log(str);
    }
}

toCamelCase("Ajno");
toCamelCase("sadas");