import { MovimentacaoEstoque } from "@/models/movimentacaoEstoque";

export interface ColecaoMovimentacaoEstoque {
   
   adicionar(movimentacaoEstoque: MovimentacaoEstoque): Promise<void>
   todos(query?: any): Promise<Array<MovimentacaoEstoque>>
   esvaziar(): Promise<void>

}