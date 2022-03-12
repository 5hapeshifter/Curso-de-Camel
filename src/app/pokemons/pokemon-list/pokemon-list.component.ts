import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  //private http = new HttpClient();

  pokemons : any = null;
  pokemonSelecionado : any = null;
  offset : number = 0
  limit : number = 5

  constructor(private pokemonService : PokemonService, private ac : ActivatedRoute) { }

  // arrow functions =>
  ngOnInit(): void {//sempre que usarmos o componente o Angular executa o ngOnInit depois de do construtor

      this.ac.queryParams.subscribe( (params) => {// aqui estamos captando todos parâmetros que forem passados na URL, ou seja, seremos notificado sempre que chegar alguma URL com parametro
        console.log(params)
      } )

      this.pokemonService.getAll(this.offset, this.limit)
        .subscribe(  (x) => {
        this.pokemons = x;
        console.log(this.pokemons)
      } );

  }

  selecionarPokemon( url : string ){

    this.pokemonService.getOne(url)
      .subscribe(  (x) => {
        this.pokemonSelecionado = x;
        console.log(this.pokemonSelecionado)

      } );
  }

  proximaPagina(){

    this.offset = this.offset + this.limit
    this.pokemonService.getAll(this.offset, this.limit).subscribe( (data : any) => {
      this.pokemons = data
    } )
  }
  anteriorPagina(){

    if((this.offset = this.offset - this.limit) >= this.limit){
    this.pokemonService.getAll(this.offset, this.limit).subscribe( (data : any) => {
      this.pokemons = data
      } )
    } else{
      this.pokemonService.getAll(this.offset = 0, this.limit = 5).subscribe( (data : any) => {
        this.pokemons = data
      } )
    }
  }

}
