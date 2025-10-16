"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = __importDefault(require("./Empresa"));
const Funcionario_1 = __importDefault(require("./Funcionario"));
const Endereco_1 = __importDefault(require("./Endereco"));
const Telefone_1 = __importDefault(require("./Telefone"));
const Descritor_1 = __importDefault(require("./Descritor"));
let funcionario1 = new Funcionario_1.default("Emily Armstrong", "492867315", "123.456.789-01", new Endereco_1.default(605, "Av. Cassiano Ricardo", "Jardim Aquárius", "São José dos Campos"), new Telefone_1.default('12', '98765-4321'));
let funcionario2 = new Funcionario_1.default("Tico Santa Cruz", "738495261", "109.876.543-21", new Endereco_1.default(605, "Av. dos Evangélicos", "Campo dos Alemães", "São José dos Campos"), new Telefone_1.default('12', '91234-5678'));
let funcionarios = [funcionario1, funcionario2];
let empresa = new Empresa_1.default('ABC LTDA', 'Rock for Fun', '999-999-999-999-99', new Endereco_1.default(279, "Rua Sebastião Humel", "Centro", "São José dos Campos"), funcionarios);
let descritor = new Descritor_1.default;
descritor.descrever(empresa);
