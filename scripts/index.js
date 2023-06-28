// Do not change the import statement
// This statment imports the exported file so it's contents are accessible to us.
// This makes the "placeholderQuestions" act like a variable essentially.
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's content are the file data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0]);
// When I need a question/Answer I can iterate over the array.

//! NATURE 1
// Holding our array of questions for round 1 (0-4)
let round1Nature = placeholderQuestions.slice(0, 5);
console.log("round1Nature", round1Nature);

// Attaching our questions to our class name (essentially, each "point box")
  let naturePoints = document.getElementsByClassName("Nature1")
  console.log("naturePoints", naturePoints);

// Pulling questions from the array
  let natureArray = Array.from(naturePoints);
  console.log("natureArray", natureArray)

// Separates each question into it's separate "point box"
  natureArray.forEach((question) => {
    console.log("question", question)
  })

//! ANIMALS 1

  let round1Animals = placeholderQuestions.slice(10, 15);
  console.log("round1Animals", round1Animals);

  let animalPoints = document.getElementsByClassName("Animals1")
  console.log("animalPoints", animalPoints);

  let animalArray = Array.from(animalPoints)
  console.log("animalArray", animalArray)

  animalArray.forEach((question) => {
    console.log("question", question)
  })

//! COMPUTERS 1

  let round1Computers = placeholderQuestions.slice(20, 25);
  console.log("round1Computers", round1Computers)

  let compPoints = document.getElementsByClassName("Computers1")
  console.log("compPoints", compPoints)

  let compArray = Array.from(compPoints)
  console.log("compArray", compArray)

  compArray.forEach((question) => {
    console.log("question", question)
  })

  //! MYTHOLOGY

  let round1Myth = placeholderQuestions.slice(30, 35)
  console.log("round1Myth", round1Myth)

  let mythPoints = document.getElementsByClassName("Myth1")
  console.log("mythPoints", mythPoints)

  let mythArray = Array.from(mythPoints)
console.log("mythArray", mythArray)

  mythArray.forEach((question) => {
  console.log("question", question)
})

//! HISTORY
let round1History = placeholderQuestions.slice(40, 45)
console.log("round1History", round1History)

let hisPoints = document.getElementsByClassName("History1")
console.log("hisPoints", hisPoints)

let hisArray = Array.from(hisPoints)
console.log("hisArray", hisArray)

hisArray.forEach((question) => {
console.log("question", question)
})

//! GENERAL
let round1General = placeholderQuestions.slice(50, 55)
console.log("round1History", round1History)

let genPoints = document.getElementsByClassName("General1")
console.log("genPoints", genPoints)

let genArray = Array.from(genPoints)
console.log("genArray", genArray)

genArray.forEach((question) => {
console.log("question", question)
})

// ! Make comments, finish following categories for round 1 