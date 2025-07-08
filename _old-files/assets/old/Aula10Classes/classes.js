/**
 * Retorna uma pessoa com 2 atributos
 * @param {string} - parâmetro de nome
 * @param {string} - parâmetro de sobrenome
 * @return {string} - nome completo do objeto
 */
class Pessoa {
  // construtor do objeto
  constructor(nome,sobrenome){
    // seta o nome passado por parâmetro
    this.nome = nome;
    // seta o sobrenome passado por parâmetro
    this.sobrenome = sobrenome;
  }

  // método do objeto
  // metodo dentro de uma classe ñ vai function
  falar(){
    console.log('========================================');
    console.log(`#Olá, ${this.nome}, tudo bom? #`);
    console.log('========================================');
  }

  get nomeCompleto() {
    console.log('=========================================');
    console.log(`Eai ${this.nome}${this.sobrenome}`);
    console.log('=========================================');
  }

}

p1 = new Pessoa('Goku',' da silva');
p1.falar();
p1.nomeCompleto;