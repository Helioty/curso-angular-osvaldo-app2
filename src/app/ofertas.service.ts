import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { ComoUsarOferta, Oferta, OndeFicaOferta } from "src/app/shared/oferta.model";

@Injectable()
export class OfertasService {
    private readonly baseUrl = 'http://localhost:3000';
    private readonly ofertasUrl = `${this.baseUrl}/ofertas`;
    private readonly comoUsarUrl = `${this.baseUrl}/como-usar`;
    private readonly ondeFicaUrl = `${this.baseUrl}/onde-fica`;

    constructor(private http: HttpClient) { }

    public getOfertas(): Observable<Oferta[]> {
        return this.http
            .get<Oferta[]>(`${this.ofertasUrl}`);
    }

    public getOfertasPorId(id: number): Observable<Oferta> {
        return this.http
            .get<Oferta[]>(`${this.ofertasUrl}?id=${id}`)
            .pipe(map(ofertas => ofertas[0]));
    }

    public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
        return this.http
            .get<Oferta[]>(`${this.ofertasUrl}?categoria=${categoria}`);
    }

    public getOfertasPorValorMax(max: number): Observable<Oferta[]> {
        return this.http
            .get<Oferta[]>(`${this.ofertasUrl}`)
            .pipe(map(ofertas => ofertas.filter(oferta => oferta.valor <= max)));
    }

    public getComoUsarOfertaPorId(id: number): Observable<string> {
        return this.http
            .get<ComoUsarOferta[]>(`${this.comoUsarUrl}?id=${id}`)
            .pipe(map(comoUsar => comoUsar[0]?.descricao ?? ''));
    }

    public getOndeFicaOfertaPorId(id: number): Observable<string> {
        return this.http
            .get<OndeFicaOferta[]>(`${this.ondeFicaUrl}?id=${id}`)
            .pipe(map(ondeFica => ondeFica[0]?.descricao ?? ''));
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http
            .get<Oferta[]>(`${this.ofertasUrl}?descricao_oferta_like=${termo}`)
            .pipe(
                tap({ next: (r) => console.log(r) }),
                // map(ofertas => ofertas)
            )
    }
}
