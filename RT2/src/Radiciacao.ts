import Calculo from "./Calculo.js"

export default class Radiacao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 ** (1 / numero2)
    }
}