/**
 * @author Pablo Henrique 
 * @date 03/07/2025

 * Problema: Devolver apenas os nomes
 * Você tem um array de objetos representando usuários. Retorne apenas os nomes em um novo array.
 * const usuarios = [
 * { id: 1, nome: "Ana" },
 * { id: 2, nome: "Carlos" },
 * { id: 3, nome: "Bruna" }
 * ];
 * 
 * Resultado esperado: ["Ana", "Carlos", "Bruna"]
*/

console.log(`==========================\nDEVOLVENDO APENAS OS NOMES\n==========================\n`);

const usuarios = [
{ id: 1, nome: "Ana" },
{ id: 2, nome: "Carlos" },
{ id: 3, nome: "Bruna" }
]

let usuario = usuarios.map(usuario=> usuario.nome)
console.log(`Nomes: ${usuario}\n`)