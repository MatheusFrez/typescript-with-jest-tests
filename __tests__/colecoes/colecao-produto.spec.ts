import { ColecaoProduto } from '../../src/interfaces/colecao-produto'
import { ColecaoProdutoEmLocalStorage } from '../../src/colecoes/produto-em-local-storage'
import { Produto } from '../../src/models/produto'

describe('ColecaoProduto', () => {

    describe('todos', () => {
        function criarColecao(): ColecaoProduto {
            return new ColecaoProdutoEmLocalStorage();
        }

        let colecao: ColecaoProduto = null;

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

        it('Aumenta estoque de um produto', async () => {
            const produto = new Produto(0, '000001', 'Coca-cola 2L', 50)
            await colecao.adicionar(produto)
            await colecao.aumentarEstoque('000001', 5);
            const produtoPeloCodigo: Produto | null = await colecao.produtoComCodigo('000001');
            expect(produtoPeloCodigo).not.toBeNull();
            expect(produtoPeloCodigo?.estoque).toEqual(55);
        })

        it('Diminuir estoque de um produto', async () => {
            const produto = new Produto(0, '000001', 'Coca-cola 2L', 50)
            await colecao.adicionar(produto)
            await colecao.diminuirEstoque('000001', 5);
            const produtoPeloCodigo: Produto | null = await colecao.produtoComCodigo('000001');
            expect(produtoPeloCodigo).not.toBeNull();
            expect(produtoPeloCodigo?.estoque).toEqual(45);
        })
    })
})