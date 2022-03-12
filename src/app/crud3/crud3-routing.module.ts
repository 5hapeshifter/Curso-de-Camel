import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crud3ListComponent } from './crud3-list/crud3-list.component';

const routes: Routes = [
  { path: 'crud3-list', component: Crud3ListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Crud3RoutingModule { }
