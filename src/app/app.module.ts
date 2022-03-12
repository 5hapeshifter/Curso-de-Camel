import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
//import { UsuariosModule } from './usuarios/usuarios.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { PokemonsModule } from './pokemons/pokemons.module';
//import { FormulariosModule } from './formularios/formularios.module';
import { SharedModule } from './shared/shared.module';
//import { CrudModule } from './crud/crud.module';
//import { Crud2Module } from './crud2/crud2.module';
import { Crud3Module } from './crud3/crud3.module';
import { CicloComponent } from './ciclo/ciclo.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    CicloComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //UsuariosModule,
    NgbModule,
    //PokemonsModule, //NÃO PODEMOS MAIS IMPORTAR OS MÓDULOS POR CAUSA DO LAZYLOAD
    //FormulariosModule,
    SharedModule,
    //CrudModule,
    //Crud2Module,
    Crud3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
