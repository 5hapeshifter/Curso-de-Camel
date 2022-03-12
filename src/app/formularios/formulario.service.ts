import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {




  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    
    
  }

  getCep(cep : number){
    return this.http.get("https://viacep.com.br/ws/" + cep)
  }



}
