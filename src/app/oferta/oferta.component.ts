import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor(
    private rota: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    // this.rota.params.subscribe({
    //   next: (value: any) => {
    //     console.log(value)
    //     firstValueFrom(
    //       this.ofertasService.getOfertasPorId(Number(value.id))
    //     ).then(off => this.oferta = off)
    //   },
    //   error: (err: any) => { console.log(err) },
    //   complete: () => {} 
    // });

    lastValueFrom(
      this.ofertasService.getOfertasPorId(Number(this.rota.snapshot.params['id']))
    ).then(off => this.oferta = off)
  }

}
