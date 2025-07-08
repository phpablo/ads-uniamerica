const frutas = ['banana', 'maçã', 'banana', 'uva', 'maçã', 'banana'];

const contagem = frutas.reduce((acumulador, fruta) => {
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador;
}, {}); // acumulador começa como objeto vazio

console.table(contagem);
