class ContaCliente {
  constructor(numeroConta,saldo,debito,credito) {
      this.numeroConta = numeroConta,
      this.saldo = saldo,
      this.debito = debito,
      this.credito = credito;
  }

  calcularSaldoAtual() {
    return this.saldo - this.debito + this.credito;
  }

  verificarSaldoAtual() {
    const saldoAtual = this.calcularSaldoAtual();
      if(saldoAtual >=0) {
        alert('Saldo Positivo. R$ ' + saldoAtual )
      }else {
        alert('Saldo Negativo. R$ ' + saldoAtual )
      }
      return
    }
}

console.log('----------------------------------------------------');
let numeroConta = prompt('Digite o numero da conta do cliente:')
console.log('----------------------------------------------------');
let saldo = parseFloat(prompt("Digite o saldo do cliente: R$ "))
console.log('----------------------------------------------------');
let debito = parseFloat(prompt("Digite o debito do cliente: R$ "))
console.log('----------------------------------------------------');
let credito = parseFloat(prompt("Digite o credito do cliente: R$ "))
console.log('----------------------------------------------------');

let conta = new ContaCliente(numeroConta,saldo,debito,credito)
conta.verificarSaldoAtual();
