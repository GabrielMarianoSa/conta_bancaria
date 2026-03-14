"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("../model/Conta"));
class ContaController {
    constructor() {
        this.contas = [];
    }
    procurarPorNumero(numero) {
        return this.contas.find((c) => c.numero === numero);
    }
    listarTodas() {
        return this.contas;
    }
    cadastrar(conta) {
        if (this.procurarPorNumero(conta.numero)) {
            console.log("Já existe uma conta com esse número.");
            return false;
        }
        this.contas.push(conta);
        return true;
    }
    atualizar(conta) {
        const idx = this.contas.findIndex((c) => c.numero === conta.numero);
        if (idx === -1) {
            console.log("Conta não encontrada para atualização.");
            return false;
        }
        this.contas[idx] = conta;
        return true;
    }
    deletar(numero) {
        const idx = this.contas.findIndex((c) => c.numero === numero);
        if (idx === -1) {
            console.log("Conta não encontrada para exclusão.");
            return false;
        }
        this.contas.splice(idx, 1);
        return true;
    }
    // métodos auxiliares
    existe(numero) {
        return !!this.procurarPorNumero(numero);
    }
    criarConta(numero, agencia, tipo, titular, saldo) {
        return new Conta_1.default(numero, agencia, tipo, titular, saldo);
    }
}
exports.default = ContaController;
