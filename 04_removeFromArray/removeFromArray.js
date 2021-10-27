const removeFromArray = function(arr,...num) {
    let updatedArray = [];
    for(let i =0; i < arr.length; i++){
        let sortingNum =1;
        for(let j=0; j <num.length ; j++) {
            if(arr[i] === num[j]) {
                sortingNum =0;
            
            }
        } if(sortingNum == 1){
            updatedArray.push(arr[i]);
        }
        
    } return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
