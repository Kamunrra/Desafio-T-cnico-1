const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somatorioDivisiveis(numero) {
  let soma = 0;
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

function calcularSomatorio() {
  rl.question('Informe um número inteiro positivo: ', (numero) => {
    const parsedNumero = parseInt(numero);

    if (isNaN(parsedNumero) || parsedNumero <= 0) {
      console.log('Por favor, informe um número inteiro positivo.');
      rl.close();
    } else {
      const resultado = somatorioDivisiveis(parsedNumero);
      console.log(`Resultado: ${resultado}`);
      rl.close();
    }
  });
}

calcularSomatorio();
