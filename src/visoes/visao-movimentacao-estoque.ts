import { ItemMovimentacao } from '@/models/itemMovimentacao';

export class VisaoMovimentacaoEstoque {
   quantidade(): number {
      return Number((document.getElementById('quantidade') as HTMLInputElement)?.value || 0);
   }

   codigoProduto(): string {
      return (document.getElementById('codigo') as HTMLInputElement)?.value || '';
   }

   aoClicarEmAdicionar(evento: any): void { //TIPO DO EVENTO DEVE SER REFATORADO
      document.getElementById('adicionar')?.addEventListener('click', evento)
   }

   aoClicarEmEnviar(evento: any): void { //TIPO DO EVENTO DEVE SER REFATORADO
      document.getElementById('enviar')?.addEventListener('click', evento)
   }

   adicionarItem(numero: number, item: ItemMovimentacao): void {
      const corpo = document.querySelector('#itens tbody');
      const linha = document.createElement('tr');
      //TO DO Refatorar essas chamadas abaixo par auma função genérica
      const dadoNumeroItem = document.createElement('td');
      dadoNumeroItem.appendChild(document.createTextNode(numero.toString()));
      linha.appendChild(dadoNumeroItem);

      const col1 = document.createElement('td');
      dadoNumeroItem.appendChild(document.createTextNode(item.produto.descricao));
      linha.appendChild(col1);

      const col2 = document.createElement('td');
      dadoNumeroItem.appendChild(document.createTextNode(item.produto.codigo));
      linha.appendChild(col2);

      const col3 = document.createElement('td');
      dadoNumeroItem.appendChild(document.createTextNode(item.produto.estoque.toString()));
      linha.appendChild(col2);

      corpo?.appendChild(linha);
   }
}