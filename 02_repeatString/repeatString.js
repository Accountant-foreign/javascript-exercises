const repeatString = function(string, repeat) {
    if(repeat<0){
        return "ERROR";
    } else {
        let s='';
        for(let i=1; i<=repeat; i++){
            s=s+string;
        }
        return s;
    }
};

// Do not edit below this line
module.exports = repeatString;
