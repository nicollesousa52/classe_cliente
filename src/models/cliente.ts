export class Cliente {
  public id: number;
  public nome: string;
  public cpf: string;
  public rg: string;
  public dtNascimento: string;

  constructor(id: number, nome: string, cpf: string, rg: string, dtNascimento: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.dtNascimento = dtNascimento;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public getRG(): string {
    return this.rg;
  }

  public getAnoNascimento(): number {
    // Pega a string "DD/MM/YYYY", divide nas barras e retorna a última parte (o ano) como número
    const partes = this.dtNascimento.split("/");
    return parseInt(partes[2]);
  }

  public getIdade(): number {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = this.getAnoNascimento();
    
    // Fórmula exata exigida pelo professor
    return anoAtual - anoNascimento;
  }
}