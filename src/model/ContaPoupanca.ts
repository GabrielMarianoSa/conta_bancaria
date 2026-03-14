import Conta from "./Conta";

export class ContaPoupanca extends Conta {
  private _aniversario: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number,
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  get aniversario() {
    return this._aniversario;
  }
  set aniversario(a: number) {
    this._aniversario = a;
  }

  visualizar() {
    super.visualizar();
    console.log("Dia do aniversário: " + this._aniversario);
  }
}

export default ContaPoupanca;
