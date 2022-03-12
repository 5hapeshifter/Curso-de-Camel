import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessagesComponent } from './components/error-field-messages/error-field-messages.component';
import { CpfPipe } from './pipes/cpf.pipe';



@NgModule({
  declarations: [
    ErrorFieldMessagesComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule// aqui estamos importando o módulo utilizado para validações e outras funções
  ],
  exports : [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ErrorFieldMessagesComponent,
    
    CpfPipe
  ]
  
})
export class SharedModule { }
