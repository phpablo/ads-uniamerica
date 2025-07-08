// Declara um array vazio
const shopCart = [];

// Funcao que add item no carrinho
function addItemCart(item) {
  shopCart.push(item);
}

// Funcao que remove item do carrinho
function removeItemCart(item) {
  const index = shopCart.indexOf(item);
  if(index !== -1) {
    shopCart.splice(index, 1);
  }
}

// Funcao que mostra o conteúdo do carrinho
function viewItemCart() {
  if(shopCart.length == 0) {
    console.log('Seu carrinho está vazio!');
  }else {
    console.log('Itens do seu carrinho:');
    for(let i = 0; i < shopCart.length; i++) {
      console.log(`# ${i+1} - ${shopCart[i]} #`)
    }
  }
}

// Funcao que esvazia o carrinho
function clearCart() {
  shopCart.length = 0;
  console.log('Seu carrinho foi esvaziado');
}

// Exemplo de uso, add item
addItemCart("Arroz");
addItemCart("Feijao");
addItemCart("Bife Acebolado");

// Exemplo de uso, mostra carrinho
viewItemCart();

// Removendo item do carrinho
removeItemCart('Arroz');

// Mostra carrinho
viewItemCart();


// Esvazia o carrinho
clearCart();

// Mostra o carrinho
viewItemCart();