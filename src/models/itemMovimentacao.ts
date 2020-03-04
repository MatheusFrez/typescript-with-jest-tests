import { TipoMovimentacaoENUM } from "./tipoMovimentacaoEstoque"
import { Produto } from "./produto"

export class ItemMovimentacao {
    public quantidade: number
    public tipo_movimentacao: TipoMovimentacaoENUM
    public produto: Produto
}