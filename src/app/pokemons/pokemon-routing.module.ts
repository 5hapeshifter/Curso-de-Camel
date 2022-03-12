import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  { path:'pokemon-list', component: PokemonListComponent }// Importante nomear os paths com o nome dos componentes para ficar mais claro quando usar o lazyload
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
