// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
    let nd = Object.assign({}, driver)
    delete nd[key]
    return driver = Object.assign({}, nd)
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}