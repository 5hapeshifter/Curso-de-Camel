import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getAll(offset : number, limit : number){
    return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=" + limit)
  }

  getOne( url : string ){
    return this.http.get(url)
  }
}
