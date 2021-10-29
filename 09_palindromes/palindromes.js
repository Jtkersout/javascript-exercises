const palindromes = function (str) {
let cleanStr = str.replace(/[\.\!\, ]/g,"");
let targetstr1= cleanStr.split("").reverse() 
let targetstr = targetstr1.join("").toLowerCase()
let controlstr = cleanStr.split(" ").join("").toLowerCase();

if(targetstr == controlstr){
    return true;
} else { return false;}
};

// Do not edit below this line
module.exports = palindromes;
