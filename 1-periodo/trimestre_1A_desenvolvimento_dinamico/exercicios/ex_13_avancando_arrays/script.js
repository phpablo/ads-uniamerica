let arrayMisto = ["maçã", 42, "banana", 7, "laranja", 15,true];

//usar o map -> duplicar os números -> string em Uppercase -> outros tipos não mexe

let meuArrayMap = arrayMisto.map(function(arr) {
  if(typeof arr === 'string') {
    return arr.toUpperCase()
  }else if(typeof arr === 'number') {
    return arr * 2
  }
})

console.log(`${arrayMisto}\n`)
console.log(`${meuArrayMap}\n`)

let meuFilter = arrayMisto.filter(item => typeof item === 'number' )
console.log(`${meuFilter}\n`)

let meuReduce = arrayMisto.reduce(function(contador,item){
  if(typeof item === 'number') {
    return contador + item
  }else {
    return contador
  }
},0)

console.log(`${meuReduce}\n`)
