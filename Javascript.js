const symbols = '~!@#$%^&*()_+{}|:"<>?-=`'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()


function GetRandomLower(){
 return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function GetRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function GetRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
function GetRandomSymbol(){
    return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log (GetRandomSymbol());



console.log (GetRandomNumber());
console.log (GetRandomLower());
console.log (GetRandomUpper());
