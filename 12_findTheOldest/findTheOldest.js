const findTheOldest = function(people) {
let oldest =0;
let oldPerson=[];
let today = new Date();

console.log(people[0].yearOfDeath)
for(let i=0; i < people.length; i++){
    if(people[i].yearOfDeath == undefined){
        people[i].yearOfDeath = today.getFullYear();
    }
 
 if( oldest <(people[i].yearOfDeath - people[i].yearOfBirth)){
    oldest = people[i].yearOfDeath - people[i].yearOfBirth;
    oldPerson = people[i];
 
}
}
return oldPerson


};

// Do not edit below this line
module.exports = findTheOldest;
