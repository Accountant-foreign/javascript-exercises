const palindromes = function () {
    let str="";
    for(let i=0; i<arguments[0].length; i++){
        if(arguments[0].codePointAt(i)>=65 && arguments[0].codePointAt(i)<=122){
            str+=arguments[0].charAt(i);
        }
    }
    str=str.toLocaleLowerCase()

    return str==(Array.from(str).reverse().join(''))
};

// Do not edit below this line
module.exports = palindromes;
