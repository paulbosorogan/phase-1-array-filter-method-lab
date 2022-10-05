// Code your solution here

function findMatching(drivers, string){
    const newDrivers = [];
    for(const user of drivers){
        if(user.toLowerCase() === string.toLowerCase())
        newDrivers.push(user)
    }
    return newDrivers
}

function fuzzyMatch(driverArray, string){
    return driverArray.filter((element) =>
        element.indexOf(string) === 0)
    }



function matchName(driverObj, string){
   return driverObj.filter((element)=>
   element.name === string)
}
