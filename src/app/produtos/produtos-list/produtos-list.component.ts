import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos : any

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.getAll()
    
  }

  getAll(){
    this.produtoService.getAll()
    .subscribe(
      ( data ) => {
        this.produtos = data
      }
    )
  }

  delete( id : number ){
    this.produtoService.delete( id )
    .subscribe(
      ( ) => {
        let index = this.produtos.data.findIndex( ( x : any ) => x.id == id )
        this.produtos.splice( index, 1 )
      }
    )
  }

  getCategories( categorias: any ){

    let reponse :string = ``;
 
     if (categorias.length > 0){
 
       categorias.forEach( (el : any) => {
         reponse += `${el.name} ; `
       });
     }
     return reponse
 
   }

}
