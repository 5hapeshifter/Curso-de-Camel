import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';

const routes: Routes = [
  { path: 'produto-list', component: ProdutosListComponent},
  { path: 'produto-form', component: ProdutosFormComponent},
  { path: 'produto-form/:id', component: ProdutosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
