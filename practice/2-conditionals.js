// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice

// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

// Write the recipe (algorithm) in the comments. Write the code.

// Store the value of the first die in memory. Write it out to the console in a human-readable format.
let die1 = getRandomInt(6)
let message = `The first die is ${die1}`
console.log(`The first die is ${die1}`)


// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let die2 = getRandomInt(6)
console.log(`The first die is ${die2}`)


// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let total = die1 + die2
console.log(`The total is ${total}`)
let output

if (total == 7 || total ==11) {
  //If the total of the two dice is 7 or 11, the player wins
  output = `YOU WIN!`
  // If the total of the two dice is 2, 3, or 12, the player loses
} else if (total == 2 || total == 3 || total == 12) {
  output = `YOU LOSE!`
  //   - If the total is anything else, the "point" is set, e.g. "the point is 6"
} else {
  output = `the point is ${total}`
}

  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
  // 🔥 YOUR CODE GOES HERE. 🔥
  // the value of the variable 'output' is already set to display on the page
  // write an if.. else if.. else statement to evaluate the value of 'total'
  // and set the value of 'output' appropriately
  if (total == 7 || total == 11) {
    output = 'you win!'
  } else if (total == 2 || total == 3 || total == 12) {
    output = 'you lose!'
  } else {
    output = `the point is ${total}`
  }
