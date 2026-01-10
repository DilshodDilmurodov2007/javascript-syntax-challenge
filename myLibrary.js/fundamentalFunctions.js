// Array methods

// total
function jami(...values) {
    let data = values
    let initial = 0
    for(let numb of data) {
        if(typeof numb !== "number") throw new Error(`TypeError: cannot add ${typeof numb}s to each other`)
        initial = initial + numb
    }
    return initial
}
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
// findIndex
function elementniIndexiniTopish(array, callback) {
    if(!array || !callback) return
    for(let i=0; i<array.length; i++) {
        let el = callback(array[i], i, array)
        if(el) return i
    }
    return undefined
}
// some
function birNechtasiUchun(array, callback) {
    for(let i=0; i<array.length; i++) {
        let el = callback(array[i], i, array)
        if(el) {
            return true
        }
    }
    return false
}
// every
function hammasiUchun(array, callback) {
    for(let i=0; i<array.length; i++) {
        let el = callback(array[i], i, array)
        if(!el) {
            return false
        } 
    }
    return true
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

export { 
    jami, 
    massivlarniQosh,
    harBirElement, 
    elementlarniOzgartirish, 
    elementlarniSaralash, 
    elementniTopish, 
    elementniIndexiniTopish, 
    birNechtasiUchun, 
    hammasiUchun,
    elementlarniIxchamlash,
}