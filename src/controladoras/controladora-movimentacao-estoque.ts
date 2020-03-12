import { VisaoMovimentacaoEstoque } from '@/visoes/visao-movimentacao-estoque';
import { MovimentacaoEstoque } from '@/models/movimentacaoEstoque';

export class ControladoraMovimentacaoEstoque {

    private visao: VisaoMovimentacaoEstoque;
    //private movimentacaoEstoque: MovimentacaoEstoque = new MovimentacaoEstoque() TO DO classe de movimentação de estoque

    constructor() {
        this.visao
    }

    configurar() {
        this.visao.aoClicarEmAdicionar(this.adicionar)
        this.visao.aoClicarEmEnviar(this.enviar)
    }

    adicionar = () => {
        
    };

    enviar = () => {

    };
}