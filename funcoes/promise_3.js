/**
 * Aula 31
 * Promises
 */

generateRandomValueBetween = (min, max) => {
    if (min > max)
        [min, max] = [max, min]
    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

generateRandomValueBetween(14, 15)
    .then(result => result * 10)
    .then(nx10 => `The result x10 is ${nx10}`)
    .then(console.log)