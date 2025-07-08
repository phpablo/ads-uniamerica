function criaPessoa(nome, idade, p, a) {
  return {
    nome,
    idade,
    peso: p,
    altura: a,
    calcIMC() {
      const imc = this.peso / (this.altura ** 2).toFixed(1);
      if (imc < 18.5) {
        console.log(`Seu IMC é ${imc} e você está abaixo do peso`);
      } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu IMC é ${imc} e seu peso está normal`);
      } else if (imc >= 25 && imc <= 29.9) {
        console.log(`Seu IMC é ${imc} e você está acima do peso`);
      } else if (imc >= 30 && imc <= 34.9) {
        console.log(`Seu IMC é ${imc} e você com Obesidade I`);
      } else if (imc >= 35 && imc <= 39.9) {
        console.log(`Seu IMC é ${imc} e você com Obesidade II`);
      } else {
        console.log(`Seu IMC é ${imc} e você com Obesidade III`);
      }
    }

  }
}

// function calcIMC(peso, altura) {
//   let imc = peso / (altura ** 2).toFixed(2);

//   if (imc < 18.5) {
//     console.log(`Seu IMC é ${imc} e você está abaixo do peso`);
//   } else if (imc >= 18.5 && imc <= 24.9) {
//     console.log(`Seu IMC é ${imc} e seu peso está normal`);
//   } else if (imc >= 25 && imc <= 29.9) {
//     console.log(`Seu IMC é ${imc} e você está acima do peso`);
//   } else if (imc >= 30 && imc <= 34.9) {
//     console.log(`Seu IMC é ${imc} e você com Obesidade I`);
//   } else if (imc >= 35 && imc <= 39.9) {
//     console.log(`Seu IMC é ${imc} e você com Obesidade II`);
//   } else {
//     console.log(`Seu IMC é ${imc} e você com Obesidade III`);
//   }

//   return { imc };
// }

var p1 = criaPessoa('Jão', 14, 123, 1.68);
p1.calcIMC();
