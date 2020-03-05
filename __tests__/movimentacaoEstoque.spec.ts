import { MovimentacaoEstoque } from "../src/models/movimentacaoEstoque"
import { ItemMovimentacao } from "../src/models/itemMovimentacao"
import { Produto } from "../src/models/produto"
import { TipoMovimentacaoENUM } from "../src/models/tipoMovimentacaoEstoque"

describe("MovimentacaoEstoque", () => {

   describe("totalMovimentado", () => {
      it("Deve retornar 0 quando não há itens.", () => {
         const movEstoque = new MovimentacaoEstoque(1, 'teste', 'teste', undefined)
         expect(movEstoque.balanco()).toEqual(0)
      })

      it("Totaliza com a entrada de um item.", () => {
         const movEstoque = new MovimentacaoEstoque(1, 'teste', 'teste', undefined)
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 1, TipoMovimentacaoENUM.ENTRADA)
         )
         expect(movEstoque.balanco()).toEqual(1)
      })

      it("Totaliza com a saída de um item.", () => {
         const movEstoque = new MovimentacaoEstoque(1, 'teste', 'teste', undefined)
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 1, TipoMovimentacaoENUM.SAIDA)
         )
         expect(movEstoque.balanco()).toEqual(-1)
      })

      it("Totaliza 2 itens um com uma entrada e um com uma saída.", () => {
         const movEstoque = new MovimentacaoEstoque(1, 'teste', 'teste', undefined)
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 10, TipoMovimentacaoENUM.ENTRADA)
         )
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 5, TipoMovimentacaoENUM.SAIDA)
         )
         expect(movEstoque.balanco()).toEqual(5)
      })
   })

   describe("Quantidades", () => {
      it("2 itens um com uma entrada e um com uma saída.", () => {
         const movEstoque = new MovimentacaoEstoque(1, 'teste', 'teste', undefined)
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 10, TipoMovimentacaoENUM.ENTRADA)
         )
         movEstoque.adicionarItem(
            new ItemMovimentacao(new Produto(1, '01', 'Coca-Cola 600ML', 50), 5, TipoMovimentacaoENUM.SAIDA)
         )
         expect(movEstoque.totalItens()).toEqual(15)
      })
   })

})