export class Produto {
    private id: number
    private codigo: string
    private descricao: string
    private estoque: number

    constructor(id: number, codigo: string, descricao: string, estoque: number) {
        this.id = id
        this.codigo = codigo
        this.descricao = descricao
        this.estoque = estoque
    }
}