import { Produto } from '@/models/produto';

const CHAVE_STORAGE = 'movimentacao'

export class ColecaoMovimentacaoProdutoLocalStorage implements ColecaoMovimentacaoProdutoLocalStorage {

    private storage: Storage = window.localStorage;

    /**
     * @returns Array de produtos presente atualmente na storage atual
     */
    async todos(): Promise<Array<Produto>> {
        return this.produtos();
    }

    /**
     * @returns Array<Produtos> Todos os produtos na storage atual
     */
    private produtos(): Array<Produto> {
        return JSON.parse(this.storage.getItem(CHAVE_STORAGE)) || new Array<Produto>()
    }

    /**
     * Faz a limpeza da storage atual, nessa classe ela e uma localStorage 
     */
    async esvaziar(): Promise<void> {
        this.storage.clear();
    }

    /**
     * Adiciona um produto a storage atual da classe
     * @param  {Produto} produto a ser adicionado na storage atual
     */
    async adicionar(produto: Produto): Promise<void> {
        const produtosString: string | null = this.storage.getItem(CHAVE_STORAGE) //TUDO QUE VEM DA STORAGE VEM COMO STRING DEVEMOS DESSERIALIZAR ELA
        let produtos: Array<Produto> = JSON.parse(produtosString) as Array<Produto> || new Array<Produto>();
        produtos.push(produto)
        this.storage.setItem(CHAVE_STORAGE, JSON.stringify(produtos)) //SERIALIZANDO PRODUTOS PARA GUARDAR NA STORAGE
    }

    /**
     * @param  {Array<Produto>} produtos a serem gravados na storage
     */
    private async gravarProdutos(produtos: Array<Produto>): Promise<void> {
        this.storage.setItem(CHAVE_STORAGE, JSON.stringify(produtos));
    }

    /**
     * @param  {string} codigo do produto desejado
     * @returns Promise Produto encontrado
     */
    async produtoComCodigo(codigo: string): Promise<Produto | null> {
        let produtos = this.produtos();
        return produtos.find(p => p.codigo === codigo) || null
    }

    /** Aumenta o estoque do produto desejado
     * @param  {string} codigo do produto
     * @param  {number} quantidade desejada de estoque
     */
    async aumentarEstoque(codigo: string, quantidade: number): Promise<void> {
        const produtos = this.produtos();
        const produtoEncontradoIndex = produtos.findIndex(produto => produto.codigo === codigo);
        if(produtoEncontradoIndex === -1)
            throw new Error('Produto não encontrado!');
        else produtos[produtoEncontradoIndex].estoque += quantidade
        this.gravarProdutos(produtos)
    }

    /** Diminui o estoque do produto desejado
     * @param  {string} codigo do produto
     * @param  {number} quantidade desejada de estoque
     */
    async diminuirEstoque(codigo: string, quantidade: number): Promise<void> {
        const produtos = this.produtos();
        const produtoEncontradoIndex = produtos.findIndex(produto => produto.codigo === codigo);
        if(produtoEncontradoIndex === -1)
            throw new Error('Produto não encontrado!');
        else produtos[produtoEncontradoIndex].estoque -= quantidade
        this.gravarProdutos(produtos)
    }

} 