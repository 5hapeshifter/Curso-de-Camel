import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crud2RoutingModule } from './crud2-routing.module';
import { Crud2ListComponent } from './crud2-list/crud2-list.component';
import { Crud2FormComponent } from './crud2-form/crud2-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Crud2ListComponent,
    Crud2FormComponent
  ],
  imports: [
    CommonModule,
    Crud2RoutingModule,
    SharedModule
  ],
  exports: [
  
  ]
})
export class Crud2Module { }
