function chiqar(returned) {
    if(!returned) return
    console.log(returned)
}
function elementlar(...values) {
    if(!values) return
    return values
}
function jami(...values) {
    let data = values
    let initial = 0
    for(let numb of data) {
        if(typeof numb !== "number") throw new Error(`TypeError: cannot add ${typeof numb}s to each other`)
        initial = initial + numb
    }
    return initial
}

// Array methods

// adding arrays
function massivlarniQosh(...arrays) {
    return [...arrays]
}


// forEach
function harBirElement(array, callback) {
    if(!array || !callback) return
    for(let i = 0; i<array.length; i++) {
        callback(array[i], i, array) // item, index, array
    }
}
// map
function elementlarniOzgartirish(array, callback) {
    if(!array || !callback) return
    let data = []
    for(let i = 0; i<array.length; i++) {
        let alteredEl = callback(array[i], i, array) // item, index, array
        data.push(alteredEl)
    }
    return data
}
// filter
function elementlarniSaralash(array, callback) {
    if(!array || !callback) return
    let data = []
    for(let i = 0; i<array.length; i++) {
        let el = callback(array[i], i, array) // item, index, array
        if(el) {
            data.push(el)
        }
    }
    return data
}
// find
function elementniTopish(array, callback) {
    if(!array || !callback) return
    for(let i = 0; i<array.length; i++) {
        let el = callback(array[i], i, array) // item, index, array
        if(el) {
            return array[i]
        }
    }
    return undefined
}
// reduce
function elementlarniIxchamlash(array, callback, initialValue) {
    if(!array || !callback) return
    if(!initialValue) {

    }
    let acc = initialValue
    for(let i=0; i<array.length; i++) {
       acc = callback(acc, array[i], i, array)
    }
    return acc
}

export {chiqar, elementlar, jami, massivlarniQosh,
    harBirElement, elementlarniOzgartirish, elementlarniSaralash, elementniTopish, elementlarniIxchamlash,
}