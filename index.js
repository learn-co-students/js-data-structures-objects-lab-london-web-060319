// Write your solution in this file!
let driver = {name: 'Sam'}

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = Object.assign({}, driver, {[key]: value})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    
 
const newObj = Object.assign({}, driver);
 

 
delete newObj[key];
// => true
 
return newObj;
// => {}
 
obj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]

    return driver
}