import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud3-list',
  templateUrl: './crud3-list.component.html',
  styleUrls: ['./crud3-list.component.css']
})
export class Crud3ListComponent implements OnInit {

  usuarios3 : any 
  url3 : any = 'https://gorest.co.in/public-api/categories'
  auth_token3 : string = 'f857a95527eb638fe09686c95613f185103e373bb806e8aa11366fd80d477bba'

  constructor( private http : HttpClient) { }

  ngOnInit(): void {
    this.getAll3()

  }

  getHeaders3() {
    let headers3 = new HttpHeaders({
    'Authorization': `Bearer ${this.auth_token3}`
    })
    return { headers : headers3 }
  }

  getAll3(){ // 
    this.http.get( this.url3 )
      .subscribe(
        ( data ) => {
          this.usuarios3 = data
        }
      )

  }
  
  delete3( id : number ){
    console.log(this.url3, id)
    this.http.delete( `${this.url3}/${id}`, this.getHeaders3() )
      .subscribe(
        ( ) => {
          //this.getAll()
          
          // for(let i = 0; i < this.categorias.data.length; i++){
            
          //   if (this.categorias.data[i].id == id){      
          //     this.categorias.data.splice(i,1);
          //   }
          // }

          let i = this.usuarios3.data.findIndex( (x : any) => x.id == id );
          this.usuarios3.data.splice(i,1);
        }
      )
  }

}
