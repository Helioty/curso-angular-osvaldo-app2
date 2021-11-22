import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    // firstValueFrom(
    //   this.ofertasService.getComoUsarOfertaPorId(
    //     this.route.parent?.snapshot.params['id']
    //   )
    // ).then(descricao => this.comoUsar = descricao)
    this.route.parent?.params.subscribe({
      next: (params) => {
        firstValueFrom(
          this.ofertasService.getComoUsarOfertaPorId(
            params['id']
          )
        ).then(descricao => this.comoUsar = descricao)
      }
    })
  }

}
