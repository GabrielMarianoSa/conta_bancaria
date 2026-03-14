"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const ContaController_1 = __importDefault(require("../controller/ContaController"));
function main() {
    let opcao;
    const controller = new ContaController_1.default();
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
                const tipo = readlineSync.questionInt("Tipo (1-Corrente, 2-Poupança): ");
                const titular = readlineSync.question("Titular: ");
                const saldo = readlineSync.questionFloat("Saldo inicial: ");
                const conta = controller.criarConta(numero, agencia, tipo, titular, saldo);
                if (controller.cadastrar(conta))
                    console.log("Conta cadastrada com sucesso.");
                break;
            }
            case 2: {
                const lista = controller.listarTodas();
                if (lista.length === 0) {
                    console.log("Nenhuma conta cadastrada.");
                }
                lista.forEach((c) => c.visualizar());
                break;
            }
            case 3: {
                const numero = readlineSync.questionInt("Número da conta: ");
                const conta = controller.procurarPorNumero(numero);
                if (!conta) {
                    console.log("Conta não encontrada.");
                }
                else {
                    conta.visualizar();
                }
                break;
            }
            case 4: {
                const numero = readlineSync.questionInt("Número da conta a atualizar: ");
                const existente = controller.procurarPorNumero(numero);
                if (!existente) {
                    console.log("Conta não encontrada.");
                    break;
                }
                const agencia = readlineSync.questionInt("Nova agência: ");
                const tipo = readlineSync.questionInt("Novo tipo (1-Corrente,2-Poupança): ");
                const titular = readlineSync.question("Novo titular: ");
                const saldo = readlineSync.questionFloat("Novo saldo: ");
                const nova = controller.criarConta(numero, agencia, tipo, titular, saldo);
                if (controller.atualizar(nova))
                    console.log("Conta atualizada.");
                break;
            }
            case 5: {
                const numero = readlineSync.questionInt("Número da conta a apagar: ");
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
