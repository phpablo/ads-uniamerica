const tarefas = [
  { titulo: "Estudar JavaScript", concluida: false },
  { titulo: "Fazer exercícios de programação", concluida: false },
  { titulo: "Ler documentação", concluida: false },
  { titulo: "Revisar código", concluida: false },
  { titulo: "Participar de reuniões", concluida: false }
];
console.table(tarefas)

tarefas.forEach(tarefa => {
  if(tarefa.concluida === false) {
    tarefa.concluida = true
  }
})
console.table(tarefas)