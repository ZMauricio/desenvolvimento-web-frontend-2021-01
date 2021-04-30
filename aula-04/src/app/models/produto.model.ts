export class Produto {
  id: number;
  nome: string;
  descricao: string;
  validade: string;
  valor: number;
  imgPath: string;

  constructor()
  constructor(id?: number, nome?: string, descricao?: string, validade?: string, valor?: number, imgPath?: string) {
    this.id = id || 0;
    this.nome = nome || "";
    this.descricao = descricao || "";
    this.validade = validade || "";
    this.valor = valor || 0;
    this.imgPath = imgPath || "";
  }
}

