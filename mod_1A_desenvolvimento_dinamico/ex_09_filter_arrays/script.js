// Cria um array de números de 1 a 10
numeros = [1,2,3,4,5,6,7,8,9,10]

// Filtra apenas os números pares do array
let resultado = numeros.filter(item => item % 2 == 0)
// Exibe o array de números pares no console
console.log(resultado)

// Filtra novamente os números pares usando outra variável
let pares = numeros.filter(i => i % 2 == 0)
// Exibe todos os números e os pares no console, usando template string
console.log(`Meus números: ${numeros}\nMeus Pares: ${pares}`)

// Filtra os números maiores que 5 usando uma função anônima
let maisCinco = numeros.filter(
  function(value){
    return value > 5
  }
)
// Exibe os números maiores que 5
console.log(`Maior q cinco : ${maisCinco}`)

// Declara uma função que retorna true para valores menores que 5
function buscarValores(value) {
  return value < 5
}

// Usa a função buscarValores para filtrar números menores que 5
let res = numeros.filter(buscarValores)
// Exibe os números menores que 5
console.log(res)

// Filtra números menores que 7 usando arrow function com return explícito
let r1 = numeros.filter((value) => {return value < 7 })
// Exibe os números menores que 7
console.log(r1);

// Filtra números menores que 3 usando arrow function com return implícito
let r2 = numeros.filter(value => value < 3)
// Exibe os números menores que 3
console.log(r2);
