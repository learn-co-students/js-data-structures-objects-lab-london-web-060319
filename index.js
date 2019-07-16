// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign(driverObject, { [key]: value });
}

function deleteFromDriverByKey(driverObject, key) {
    const newdriver = Object.assign({}, driverObject);
    delete newdriver[key];
    return newdriver
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    Object.assign(driverObject, key);
    delete driverObject[key];
    return driverObject
}