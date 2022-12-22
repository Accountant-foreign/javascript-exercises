const sumAll = function(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)){
        if(a<0||b<0){
            return "ERROR";
        }

        if(a>b){
            let t=b;
            b=a;
            a=t;
        }

        let sum=0;

        for(let i=a; i<=b; i++){
            sum+=i;
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
