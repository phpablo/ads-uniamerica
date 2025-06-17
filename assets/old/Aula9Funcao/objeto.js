// Cria um objeto pessoa
const pessoa = {
  nome: 'Goku',
  sobrenome: 'Silva'
}

// Mostra o atributo do objeto
// console.log(pessoa['nome']);

// Criando outro objeto
const funcionario = new Object();

funcionario.nome = 'Gohan';
funcionario.sobrenome = 'Da Silva';

// console.log(funcionario.nome + funcionario.sobrenome);

// Criando objeto por function

function pessoas(nome,sobrenome,i) {
  return {
    nome,
    idade:i,
    sobrenome,
      nomeCompleto() {
        return `${nome} ${sobrenome} ${i}`
      }
  }
}

const p1 = pessoas('Joao', 'das neves',14);
const p2 = pessoas('Daenerys', 'Targerian',22);

console.log(p1);
console.log(p2.nomeCompleto());