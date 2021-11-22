import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  diversao$!: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.diversao$ = this.ofertasService.getOfertasPorCategoria('diversao');
  }

}
