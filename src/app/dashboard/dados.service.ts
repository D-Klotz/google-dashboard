import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observable } from '../../../node_modules/rxjs';

@Injectable()
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ];

  constructor() { }

  /**
   * Retorna um observable com os dados
   * a serem exibidos no grafico
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(obs => {
      obs.next(this.dados);
      obs.complete();
    });
  }
}
