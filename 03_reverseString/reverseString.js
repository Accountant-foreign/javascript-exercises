const reverseString = function(string) {
    let arr=Array.from(string);
    arr=arr.reverse();
    string=arr.join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
