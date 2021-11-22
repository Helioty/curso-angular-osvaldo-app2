export class Oferta {
    public id!: number;
    public categoria!: string;
    public titulo!: string;
    public descricao_oferta!: string;
    public anunciante!: string;
    public valor!: number;
    public destaque!: boolean;
    public imagens!: Array<{ url: string }>
}

export class Base {
    id!: number;
    descricao!: string;
}

export class ComoUsarOferta extends Base { }

export class OndeFicaOferta extends Base { }
