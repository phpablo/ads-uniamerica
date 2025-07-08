console.log("SISTEMA DE ELEGIBILIDADE DE EMPREGOS\n");
console.log("====================================\n");

// input: idade, experiencia em anos , nivel de educação, possui certificado ?

nome = prompt("Qual seu nome?\n")
idade = prompt("Qual idade?\n")
educacao = prompt("1 - Superior \n 2 - Medio") 
certificado = prompt("Possui certificado ?\n 1-sim 2-nao")
stats = '';

if(educacao == 1 ) {
  educacao = 'Superior'
}else {
  educacao = 'Medio'
}
if(certificado==1) {
  certificado = 'sim'
}else {
  certificado = 'nao'
}

console.log(`Candidato: ${nome}\n Idade: ${idade}\n Educação: ${educacao}\n Possui Certificado: ${certificado}\n`)

if(idade >= 18 && educacao == 'Superior' && certificado == 'sim') {
  stats += 'Elegível - Cumpre os requisitos mínimos\n'
  console.log(`Elegível ? ${stats}`)
}else {
  stats += 'Desclassificado - Não cumpre os requisitos mínimos\n'
  console.log(`Elegível ? ${stats}`)

}


