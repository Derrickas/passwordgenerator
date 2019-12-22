// Dom elements

const resultsEL = document.getElementById('password')
const lengthEL = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercasebox')
const lowercaseEL = document.getElementById('lowercasebox')
const numbersEL = document.getElementById('numbersbox')
const symbolsEL = document.getElementById('symbolbox')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('copy to clipboard')

// function variables

const symbols = '~!@#$%^&*()_+{}|:"<>?-=`'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = lowercase.toUpperCase()
const number = '0123456789'

// Generate functions

const randomFunc = {
    Upper: GetRandomUpper,
    lower: GetRandomLower,
    symbol: GetRandomSymbol,
    number: GetRandomUpper
};

generateEL.addEventListener('click', function () {

    const length = +lengthEL.value;
    const haslower = lowercaseEL.checked;
    const hasupper = uppercaseEL.checked;
    const hasnumber = numbersEL.checked;
    const hassymbol = symbolsEL.checked;

    resultsEL.innerText = generatepassword(haslower, hasupper, hassymbol, hasnumber, length);



});

function generatepassword(lower, upper, symbol, number, length) {

    let generatedpassword = "";

    const typescount = lower + upper + number + symbol;

    console.log('typescount: ', typescount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter (item => Object.values(item)[0]);

    console.log('typesArr: ', typesArr);

    if (typescount === 0) {
        return '';

    }

    for (let i=0; i<length; i+= typescount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            console.log('funcName: ', funcName);

            generatedpassword += randomFunc[funcName]();
        });
    }

    const finalpassword = generatedpassword.slice(0, length);

    return finalpassword;
}

    // // clipboard function
    // const textarea = document.createElement('textarea')
    // const password = resultsEL.innerText;

    // if( !password)
    // return;
    // textarea.value = password;
    // document.abody.appendchild(textarea);
    // textarea.select();
    // document.execCommand('copy')
    // textarea.remove
    // alert('password has been copied to clipboard')





    // (
    //     item => Object.values(item) [0]

    // );


    // }
    function GetRandomLower() {
        return lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    function GetRandomUpper() {
        return uppercase[Math.floor(Math.random() * lowercase.length)];
    }
    function GetRandomNumber() {
        return number[Math.floor(Math.random() * number.length)];
    }
    function GetRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    // console.log(GetRandomSymbol());
    // console.log(GetRandomNumber());
    // console.log(GetRandomLower());
    // console.log(GetRandomUpper());