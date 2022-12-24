const fibonacci = function() {
    function fib(n){
        if(n==0){
            return 0;
        } else if(n==1){
            return 1;
        }
        else {
            return fib(n-1)+fib(n-2);
        }
    }

    if(Number.isInteger(arguments[0])){
        if(arguments[0]<0)
            return "OOPS";
        return fib(arguments[0]);
    } else if(typeof arguments[0] === 'string'){
        return fib(+arguments[0]);
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
