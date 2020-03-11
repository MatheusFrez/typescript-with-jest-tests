import { MovimentacaoEstoque } from '../../src/models/movimentacaoEstoque'
import { Produto } from '../../src/models/produto'
import { ItemMovimentacao } from '../../src/models/itemMovimentacao';
import { TipoMovimentacaoENUM } from '../../src/models/tipoMovimentacaoEstoque';
import { ColecaoMovimentacaoProdutoLocalStorage } from '../../src/colecoes/colecao-movimentacao-storage';
describe('ColecaoMovimentacaoEstoque', () => {

   let colecaoMovimentacaoEstoque: ColecaoMovimentacaoProdutoLocalStorage;
   beforeEach(() => {
      colecaoMovimentacaoEstoque = new ColecaoMovimentacaoProdutoLocalStorage();
   })

   it('adiciona uma movimentação', async () => {
      const produto = new Produto(1, '123456', 'Corona Lite', 5);
      const movimentacaoEstoque = new MovimentacaoEstoque(0, new Date().toISOString(), 'Item passou da validade', [ 
         new ItemMovimentacao(produto, 2, TipoMovimentacaoENUM.SAIDA) 
      ])

      expect(await colecaoMovimentacaoEstoque.todos()).toHaveLength(0);
      await colecaoMovimentacaoEstoque.adicionar(movimentacaoEstoque);
      expect(await colecaoMovimentacaoEstoque.todos()).toHaveLength(1);
   })

})