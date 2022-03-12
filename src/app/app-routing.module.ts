import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloComponent } from './ciclo/ciclo.component';
//import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { PokemonGuardService } from './shared/services/pokemon-guard.service';

// Forma de carregamento sem lazyload
// const routes: Routes = [
//   { path: 'primeiro', component: PrimeiroComponent },
//   { path: '', component: PokemonListComponent }
// ];

const routes: Routes = [
  { path: 'primeiro', component: PrimeiroComponent },
  //a palavra chave loadChildren determina que isso só seja carregado quando for chamado
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) , canActivate : [PokemonGuardService] },
  { path: 'produtos-categorias', loadChildren: () => import('./produtos-categorias/produtos-categorias.module').then(m => m.ProdutosCategoriasModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
  { path: 'crud2', loadChildren: () => import('./crud2/crud2.module').then(m => m.Crud2Module) },
  { path: 'formularios', loadChildren: () => import('./formularios/formularios.module').then(m => m.FormulariosModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'ciclo', component: CicloComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
