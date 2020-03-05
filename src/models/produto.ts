export class Produto {
    private id: number
    public codigo: string
    private descricao: string
    public estoque: number

    constructor(id: number, codigo: string, descricao: string, estoque: number) {
        this.id = id
        this.codigo = codigo
        this.descricao = descricao
        this.estoque = estoque
    }
}