/**
 * @author Pablo Henrique 
 * @date 03/07/2025

 * Problema: Formatando produtos
 * Você tem um array de produtos, cada um com nome e preço. Crie um novo array de strings formatadas, exemplo:        "Camiseta: R$50".
 * const produtos = [
 * { nome: "Camiseta", preco: 50 },
 * { nome: "Calça", preco: 100 },
 * { nome: "Tênis", preco: 250 }
 * ];
 * 
 * Resultado esperado:
 * [
 * "Camiseta: R$50",
 * "Calça: R$100",
 * "Tênis: R$250"
 *   / ]
*/

console.log(`======================\nFORMATANDO PRODUTOS\n======================\n`)

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 250 }
];

let produto = produtos.map(function(produto){
  return `${produto.nome}: R$ ${produto.preco}`
})

console.log(produto)

