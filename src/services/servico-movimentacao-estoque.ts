import { ColecaoProduto } from '@/interfaces/colecao-produto';
import { ColecaoMovimentacaoEstoque } from '@/interfaces/colecao-movimentacao-estoque';
import { ItemMovimentacao } from '@/models/itemMovimentacao';
import { TipoMovimentacaoENUM } from '@/models/tipoMovimentacaoEstoque';

export class ServicoMovimentacaoEstoque {

    constructor(
        private colecaoProduto: ColecaoProduto,
        private colecaoMovimentacaoEstoque: ColecaoMovimentacaoEstoque
    ) {

    }

    // async adicionarItem(quantidade: number, codigoProduto: number, tipo: TipoMovimentacaoENUM = TipoMovimentacaoENUM.ENTRADA): 
    //     Promise<ItemMovimentacao> {

    //     const produto = await this.colecaoProduto.produtoComCodigo(codigoProduto.toString())
    //     if(!produto)
    //         throw new Error('Produto não encontrado!! =('); //TO DO criar exceção própria
    //     const item = new ItemMovimentacao(produto, quantidade, tipo)
    // } //TO DO IMPLEMENTAR ESSE MÉTODO DE ADICIONAR ITEM PARA A VISAO
}