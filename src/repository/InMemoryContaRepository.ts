import { Conta } from "../model/Conta";
import { ContaRepository } from "./contaRepository";

export class InMemoryContaRepository implements ContaRepository {
  private contas: Conta[] = [];

  salvar(conta: Conta): void {
    this.contas.push(conta);
  }

  atualizar(conta: Conta): void {
    const idx = this.contas.findIndex((c) => c.numero === conta.numero);
    if (idx >= 0) this.contas[idx] = conta;
  }

  deletar(numero: number): void {
    this.contas = this.contas.filter((c) => c.numero !== numero);
  }

  listar(): Conta[] {
    return [...this.contas];
  }

  buscarPorNumero(numero: number): Conta | undefined {
    return this.contas.find((c) => c.numero === numero);
  }
}
