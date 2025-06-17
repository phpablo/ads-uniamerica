class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar () {
    if(this.ligado) {
      console.log('Já está ligado!');
      return
    }
    this.ligado = true;
    console.log('Ligando...');
  }
}

class smarthPhone extends DispositivoEletronico {
  constructor(nome,cor,modelo) {
    super(nome),
    this.cor = cor,
    this.modelo = modelo;
  }
}

var s1 = new smarthPhone('xiaomi', 'preto', 'RedmiNote12');
// console.log(s1);
s1.ligar();
console.log(s1);
s1.ligar();
