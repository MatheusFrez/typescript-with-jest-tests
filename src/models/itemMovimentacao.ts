import { TipoMovimentacaoENUM } from "./tipoMovimentacaoEstoque"
import { Produto } from "./produto"

export class ItemMovimentacao {
    public tipo_movimentacao: TipoMovimentacaoENUM
    private produto: Produto
    public quantidade: number

    constructor(produto: Produto, quantidade: number, tipo: TipoMovimentacaoENUM) {
        this.produto = produto
        this.tipo_movimentacao = tipo
        this.quantidade = quantidade
    }

}