import { ItemMovimentacao } from "./itemMovimentacao";

export class MovimentacaoEstoque {
    private id: number
    private data_hora: string
    private motivo: string
    private itens: Array<ItemMovimentacao> 

    constructor(id: number, data_hora: string, motivo: string, itens: Array<ItemMovimentacao>) {
        this.id = id
        this.data_hora = data_hora
        this.motivo = motivo
        this.itens = itens || new Array<ItemMovimentacao>()
    }

    public adicionarItem(item: ItemMovimentacao): void {
        this.itens.push(item);
    }

    public balanco(): number {
        return this.itens.reduce((total, item: ItemMovimentacao) =>  
            item.tipo_movimentacao === 'ENTRADA' ? total += item.quantidade : total -= item.quantidade, 
         0 );  
    }

    public totalItens(): number {
        return this.itens.reduce((total, item: ItemMovimentacao) => total += item.quantidade, 0)
    }
}