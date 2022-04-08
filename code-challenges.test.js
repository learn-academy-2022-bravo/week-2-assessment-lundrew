// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//_______________________________________________________________________________________________________________

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// // a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multBy3", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
      const numbersArray1 = []
      const numbersArray2 = []
      expect(multBy3(numbersArray1)).toEqual([])
      expect(multBy3(numbersArray2)).toEqual([])
    })
  })


// Pseudo Code: 
// Create a function called multBy3
// input a param of array 
// return the array and use the method map() to access the indexes
// multiply the values within the array by 3


// b) Create the function that makes the test pass.
const multBy3 = (array) => {
  return array.map(value => value * 3)
}

// OUTPUT:
// ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total

// // //_________________________________________________________________________________________________________________
// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// // Expected output: "15 is divisible by three"
const num2 = 0
// // Expected output: "0 is divisible by three"
const num3 = -7
// // Expected output: "-7 is not divisible by three"

describe("divisibleBy3", () => {
    it("takes in a number as an argument and decides if the number is evenly divisible by 3 or not", () => {
      const num1 = []
      const num2 = []
      const num3 = []
      expect(divisibleBy3(num1))
      expect(divisibleBy3(num2))
      expect(divisibleBy3(num3))
    })
  })

// Pseudo Code: 
// create a function called "divisibleBy3"
// create a param called "number"
// create an if else statement
// input the number modulo 3 strictly equal to 0
// return divisible by 3 if true
// return not divisible by 3 if not true

// b) Create the function that makes the test pass.
// // this is the passing test
const divisibleBy3 = (number) => {
    if  (number % 3 === 0){
        return "divisble by 3"
    } else{
      return "not divisible by 3"
    }
  }

//OUTPUT:
// ✓ takes in a number as an argument and decides if the number is evenly divisible by 3 or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total


// // _________________________________________________________________________________________________________________
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("upperCase", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
      const randomNouns1 = []
      const randomNouns2 = []
      expect(upperCase(randomNouns1))
      expect(upperCase(randomNouns2))
    })
  })

  // Pseudo Code: 
  // create a function called "upperCase"
  // place a param called "string"
  // return the param and use the map () method to access the values
  // return the value's first character and use the toUpperCase() method

// // b) Create the function that makes the test pass.
const upperCase = (string) => {
  return string.map(value=> {
    return value.charAt(0).toUpperCase() + value.substring(1);
  })
}

// OUTPUT:
// ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
//_________________________________________________________________________________________________________________


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelSpotter", () => {
    it("takes in a string and logs the index of the first vowel", () => {
      const vowelTester1 = []
      const vowelTester2 = []
      const vowelTester3 = []
      expect(vowelSpotter(vowelTester1))
      expect(vowelSpotter(vowelTester2))
      expect(vowelSpotter(vowelTester3))
    })
  })

// Pseudo Code: 
// create a variable array with vowels 
// create a function called "vowelSpotter"
// input a parameter called value
// create a new variable for foundIndexes
// create a for loop to iterate through index of the input value
// now push the found vowel to foundIndexes
// return the foundIndexes

// b) Create the function that makes the test pass.
const vowels = ['a', 'e', 'i', 'o', 'u'];

const vowelSpotter = (value) => {
  let foundIndexes = []
  for(let i = 0; i < value.length ; i++) {
    if (vowels.indexOf(value[i]) > -1){
      foundIndexes.push(i);
    }
  } 
  return foundIndexes.sort()[0]
}

//OUTPUT:
// ✓ takes in a string and logs the index of the first vowel (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// _________________________________________________________________________________________________________________
