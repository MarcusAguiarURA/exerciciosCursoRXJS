/**
 * Aula 26 - Desafio
 * Filtrar elementos frágeis, trazer preço total de cada e fazer a média total
 */

const carrinho = [
    { name: 'Caneta', amount: 10, price: 7.99, fragile: true },
    { name: 'Impressora', amount: 1, price: 649.50, fragile: true },
    { name: 'Caderno', amount: 4, price: 27.10, fragile: false },
    { name: 'Lápis', amount: 3, price: 5.82, fragile: false },
    { name: 'Tesoura', amount: 1, price: 19.20, fragile: true },
]

//Get total of fragile items
const getTotalOfFragiles = carrinho.filter(item => item.fragile) //only fragile
    .map(item => (item.amount * item.price)) //total price (amount * price)

console.log("Total of fragiles: ")
console.log(getTotalOfFragiles)

//Get total average
const totalAverage = getTotalOfFragiles.reduce((acc, item, index, array) => {
    let sum = acc + item
    if (index == array.length - 1)
        sum = sum / array.length
    return sum
})

console.log("Total average: ", totalAverage)

/**
 * Aula 28
 * Criar o próprio reduce
 */

Array.prototype.customReduce = function (fn, ini) {

    let acc = this[0]
    let initialIndex = 1

    if (ini) {
        acc = ini
        initialIndex--
    }

    for (let i = initialIndex; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }

    return acc
}

//Test custom reduce

const totalAverageCustomReduce = getTotalOfFragiles.customReduce((acc, item, index, array) => {
    let sum = acc + item
    if (index == array.length - 1)
        sum = sum / array.length
    return sum
})
console.log("Total average with custom reduce: ", totalAverageCustomReduce)

//Test 2, sum passing initial value

const numberArray = [1, 2, 3, 4, 5]

const sum = numberArray.reduce((acc, item) => acc + item, 0)

console.log("Sum with custom reduce: ", sum)