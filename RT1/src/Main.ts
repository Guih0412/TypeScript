import Empresa from "./Empresa";
import Funcionario from "./Funcionario";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Descritor from "./Descritor";


let funcionario1 = new Funcionario("Emily Armstrong", "492867315", "123.456.789-01", new Endereco(605, "Av. Cassiano Ricardo", "Jardim Aquárius", "São José dos Campos"), new Telefone('12', '98765-4321'),)

let funcionario2 = new Funcionario("Tico Santa Cruz", "738495261", "109.876.543-21", new Endereco(605, "Av. dos Evangélicos", "Campo dos Alemães", "São José dos Campos"), new Telefone('12', '91234-5678'),)

let funcionarios = [funcionario1, funcionario2]



let empresa = new Empresa(
    'ABC LTDA',
    'Rock for Fun',
    '999-999-999-999-99',
    new Endereco(279, "Rua Sebastião Humel", "Centro", "São José dos Campos"),
    funcionarios
);


let descritor= new Descritor
descritor.descrever(empresa)