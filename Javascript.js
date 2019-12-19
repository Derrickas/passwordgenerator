var resultsEL =document.querySelector('symbol-box')
var lengthEL =document.querySelector('length')
var uppercasesEL =document.querySelector('uppercase-box')
var lowercaseEL =document.querySelector('lowercase-box')
var generateEL =document.querySelector('generate')
var clipboardEL =document.querySelector('clipboard')



const symbolsvar = '~!@#$%^&*()_+{}|:"<>?-=`'
const lowercasevar = 'abcdefghijklmnopqrstuvwxyz'
const uppercasevar = lowercase.toUpperCase()
const numbervar = '0123456789'

const randomFunc = {
    Upper: GetRandomUpper
    lower: GetRandomLower
    symbols: GetRandomSymbol
    number: GetRandomUpper
};


function GetRandomLower(){
 return lowercasevar [Math.floor(Math.random() * lowercase.length)];
}

function GetRandomUpper(){
    return uppercasevar [Math.floor(Math.random() * lowercase.length)];
}
function GetRandomNumber(){
    return numbervar [Math.floor(Math.random() * number.length)];
}
function GetRandomSymbol(){
    return symbolsvar [Math.floor(Math.random() * symbols.length)];
}
console.log (GetRandomSymbol());



console.log (GetRandomNumber());
console.log (GetRandomLower());
console.log (GetRandomUpper());
