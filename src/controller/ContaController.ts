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

  sacar(numero: number, valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor de saque inválido.");
      return false;
    }

    const conta = this.procurarPorNumero(numero);
    if (!conta) {
      console.log("Conta não encontrada.");
      return false;
    }

    if (conta.sacar(valor)) {
      console.log("Saque realizado com sucesso.");
      return true;
    }

    return false;
  }

  depositar(numero: number, valor: number): boolean {
    if (valor <= 0) {
      console.log("Valor de depósito inválido.");
      return false;
    }

    const conta = this.procurarPorNumero(numero);
    if (!conta) {
      console.log("Conta não encontrada.");
      return false;
    }

    conta.depositar(valor);
    console.log("Depósito realizado com sucesso.");
    return true;
  }

  transferir(
    numeroOrigem: number,
    numeroDestino: number,
    valor: number,
  ): boolean {
    if (valor <= 0) {
      console.log("Valor de transferência inválido.");
      return false;
    }

    const contaOrigem = this.procurarPorNumero(numeroOrigem);
    const contaDestino = this.procurarPorNumero(numeroDestino);

    if (!contaOrigem || !contaDestino) {
      console.log("Conta de origem ou destino não encontrada.");
      return false;
    }

    if (!contaOrigem.sacar(valor)) {
      return false;
    }

    contaDestino.depositar(valor);
    console.log("Transferência realizada com sucesso.");
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
