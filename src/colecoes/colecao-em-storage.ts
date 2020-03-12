import { Produto } from '@/models/produto';

export class ColecaoEmStorage<T, S extends Storage = Storage> {

    //CLASSE QUE UTILIZA O PADRÃO DE PROJETO "TEMPLATE" PARA ABSTRAIR DIFERENTES TIPOS DE STORAGE
    public readonly storage: S = localStorage as S;
    constructor(private chave: string) {

    }

    async adicionar(item: T) : Promise<void> {
        let itens = await this.todos();
        itens.push(item);
        this.gravarItens(itens);
    }

    async todos(): Promise<Array<T>> {
        return this.itens();
    }

    protected itens(): Array<T> {
        const itensStr: string | null = this.storage.getItem(this.chave);
        let itens: Array<T> = new Array<T>();
        if(itensStr)
            itens = JSON.parse(itensStr) as Array<T>
        return itens
    }

    protected gravarItens(itens: Array<T>): void {
        this.storage.setItem(this.chave, JSON.stringify(itens));
    }

    /**
     * Faz a limpeza da storage atual, nessa classe ela e uma localStorage 
     */
    async esvaziar(): Promise<void> {
        this.storage.removeItem(this.chave)
    }
}