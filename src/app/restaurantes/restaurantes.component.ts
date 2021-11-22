import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  restaurantes$!: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.restaurantes$ = this.ofertasService.getOfertasPorCategoria('restaurante')
  }

}
