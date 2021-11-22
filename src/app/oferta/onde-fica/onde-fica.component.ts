import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    // firstValueFrom(
    //   this.ofertasService.getOndeFicaOfertaPorId(
    //     this.route.parent?.snapshot.params['id']
    //   )
    // ).then(descricao => this.ondeFica = descricao)
    this.route.parent?.params.subscribe({
      next: (params) => {
        firstValueFrom(
          this.ofertasService.getOndeFicaOfertaPorId(
            params['id']
          )
        ).then(descricao => this.ondeFica = descricao)
      }
    })
  }

}
