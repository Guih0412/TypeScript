import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import Soma from "./Soma.js";
import Subtracao from "./Subtracao.js";
import Multiplicacao from "./Multiplicacao.js";
import Divisao from "./Divisao.js";
import Potenciacao from "./Potenciacao.js";
import Radiciacao from "./Radiciacao.js";
import Bhaskara from "./Bhaskara.js";

const leitor = readline.createInterface({ input, output });

async function main() {
    console.log("Escolha a operação:");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Potencia");
    console.log("6 - Raiz");
    console.log("7 - Bhaskara");

    const escolha = await leitor.question("Digite o número da operação: ");

    if (escolha === "7") {
        const a = Number(await leitor.question("Digite o valor de A: "));
        const b = Number(await leitor.question("Digite o valor de B: "));
        const c = Number(await leitor.question("Digite o valor de C: "));
        const resultado = new Bhaskara().calcular([a, b, c]);
        console.log("Raizes:", resultado);
    } else {
        const numero1 = Number(await leitor.question("Digite o primeiro número: "));
        const numero2 = Number(await leitor.question("Digite o segundo número: "));

        let resultado: number;

        switch (escolha) {
            case "1":
                resultado = new Soma().calcular(numero1, numero2);
                break;
            case "2":
                resultado = new Subtracao().calcular(numero1, numero2);
                break;
            case "3":
                resultado = new Multiplicacao().calcular(numero1, numero2);
                break;
            case "4":
                resultado = new Divisao().calcular(numero1, numero2);
                break;
            case "5":
                resultado = new Potenciacao().calcular(numero1, numero2);
                break;
            case "6":
                resultado = new Radiciacao().calcular(numero1, numero2);
                break;
            default:
                console.log("Opção inválida!");
                return;
        }

        console.log("Resultado:", resultado);
    }

    leitor.close();
}

main();
