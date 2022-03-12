import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crud2ListComponent } from './crud2-list/crud2-list.component';
import { Crud2FormComponent } from './crud2-form/crud2-form.component';

const routes: Routes = [
  { path: 'crud2-list', component: Crud2ListComponent},
  { path: 'crud2-form', component: Crud2FormComponent},
  { path: 'crud2-form/:id', component: Crud2FormComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Crud2RoutingModule { }
