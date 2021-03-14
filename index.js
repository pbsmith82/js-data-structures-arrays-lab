// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
    drivers.push(driver)
}


function destructivelyPrependDriver(driver){
    drivers.unshift(driver)
} 

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function appendDriver(name){
    const newdrivers = [...drivers, name]
    return newdrivers
}

function prependDriver(name){
    let array = [name, ...drivers]
    return array
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(){
    return drivers.slice(1)
}