export class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  get numero() {
    return this._numero;
  }
  set numero(n: number) {
    this._numero = n;
  }

  get agencia() {
    return this._agencia;
  }
  set agencia(a: number) {
    this._agencia = a;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(t: number) {
    this._tipo = t;
  }

  get titular() {
    return this._titular;
  }
  set titular(t: string) {
    this._titular = t;
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(s: number) {
    this._saldo = s;
  }

  sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\n Saldo Insuficiente!");
      return false;
    }
    this._saldo = this._saldo - valor;
    return true;
  }

  depositar(valor: number) {
    this._saldo = this._saldo + valor;
  }

  visualizar() {
    let tipo = "";
    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
    }
    console.log("\n\n*****************************************************");
    console.log("Dados da Conta:");
    console.log("*****************************************************");
    console.log("Numero da Conta: " + this._numero);
    console.log("Agência: " + this._agencia);
    console.log("Tipo da Conta: " + tipo);
    console.log("Titular: " + this._titular);
    console.log("Saldo: " + this._saldo.toFixed(2));
  }
}

export default Conta;
