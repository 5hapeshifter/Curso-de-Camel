import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsariosDetalheComponent } from './usarios-detalhe/usarios-detalhe.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsariosDetalheComponent
    
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  exports: [
    UsuarioListComponent
  ]
})
export class UsuariosModule { }
