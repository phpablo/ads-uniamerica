numeros = [1,2,3,4,5,6,7]

// analisa cada item do array e aplica uma condição, se true, adiciona a response 
let pares = numeros.filter(i=> i % 2 == 0)
console.log(`Meus números: ${numeros}\nMeus Pares: ${pares}`)

// retorna maior que 5 criando uma funcao mesmo dentro dele 
let maisCinco = numeros.filter(
  function(value){
    return value > 5
  }
)
console.log(`Maior q cinco : ${maisCinco}`)



 


