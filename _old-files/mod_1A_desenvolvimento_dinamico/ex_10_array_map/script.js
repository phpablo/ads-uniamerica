// Resumo da aula:
// Nesta aula, aprendemos sobre o método map() em JavaScript, que permite iterar sobre arrays e criar novos arrays com base nos valores transformados dos elementos originais. Vimos exemplos de como dobrar valores numéricos e como extrair propriedades específicas de objetos dentro de um array.

/*
 * Aula sobre o método Array.prototype.map() em JavaScript
 * - Demonstração de como transformar arrays de números e objetos
 * - Uso de funções anônimas e arrow functions para manipulação de dados
 * - Boas práticas: nomes de variáveis claros, comentários explicativos e uso de console.log/table para visualização dos resultados
 */

// Map pega o elemento e interage nele , itera, com cada elemento e armazena em um novo array por exemplo
var number = [1,2,3,4,5,6,7]

var response = number.map(function(valor) {
  return valor *2
})

console.log(response)

var person = [
  {nome: 'Gohan', idade: 12},
  {nome: 'Goku', idade: 35},
  {nome: 'Vegeta', idade: 36},
  {nome: 'Bulma', idade: 34},
  {nome: 'Trunks', idade: 14},
  {nome: 'Piccolo', idade: 40},
  {nome: 'Kuririn', idade: 33}
]

var resposta = person.map(pessoa => pessoa.nome)
console.table(resposta)
