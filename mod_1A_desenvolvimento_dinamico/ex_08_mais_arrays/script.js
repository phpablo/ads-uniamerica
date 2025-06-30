listaCompras = ['Arroz','Feijao','Carne','Bife Acebolado', 'Hamburguer']
console.log(listaCompras)

// cria um novo array com as fatias pegos do outro array 
let meuAlmoco = listaCompras.slice(0,3);
console.log(meuAlmoco)

// cria um novo array com o elemento selecionado e modifica o array original removendo o elemento 
let meuLanche = listaCompras.splice(1,1,'Macarrao')
console.log(meuLanche)
console.log(listaCompras)

// adiciona no inicio 
listaCompras.unshift('Bomba')
console.log(listaCompras)

// remove o 1 elemento 
listaCompras.shift(0)
console.log(listaCompras);

// adiciona no fim do array 
listaCompras.push('Gohan')
console.log(listaCompras);

// remove ultimo 
listaCompras.pop(5)
console.log(listaCompras);
 


