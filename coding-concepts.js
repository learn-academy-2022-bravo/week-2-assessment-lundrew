// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: "B" "r" "a" "v" "o" "2" "0" "2" "2"
// b) Verify and explain: My answer was correct because the split() method breaks the string up into a list of substrings.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello LEARN Student"
// b) Verify and explain: My answer was incorrect because the "greeter" function was missing "return" in the return statement. 

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: 8, 10, 12, 14, 16 
// b) Verify and explain: My answer was correct because the "multBy2" variable is equal to the array and is then exposed to the .map() method where the value in the array is multiplied by 2. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:11, 13, 15
// b) Verify and explain: My answer is correct because similar to the code above, "onlyOdds" is exposed to the .filter() method where it will output the value in the array if it is not even(value % 2 !== 0).


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: My answer is correct because in the console.log, we are using dot notation on the object "myCodingSkills" to access the property "languages" and then index "[0]" which is the first value in languages. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Bravo", year: 2022
// b) Verify and explain: My answer was correct because we are creating a new variable based off of the "Learn" class template. With the parameter as "name" and "this.student = name" we can create a new variable or class and pass an argument to "name", which gives "name" a new value such as "George".


