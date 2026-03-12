import readlineSync = require("readline-sync");
import Conta from "../model/Conta";

function runTests() {
  console.log("\n--- Testes de Conta (início) ---\n");

  const conta1 = new Conta(1, "Alice", 1000);
  const conta2 = new Conta(2, "Bob", 500);

  console.log("Contas criadas:");
  console.log(conta1.toString());
  console.log(conta2.toString());

  console.log("\nAlice saca R$200");
  conta1.sacar(200);
  console.log(conta1.toString());

  console.log("\nBob deposita R$300");
  conta2.depositar(300);
  console.log(conta2.toString());

  console.log("\nAlice transfere R$100 para Bob");
  conta1.transferir(100, conta2);
  console.log(conta1.toString());
  console.log(conta2.toString());

  console.log("\n--- Testes de Conta (fim) ---\n");
}

function main() {
  let opcao: number;

  runTests();

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
