// when we use spread operator inside the loop instead of push(), it is wasteful, less efficient

// filter using for
function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i<array.length; i++) {
        let alteredEl = callback(array[i], i, array)
        if(alteredEl) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const numbers = [1,2,3,4,5,6,7]
const filtered = filter(numbers, (n, idx) => n % 2 === 0)
// console.log(filtered)

// map using for
function map(array, callback) {
    let data = []
    for (let i=0; i<array.length; i++) {
        const alteredElwithFunc = callback(array[i], i, array)
        data.push(alteredElwithFunc)
    }
    return data
}

const numbers_2 = [1,2,3,4,5,6,7]
const mapped = map(numbers_2, (n,idx) => {
    return {n, idx}
})
// console.log(mapped);


// forEach using for
function forEach(array, callback) {
    for(let i=0; i<array.length; i++) {
        callback(array[i], i, array)
    }
}
const numbers_3 = [1,2,3,4,5,6,7]
forEach(numbers_3, (i, idx) => {
    // console.log(i, idx);
})

// find using for
function find(array, callback) {
    for(let i = 0; i<array.length; i++) {
        let el = callback(array[i], i, array) // item, index, array
        if(el) {
            return array[i]
        }
    }
    return undefined
}

console.log(
    // find(numbers_3, n => n % 2 === 0 && n % 4 === 0)
)

// reduce using for
function reduce(array, callback, initialValue) {
    let acc = initialValue
    for(let i=0; i<array.length; i++) {
       acc = callback(acc, array[i], i, array)
    }
    return acc
}

const mappy = numbers_3.map(n=> String(n)+"hello")
// console.log(mappy.reduce((acc, el) => acc + el, "hello"))
// reduce(accumulator, current, index, array)

// console.log(reduce(mappy, (acc, curr) => {return acc + curr}))

import { harBirElement, chiqar, elementlar, jami, massivlarniQosh } from './myLibrary.js/fundamentalFunctions.js'


// harBirElement(elementlar(1,2,3,4,5), n => chiqar(n*2))
// chiqar(jami(1,2,3,4))
// const a = elementlar(1,2,3,4,5)
// chiqar(a)

chiqar()