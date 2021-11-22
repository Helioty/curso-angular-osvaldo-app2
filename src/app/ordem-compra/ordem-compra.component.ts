import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controle de validacao dos campos
  public enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public formaPagamentoValido!: boolean

  constructor() {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //valido se a string for maior que 3
    if(this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  public atualizaFormaPagamento(formaPagmento: string): void {
    this.formaPagamento = formaPagmento;
    console.log(this.formaPagamento);
  }
}
