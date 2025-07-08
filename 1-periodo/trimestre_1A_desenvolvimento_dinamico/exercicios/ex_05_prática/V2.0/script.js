console.log("SISTEMA DE ELEGIBILIDADE DE EMPREGOS\n");
console.log("====================================\n");

// input: nome, idade, nível de educação, e certificado
let nome = prompt("Qual seu nome?\n");
let idade = prompt("Qual sua idade?\n");
let educacao = prompt("Escolha seu nível de educação:\n1 - Superior \n2 - Médio");
let certificado = prompt("Você possui certificado?\n1 - Sim\n2 - Não");

let stats = '';

// Definir o nível de educação
if (educacao == 1) {
  educacao = 'Superior';
} else {
  educacao = 'Médio';
}

// Verificar se o candidato possui certificado
if (certificado == 1) {
  certificado = 'sim';
} else {
  certificado = 'não';
}

// Exibir as informações do candidato
console.log(`Candidato: ${nome}\nIdade: ${idade}\nEducação: ${educacao}\nPossui Certificado: ${certificado}\n`);

// Verificação de elegibilidade
if (idade >= 18 && educacao == 'Superior' && certificado == 'sim') {
  stats += 'Elegível - Cumpre os requisitos mínimos\n';
  console.log(`Elegível? ${stats}`);
} else {
  stats += 'Desclassificado - Não cumpre os requisitos mínimos\n';
  console.log(`Elegível? ${stats}`);
}

// Adicionar o nome do candidato à lista HTML
let lista = document.querySelector('.lista');  // Usando querySelector para pegar o primeiro elemento com a classe 'lista'
let novoItem = document.createElement('li');  // Criando um novo item de lista
novoItem.textContent = `${nome} - Status: ${stats.trim()}`  // Definindo o texto do item como o nome do candidato
lista.appendChild(novoItem);  // Adicionando o item à lista
