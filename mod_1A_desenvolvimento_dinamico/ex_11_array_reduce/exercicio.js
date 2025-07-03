//  Exercício 1 – Somando idades
//  Você tem um array de objetos com pessoas. Use reduce para somar todas as idades.

 // Resultado esperado: 115

const pessoas = [
  { nome: 'Maria', idade: 28 },
  { nome: 'João', idade: 35 },
  { nome: 'Ana', idade: 22 },
  { nome: 'Carlos', idade: 30 }
]

let somaIdades = pessoas.reduce(function(idade,pessoa){
  return idade + pessoa.idade
},0)

console.log(somaIdades)
