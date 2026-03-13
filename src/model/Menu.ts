import readlineSync = require("readline-sync");
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

function main() {
  let opcao: number;


  const contacorrente: ContaCorrente = new ContaCorrente(
    2,
    123,
    1,
    "Mariana",
    15000,
    1000,
  );
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  const contapoupanca: ContaPoupanca = new ContaPoupanca(
    3,
    123,
    2,
    "Victor",
    1000,
    10,
  );
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Número              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    opcao = readlineSync.questionInt("Entre com a opcao desejada: ");

    if (opcao === 9) {
      console.log("\nBanco encerrado!");
      process.exit(0);
    }

    console.log("\nOpcao escolhida:", opcao);
  }
}

main();
