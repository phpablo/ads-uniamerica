listaCompras = ['Arroz','Feijao','Carne','Bife Acebolado', 'Hamburguer']
console.log(listaCompras)

// cria um novo array com as fatias pegos do outro array 
let meuAlmoco = listaCompras.slice(0,3);
console.log(meuAlmoco)

// cria um novo array com o elemento selecionado e modifica o array original removendo o elemento 
let meuLanche = listaCompras.splice(1,1,'Macarrao')
console.log(meuLanche)
console.log(listaCompras)



