import { Soma, Subtracao, Multiplicacao, Divisao } from "rt3modulo";


// Gera dois números inteiros aleatórios de 1 a 50
const numero1 = Math.floor(Math.random() * 50) + 1;
const numero2 = Math.floor(Math.random() * 50) + 1;

// Soma
const soma = new Soma();
console.log(`Soma: ${numero1} + ${numero2} =`, soma.calcular(numero1,numero2));


// Subtração
const subtracao = new Subtracao();
console.log(`Subtração: ${numero1} - ${numero2} =`, subtracao.calcular(numero1,numero2));


// Multiplicação
const multiplicacao = new Multiplicacao();
console.log(`Multiplicação: ${numero1} x ${numero2} =`, multiplicacao.calcular(numero1,numero2));


// Divisão
const divisao = new Divisao();
console.log(`Divisão: ${numero1} / ${numero2} =`, divisao.calcular(numero1,numero2));

