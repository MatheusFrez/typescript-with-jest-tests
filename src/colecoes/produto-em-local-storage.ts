import { ColecaoProduto } from '@/interfaces/colecao-produto';
import { Produto } from '@/models/produto';
import { ColecaoEmStorage } from './colecao-em-storage';

const CHAVE_STORAGE = 'produtos'

export class ColecaoProdutoEmLocalStorage  extends ColecaoEmStorage<Produto> implements ColecaoProduto {

    constructor() {
        super(CHAVE_STORAGE);
    } 

    /**
     * @returns Array de produtos presente atualmente na storage atual
     */
    async todos(): Promise<Array<Produto>> {
        return this.itens();
    }

    /**
     * @param  {string} codigo do produto desejado
     * @returns Promise Produto encontrado
     */
    async produtoComCodigo(codigo: string): Promise<Produto | null> {
        let produtos = this.itens();
        return produtos.find(p => p.codigo === codigo) || null
    }

    /** Aumenta o estoque do produto desejado
     * @param  {string} codigo do produto
     * @param  {number} quantidade desejada de estoque
     */
    async aumentarEstoque(codigo: string, quantidade: number): Promise<void> {
        const produtos = this.itens();
        const produtoEncontradoIndex = produtos.findIndex(produto => produto.codigo === codigo);
        if(produtoEncontradoIndex === -1)
            throw new Error('Produto não encontrado!');
        else produtos[produtoEncontradoIndex].estoque += quantidade
        this.gravarItens(produtos)
    }

    /** Diminui o estoque do produto desejado
     * @param  {string} codigo do produto
     * @param  {number} quantidade desejada de estoque
     */
    async diminuirEstoque(codigo: string, quantidade: number): Promise<void> {
        const produtos = this.itens();
        const produtoEncontradoIndex = produtos.findIndex(produto => produto.codigo === codigo);
        if(produtoEncontradoIndex === -1)
            throw new Error('Produto não encontrado!');
        else produtos[produtoEncontradoIndex].estoque -= quantidade
        this.gravarItens(produtos)
    }

} 