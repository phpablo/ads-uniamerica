const numbers = [10,20,30,40,50]

let total = 0;
numbers.forEach(number => console.log(`${number}`))
console.log('\n========================\n');


console.log('\nSoma dos arrays');
numbers.forEach(number=>{
  total += number
})

console.log(`${total}`)

console.log('\n========================\n');

numbers.forEach(function(valor,indice,array){
  console.log(array[indice])
})