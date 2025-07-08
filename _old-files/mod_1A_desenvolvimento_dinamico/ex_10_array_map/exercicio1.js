/**
 * @author Pablo Henrique 
 * @date 03/07/2025

 * Problema:
 * Você tem um array com preços em reais. Crie um novo array onde cada preço tenha 10% de desconto.
 * const precos = [100, 200, 300, 50, 80];
 * Resultado esperado: [90, 180, 270, 45, 72]
*/

const precos = [100, 200, 300, 50, 80];

let precosComDesconto = precos.map(function(value) {
  return value - (value * 0.1)
})

console.table(`Preço Fixo: ${precos}\nPreço com Desconto: ${precosComDesconto}`)