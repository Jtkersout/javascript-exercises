const fibonacci = function(n) {
if( n < 3 && n >= 1)return 1;
if(n < 0){
    return 'OOPS'
}



let previous =1;
let current =1;
for(let i=2; i < n; i++){
const answer =  current + previous
previous = current;
current = answer;
}
return current;
};

// Do not edit below this line
module.exports = fibonacci;
