const add = function(num,num1) {
	return num + num1
};

const subtract = function(num,num1) {
	return num - num1
};

const sum = function(arr) {
let sum = arr.reduce((a,b)=> a+b,0 )
return sum;
}

const multiply = function(arr) {
  let result=1;
  for(let i =0; i<arr.length; i++){
    result *= arr[i];
    
  };
  return result;
};

const power = function(a,b) {
let result=a;
let i=1;
	while(i < b){
result *= a;
i++
  }
  return result;
};

const factorial = function(num) {
let result =1;
  for(let i =1; i <=num; i++){
    result *= i
  }
  return result;
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
