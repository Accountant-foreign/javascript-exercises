const add = function() {
  return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
    let sum=0;
    arguments[0].forEach(element => {
      if(element==undefined) return 0;
      sum+=element;
    });
    return sum;
};

const multiply = function() {
  let product=1;
  arguments[0].forEach(element => {
    if(element==undefined) return 0;
    product*=element;
  });
  return product;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
  function fact(n){
    if(n==0){
      return 1;
    } else {
      return n*fact(n-1);
    }
  }

  return fact(arguments[0]);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
