const findTheOldest = function() {
    let objArr=arguments[0];
    // let obj=objArr.map((objArr) => ({name: objArr.name, age: objArr.yearOfDeath-objArr.yearOfBirth}));
    let obj=objArr.map((objArr)=>{
        if("yearOfDeath" in objArr){
            return {name: objArr.name, age: objArr.yearOfDeath-objArr.yearOfBirth};
        } else {
            return {name: objArr.name, age: 2022-objArr.yearOfBirth}
        }
    });
    obj.sort((a,b)=> a.age-b.age);
    return obj[obj.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
