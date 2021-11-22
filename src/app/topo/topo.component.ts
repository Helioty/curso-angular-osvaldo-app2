import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void { }

  pesquisa(termo: string) {
    console.log(termo)
    this.ofertasService.pesquisaOfertas(termo).subscribe()
  }

}
