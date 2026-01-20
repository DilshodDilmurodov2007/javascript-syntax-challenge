let data = {
    name: "Dan Best",
    age: 18,
    scores: [78,88,90,96,69],
    average() {
        // check if the data is an array or not (Array.isArray())
        if(!Array.isArray(this.scores) || this.scores.length === 0) return null
        return this.scores.reduce((acc, curr) => acc + curr, 0) / this.scores.length
    },
    func() {
        return this.name // when destructed, this loses the relationship with its obj
    },
    greetString: function() {
        return "Hi, "+ data.name // when destructured, it searches the data obj, and gets the name property
    },
    // s1: this.name, // this => globalThis (JS doesn't recognise the obj yet)
    // s2: obj.name, // it is being created, not in the memory yet. So, how am I supposed to access it?!
}

const { greetString } = data
// console.log(greetString())
// console.log(data.func())
// console.log(data.greetString())


// methods in the data works:
// JS creates the data and assigns it to data
// the methods will run after the data is created



