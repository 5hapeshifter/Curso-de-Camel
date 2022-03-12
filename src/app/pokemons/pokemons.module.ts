import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component'
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetalheComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetalheComponent
  ]
})
export class PokemonsModule { }
