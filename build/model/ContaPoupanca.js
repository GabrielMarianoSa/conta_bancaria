"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, agencia, tipo, titular, saldo, aniversario) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }
    get aniversario() {
        return this._aniversario;
    }
    set aniversario(a) {
        this._aniversario = a;
    }
    visualizar() {
        super.visualizar();
        console.log("Dia do aniversário: " + this._aniversario);
    }
}
exports.ContaPoupanca = ContaPoupanca;
exports.default = ContaPoupanca;
