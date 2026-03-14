import Conta from "../model/Conta";

export default class ContaController {
  private contas: Conta[] = [];

  procurarPorNumero(numero: number): Conta | undefined {
    return this.contas.find((c: Conta) => c.numero === numero);
  }

  listarTodas(): Conta[] {
    return this.contas;
  }

  cadastrar(conta: Conta): boolean {
    if (this.procurarPorNumero(conta.numero)) {
      console.log("Já existe uma conta com esse número.");
      return false;
    }
    this.contas.push(conta);
    return true;
  }

  atualizar(conta: Conta): boolean {
    const idx = this.contas.findIndex((c: Conta) => c.numero === conta.numero);
    if (idx === -1) {
      console.log("Conta não encontrada para atualização.");
      return false;
    }
    this.contas[idx] = conta;
    return true;
  }

  deletar(numero: number): boolean {
    const idx = this.contas.findIndex((c: Conta) => c.numero === numero);
    if (idx === -1) {
      console.log("Conta não encontrada para exclusão.");
      return false;
    }
    this.contas.splice(idx, 1);
    return true;
  }

  // métodos auxiliares
  existe(numero: number): boolean {
    return !!this.procurarPorNumero(numero);
  }

  criarConta(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
  ): Conta {
    return new Conta(numero, agencia, tipo, titular, saldo);
  }
}
