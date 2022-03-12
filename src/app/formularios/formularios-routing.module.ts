import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuFormComponent } from './meu-form/meu-form.component';

const routes: Routes = [
  { path:'meuform', component: MeuFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
