export default class Bhaskara {
    public calcular(numeros: [number, number, number]): number[] | string {
        const [a, b, c] = numeros;
        let x1: number, x2: number
        const delta = b ** 2 - 4 * a * c
        if (delta < 0) {
            return "Delta menor que 0 --> Não há raizes."
        }
        else if (delta > 0) {
            x1 = (-b + delta ** (1 / 2)) / (2 * a)
            x2 = (-b - delta ** (1 / 2)) / (2 * a)
            return [x1, x2]
        }
        else {
            x1 = -b / (2 * a);
            return [x1]
        }


    }
}