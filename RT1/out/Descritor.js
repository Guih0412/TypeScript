"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Descritor {
    descrever(empresa) {
        console.log(`======= Empresa ======= `);
        console.log(`Razão Social: ${empresa.razaoSocial}`);
        console.log(`Nome Fantasia: ${empresa.nomeFantasia}`);
        console.log(`CNPJ: ${empresa.cnpj}`);
        console.log(`Endereço: ${empresa.endereco.rua}, ${empresa.endereco.numero}, ${empresa.endereco.bairro}, ${empresa.endereco.cidade}`);
        console.log(`\n======= Funcionários =======`);
        for (let f of empresa.funcionarios) {
            console.log(`Nome: ${f.nome}`);
            console.log(`Matrícula: ${f.matricula}`);
            console.log(`CPF: ${f.cpf}`);
            console.log(`Endereço: ${f.endereco.rua}, ${f.endereco.numero}, ${f.endereco.bairro}, ${f.endereco.cidade}`);
            console.log(`Telefone: (${f.telefone.ddd}) ${f.telefone.numero}`);
            console.log("---------------------------");
        }
    }
}
exports.default = Descritor;
