//  Exercício 1 – Exibir produtos formatados
//  Você tem um array de produtos, e quer exibir no console uma frase para cada um, com o nome e o preço formatado.

// Produto: Cerveja - Preço: R$ 5.50
// Produto: Refrigerante - Preço: R$ 4.00
// Produto: Água - Preço: R$ 2.50

const produtos = [
  { nome: 'Cerveja', preco: 5.5 },
  { nome: 'Refrigerante', preco: 4.0 },
  { nome: 'Água', preco: 2.5 }
];

produtos.forEach(function(value,produto){
  console.log(`Produto ${value.nome} custa R$ ${value.preco} reais\n`)
})

