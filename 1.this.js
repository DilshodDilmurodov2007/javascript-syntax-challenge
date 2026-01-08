// this is for referencing the object
// it doesn't work with arrow functions (only function() method)
// when we use arrow func as a method + this, this will refer to the Window object

const C = {
    name: "Dan Best",
    age: 18,
    // age_with_name: C.age + C.name, // Cannot access 'C' before initialization
    age_with_name() {
        return this.age +" "+ this.name
    },
    exam_scores: [87, 79, 100, 98, 90],
    average_score: function() {
        // if we destructure the C, it works
        // return .exam_scores.reduce((a,b)=> a+b) / C.exam_scores.length // this is not working here.
        return this.exam_scores.reduce((a,b)=> a+b) / this.exam_scores.length
    },
    name_char_count: function() {
        let leng = 0
        for (ch in this.name) {
            leng = leng + 1
        }
        return leng
    },
    name_char_count_2: function() {
        return name.length
    }
}

// when we destructure the object, the method is no longer called as a method of C
const { average_score } = C
// console.log(average_score());  // this.exam_scores will be undefined

// when we call the function as a method of C, it works with 'this'
console.log(C.name_char_count());
console.log(C.name_char_count_2()); // here, name will be undefined
console.log(C.age_with_name());


// if we use this (or globalThis), globally, it returns the Window object
console.log(this);
console.log(globalThis);

