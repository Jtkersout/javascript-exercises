const sumAll = function(num1,num2) {
let result = 0;
    if(num1 < 0 || num2 <0){
        return "ERROR"
    }else if (typeof num1 !== typeof num2){
        return "ERROR"
    }
    
    else if(num1 < num2){
        while(num1 <= num2){
            result += num1;
            num1++;
        }
            if(result > 0) {
                return result;
            }else {
                return "ERROR"
            }
            
    } else {
        while(num2 <= num1){
            result += num2;
            num2++;
        } 
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
