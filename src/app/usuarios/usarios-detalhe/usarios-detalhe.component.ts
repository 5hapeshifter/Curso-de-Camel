import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-usarios-detalhe',
  templateUrl: './usarios-detalhe.component.html',
  styleUrls: ['./usarios-detalhe.component.css']
})
export class UsariosDetalheComponent implements OnInit {

  @Input() usuariosFilho : any ;// aqui estamos informando com o "@Input" que a variável usuários filho receberá valores do componente Pai.
  @Output() usuarioEmitter = new EventEmitter<string>()//variável responsável de emitir eventos do filho para o pai, sempre importar do Angular/core

  @Output() usuarioSalvarEmitter = new EventEmitter<any>()

  constructor() { 

    console.log(this.usuariosFilho)

  }

  ngOnInit(): void {

    console.log(this.usuariosFilho)
    this.usuarioEmitter.next(" Oiii")
  }

  clickButton(){
    this.usuarioEmitter.next(" Oiii")// o next emite uma mensagem, 
  }

  onSalvarClick( nome : string, email: string ){
    console.log(this.usuariosFilho)

    let obj = { 
      id : this.usuariosFilho.id, 
      nome: nome, 
      email : email
    }
    console.log(obj)
    this.usuarioSalvarEmitter.next(obj)
  }

}
