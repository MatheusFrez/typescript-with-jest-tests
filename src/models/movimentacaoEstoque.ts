import { ItemMovimentacao } from "./itemMovimentacao";

export class MovimentacaoEstoque {
    public id: number
    public data_hora: string
    public motivo: string
    public itens: Array<ItemMovimentacao> = new Array<ItemMovimentacao>()

    public totalMovimentado(): number {
        return this.itens.reduce((total, item) => total += item.quantidade, 0);
    }
}