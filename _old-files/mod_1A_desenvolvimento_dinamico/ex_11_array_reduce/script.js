/**
 * Aplica uma função acumuladora contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
 *
 * @function
 * @name reduce
 * @param {Function} callback - Função a ser executada em cada elemento do array, recebe quatro argumentos:
 *   - accumulator: O valor retornado na última invocação do callback, ou o valor inicial, se fornecido.
 *   - currentValue: O elemento atual sendo processado no array.
 *   - currentIndex: O índice do elemento atual sendo processado no array.
 *   - array: O array sobre o qual o reduce foi chamado.
 * @param {*} [initialValue] - Valor a ser usado como o primeiro argumento da primeira chamada do callback.
 * @returns {*} O valor resultante da redução do array.
 */

// const numeros = [ 1,2,3,4,5,6,7,8,9,10]
// Cria um array chamado 'numeros' com dois elementos: 3 e 4
const numeros = [ 3,4]

// Utiliza o método reduce para somar todos os elementos do array 'numeros'
// O método reduce recebe uma função de callback e um valor inicial (0)
// A função de callback recebe dois parâmetros: 
//   - 'i' é o acumulador (começa com o valor inicial, 0)
//   - 'numero' é o valor atual do array sendo processado
let tot = numeros.reduce(function(i,numero){
  // Retorna a soma do acumulador com o valor atual
  return i+numero
},0)

// Exibe o resultado da soma no console
console.log(tot); // Saída: 7
