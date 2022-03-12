import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//ESSE É O CATEGORIAS DA AULA
//ESSE É O CATEGORIAS DA AULA
//ESSE É O CATEGORIAS DA AULA
//ESSE É O CATEGORIAS DA AULA

@Injectable({
  providedIn: 'root'
})
export class Crud2Service {

  auth_token2 : string = 'f857a95527eb638fe09686c95613f185103e373bb806e8aa11366fd80d477bba'
  url2 = `https://gorest.co.in/public-api/categories`

  constructor(private http : HttpClient) { }

  getAll2(){
    return this.http.get( this.url2 )
  }
  
  getOne2( id : number ){
    return this.http.get(`${ this.url2 }/${ id }`)
  }

  save2(user : any){

    return this.http.post( this.url2, user, this.getHeader2() )
  }

  delete2( id : number ){

    return this.http.delete(`${this.url2}/${id}`, this.getHeader2() );
  }

  update2( id : number, user : any ){
    return this.http.patch( `${this.url2}/${id}`, user, this.getHeader2() )
  }

  private getHeader2(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth_token2}`
    })

    return { headers : headers }
  }
}
