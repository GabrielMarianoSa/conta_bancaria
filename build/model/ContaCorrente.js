"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = __importDefault(require("./Conta"));
class ContaCorrente extends Conta_1.default {
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(l) {
        this._limite = l;
    }
    sacar(valor) {
        if (valor <= 0)
            return false;
        if (this.saldo + this._limite < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }
    visualizar() {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }
}
exports.ContaCorrente = ContaCorrente;
exports.default = ContaCorrente;
