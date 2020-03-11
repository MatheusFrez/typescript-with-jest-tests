import { ColecaoProduto } from '../../src/interfaces/colecao-produto'
import { ColecaoEmStorage } from '../../src/colecoes/colecao-em-storage'
import { Produto } from '../../src/models/produto'

describe('ColecaoEmStorage', () => {

   describe('todos', () => {
      function criarColecao(): ColecaoEmStorage<Produto> {
         return new ColecaoEmStorage<Produto>('produto');
      }

      let colecao: ColecaoEmStorage<Produto> = null;

      beforeEach(async () => {
         colecao = criarColecao();
         await colecao.esvaziar();
      })

      it('Retorna uma lista vazia quando não houver produtos.', async () => {
         expect(await colecao.todos()).toHaveLength(0)
      })

      it('esvaziar remover todos os itens', async () => {
         await colecao.esvaziar()
         expect(await colecao.todos()).toHaveLength(0)
      })

      it('Retorna item adicionado', async () => {
         const produto = new Produto(0, '000001', 'Coca-cola 2L', 50)
         await colecao.adicionar(produto)
         const todos = await colecao.todos()
         expect(todos).toHaveLength(1);
      })

   })
})