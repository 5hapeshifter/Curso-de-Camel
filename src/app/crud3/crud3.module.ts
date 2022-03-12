import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crud3RoutingModule } from './crud3-routing.module';
import { Crud3ListComponent } from './crud3-list/crud3-list.component';
import { Crud3FormComponent } from './crud3-form/crud3-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Crud3ListComponent,
    Crud3FormComponent
  ],
  imports: [
    CommonModule,
    Crud3RoutingModule,
    SharedModule
  ],
  exports: [
    Crud3FormComponent,
    Crud3ListComponent
  ]
})
export class Crud3Module { }
