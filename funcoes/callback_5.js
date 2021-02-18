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
];

//Get total of fragile items
const getTotalOfFragiles = carrinho.filter(item => item.fragile) //only fragile
                                    .map( item => (item.amount * item.price)) //total price (amount * price)

console.log("Total of fragiles: ")
console.log(getTotalOfFragiles)

//Get total average
const totalAverage = getTotalOfFragiles.reduce( (acc, item, index, array) => {
                                let sum =  acc + item;
                                if (index == array.length - 1)
                                    sum = sum / array.length;
                                return sum;
                            })

console.log("Total average: ")
console.log(totalAverage)