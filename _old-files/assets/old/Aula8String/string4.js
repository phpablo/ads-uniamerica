var url = "http://minhaempresa.com/filme?nome=poder&atores=Lucas,Guilherme";
var parametros = url.split("?")[1];
// console.log(parametros);

var valores = parametros.split("&");
// console.log(valores);
for (let i = 0; i < valores.length; i++) {
  if (valores[i].startsWith("atores=")){
    valores[i] = "atores=" + valores[i].substring(7).toLocaleUpperCase();
  }

}
console.log(valores);
