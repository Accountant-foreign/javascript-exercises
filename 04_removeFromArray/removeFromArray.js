const removeFromArray = function() {
    let arr=[];
    arr=arguments[0];
    for(let i=1; i<arguments.length; i++){
        let index=arr.indexOf(arguments[i]);
        if(index===-1){
            arr=arr;
        } else {
            arr=arr.slice(0, index).concat(arr.slice(index+1, arr.length));
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
