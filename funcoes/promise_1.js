/**
 * Aula 29
 * Promises
 */


const nameArray = ['Ana', 'Bia', 'Carlos', 'Daniel']

firstElementOrLetter = array => array[0]
customLowerCase = letter => letter.toLowerCase()

new Promise((resolve) => resolve(nameArray))
    .then(firstElementOrLetter)
    .then(firstElementOrLetter)
    .then(customLowerCase)
    .then(result => console.log("First letter of first Element in lower case: ", result))
