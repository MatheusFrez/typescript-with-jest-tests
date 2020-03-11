import { ColecaoEmStorage } from './colecao-em-storage';
import { MovimentacaoEstoque } from '@/models/movimentacaoEstoque';

export class ColecaoMovimentacaoEstoqueEmLocalStorage extends ColecaoEmStorage<MovimentacaoEstoque> 
   implements ColecaoMovimentacaoEstoqueEmLocalStorage {

      constructor() {
         super('mov-estoque');
      }

}