// Desafio mudar segunda palavra por outra e colocar em caixa alta
var msg = "Olá Mundo";
var novaMsg = msg.replace("Mundo","Pessoal");
console.log(novaMsg.toLocaleUpperCase());

// Segunda forma de fazer o desafio
if (msg.startsWith("Olá")) {
  let sub = msg.substring(4);
  let novaMsg = sub.replace("Mundo","Povo");
  let novaMsgMaiuscula = novaMsg.toUpperCase();
  console.log(novaMsgMaiuscula);
}
/**
 * Constroi uma string baseada na posição inical e final de outra
 * @param start
 * @param end 
 * @return {string}
 */
// var nomeCompleto = "Goku da Silva";
// var nomeNovo = nomeCompleto.substring(2,10);
// console.log(nomeNovo);
