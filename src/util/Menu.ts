import * as readlineSync from "readline-sync";
import ContaController from "../controller/ContaController";

function main() {
  let opcao: number;
  const controller = new ContaController();

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

    switch (opcao) {
      case 1: {
        const numero = readlineSync.questionInt("Número da conta: ");
        const agencia = readlineSync.questionInt("Agência: ");
        const tipo = readlineSync.questionInt(
          "Tipo (1-Corrente, 2-Poupança): ",
        );
        const titular = readlineSync.question("Titular: ");
        const saldo = readlineSync.questionFloat("Saldo inicial: ");
        const conta = controller.criarConta(
          numero,
          agencia,
          tipo,
          titular,
          saldo,
        );
        if (controller.cadastrar(conta))
          console.log("Conta cadastrada com sucesso.");
        break;
      }
      case 2: {
        const lista = controller.listarTodas();
        if (lista.length === 0) {
          console.log("Nenhuma conta cadastrada.");
        }
        lista.forEach((c: any) => c.visualizar());
        break;
      }
      case 3: {
        const numero = readlineSync.questionInt("Número da conta: ");
        const conta = controller.procurarPorNumero(numero);
        if (!conta) {
          console.log("Conta não encontrada.");
        } else {
          conta.visualizar();
        }
        break;
      }
      case 4: {
        const numero = readlineSync.questionInt(
          "Número da conta a atualizar: ",
        );
        const existente = controller.procurarPorNumero(numero);
        if (!existente) {
          console.log("Conta não encontrada.");
          break;
        }
        const agencia = readlineSync.questionInt("Nova agência: ");
        const tipo = readlineSync.questionInt(
          "Novo tipo (1-Corrente,2-Poupança): ",
        );
        const titular = readlineSync.question("Novo titular: ");
        const saldo = readlineSync.questionFloat("Novo saldo: ");
        const nova = controller.criarConta(
          numero,
          agencia,
          tipo,
          titular,
          saldo,
        );
        if (controller.atualizar(nova)) console.log("Conta atualizada.");
        break;
      }
      case 5: {
        const numero = readlineSync.questionInt("Número da conta a apagar: ");
        if (controller.deletar(numero)) console.log("Conta removida.");
        break;
      }
      case 6: {
        const numero = readlineSync.questionInt("Número da conta: ");
        const valor = readlineSync.questionFloat("Valor do saque: ");
        controller.sacar(numero, valor);
        break;
      }
      case 7: {
        const numero = readlineSync.questionInt("Número da conta: ");
        const valor = readlineSync.questionFloat("Valor do depósito: ");
        controller.depositar(numero, valor);
        break;
      }
      case 8: {
        const numeroOrigem = readlineSync.questionInt(
          "Número da conta origem: ",
        );
        const numeroDestino = readlineSync.questionInt(
          "Número da conta destino: ",
        );
        const valor = readlineSync.questionFloat("Valor da transferência: ");
        controller.transferir(numeroOrigem, numeroDestino, valor);
        break;
      }
      default:
        console.log("Opção não implementada neste exemplo.");
    }
  }
}

main();
