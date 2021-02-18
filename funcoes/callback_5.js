const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];

const getTotal = item => item.qtde * item.preco

const total = carrinho.map(item => ({ total: getTotal(item) }))

const totalGeral = total.reduce((acc, current) => {
    return { totalGeral: acc.totalGeral + current.total }
}, { totalGeral: 0 })

console.log("total: ", total)
console.log("totalGeral: ", totalGeral)

//1 fragil: true
const filterFragil = carrinho.filter(item => item.fragil);
console.log("frágeis: ", filterFragil)
//2 qtde e preco fields
const camposQtdEPreco = carrinho.map(item => ({ qtde: item.qtde, preco: item.preco }));
console.log("apenas campos [qtde, preco]: ", camposQtdEPreco)
//2.2 qtde e preco totais
let qtdEPrecoTotal = carrinho.reduce((acc, el) => {
    return { qtdeTotal: acc.qtdeTotal + el.qtde, precoTotal: acc.precoTotal + (el.preco * el.qtde) }
}, { qtdeTotal: 0, precoTotal: 0 })
console.log("quantidade e preco totais: ", qtdEPrecoTotal)
//3 media dos totais
let mediaTotais = camposQtdEPreco.reduce((acc, el, index, originalArray) => {
    if (index < originalArray.length - 1)
        return { qtdeMedia: acc.qtdeMedia + el.qtde, precoMedio: acc.precoMedio + (el.preco * el.qtde) }

    return { qtdeMedia: (acc.qtdeMedia + el.qtde) / originalArray.length, precoMedio: (acc.precoMedio + (el.preco * el.qtde)) / originalArray.length }
}, { qtdeMedia: 0, precoMedio: 0 })
console.log("qtd e preco medio: ", mediaTotais)
//3 segundo modo
mediaTotais = [qtdEPrecoTotal].map(item => {
    return {
        qtdeMedia: (item.qtdeTotal / carrinho.length),
            precoMedio: (item.precoTotal / carrinho.length)           
    }
})
console.log("qtd e preco medio: ", mediaTotais)