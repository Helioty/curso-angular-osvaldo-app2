import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // retorno ao termino Oferta[]
      .pipe(
        debounceTime(1000), // executa a acao do switchMap apos 1 segundo
        distinctUntilChanged()  // para fazer pesquisas distintas
      )
      .pipe(switchMap((termo: string) => {
        if (termo.trim() === '') {
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }))
      .pipe(catchError((err: any) => {
        return of<Oferta[]>([])
      }))
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
