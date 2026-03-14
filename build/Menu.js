var readlineSync = require("readline-sync");
var ContaController = require("../controller/ContaController").default;
function main() {
    var opcao;
    var controller = new ContaController();
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
                var numero = readlineSync.questionInt("Número da conta: ");
                var agencia = readlineSync.questionInt("Agência: ");
                var tipo = readlineSync.questionInt("Tipo (1-Corrente, 2-Poupança): ");
                var titular = readlineSync.question("Titular: ");
                var saldo = readlineSync.questionFloat("Saldo inicial: ");
                var conta = controller.criarConta(numero, agencia, tipo, titular, saldo);
                if (controller.cadastrar(conta))
                    console.log("Conta cadastrada com sucesso.");
                break;
            }
            case 2: {
                var lista = controller.listarTodas();
                if (lista.length === 0) {
                    console.log("Nenhuma conta cadastrada.");
                }
                lista.forEach(function (c) { return c.visualizar(); });
                break;
            }
            case 3: {
                var numero = readlineSync.questionInt("Número da conta: ");
                var conta = controller.procurarPorNumero(numero);
                if (!conta) {
                    console.log("Conta não encontrada.");
                }
                else {
                    conta.visualizar();
                }
                break;
            }
            case 4: {
                var numero = readlineSync.questionInt("Número da conta a atualizar: ");
                var existente = controller.procurarPorNumero(numero);
                if (!existente) {
                    console.log("Conta não encontrada.");
                    break;
                }
                var agencia = readlineSync.questionInt("Nova agência: ");
                var tipo = readlineSync.questionInt("Novo tipo (1-Corrente,2-Poupança): ");
                var titular = readlineSync.question("Novo titular: ");
                var saldo = readlineSync.questionFloat("Novo saldo: ");
                var nova = controller.criarConta(numero, agencia, tipo, titular, saldo);
                if (controller.atualizar(nova))
                    console.log("Conta atualizada.");
                break;
            }
            case 5: {
                var numero = readlineSync.questionInt("Número da conta a apagar: ");
                if (controller.deletar(numero))
                    console.log("Conta removida.");
                break;
            }
            default:
                console.log("Opção não implementada neste exemplo.");
        }
    }
}
main();
