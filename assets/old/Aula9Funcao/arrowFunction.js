/**
 * Função anônima 1º letra em maiúscula
 * @param {array} - Array
 * @return {array} - Array formatado
 * @author PHPablo
 */

function transformarMaiuscula(elemento) {
  return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

// Declara array de produtos
var produtos = ['mouse','teclado','monitor'];

// Var recebe o array chamando a funcao
var primeiraMaiuscula = produtos.map(transformarMaiuscula);


console.log(`Produtos formatados: ${primeiraMaiuscula}`);




// /**
//  * Função anônima soma dois números
//  * @param {number} - Primeiro número
//  * @param {number} - Segundo número
//  * @return {string} - Mensagem de retorno
//  * @author PHPablo
//  */

// //Exemplo de Uso
// // nao precisa de 'function' passa param direto
// const soma = (num1,num2) =>{
//   // soma dois números
//   return num1 + num2;
// }

// console.log(soma(3,4)); // Saída esperada: 7