const names = ["Dan", "Kirk", "John", "Carl", "Jason"]

// shuffled array || my own approach
function shuffled(array) {
    let copy = [...array]
    let data = []
    while(copy.length > 0) {
        let randomIndex = Math.floor(Math.random() * copy.length)
        data.push(copy[randomIndex])
        copy.splice(randomIndex, 1)
    }
    return data
}

// console.log(shuffled(names))

// names.sort(() => Math.random() - 0.5)
// this approach gets less efficient as the size of the array gets bigger

// Fisher Yates algorithm
function fisherYates(array) {
    for(let i=array.length-1; i>0; i--) { // use decrament to minimize the range of the random
        let randomIndex = Math.floor(Math.random() * (i + 1));
        // use destructuring to change the values of 2 vars
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    };
    return array
}
console.log(fisherYates(names));
