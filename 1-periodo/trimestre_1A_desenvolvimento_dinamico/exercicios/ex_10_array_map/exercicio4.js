const alunos = [
  { nome: "Lucas", nota: 9 },
  { nome: "Júlia", nota: 7 },
  { nome: "Pedro", nota: 5 }
];

let historicoAlunos = alunos.map(aluno=> {
  console.log(`${aluno.nome} tirou a nota ${aluno.nota}\n`)
})
console.log(historicoAlunos)