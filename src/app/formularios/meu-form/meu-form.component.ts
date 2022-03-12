import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  meuForm : FormGroup | any = null // formGruoup é um mecanismo que o Angular possui para ter diversas funções usadas em formulário como validação

  constructor(private cepService : CepService) { } // aqui estamos injetando o serviço para usálo no nosso método de busca de cep

  ngOnInit(): void {
    

    this.meuForm = new FormGroup( // FormGroup só aceita objetos, por isso criamos dentro dos parênteses
      {// form control é o que controla o campo que nós queremos, ou seja, para cada campo vamos criar um FormControl
        email : new FormControl ( null, [Validators.required, Validators.email, Validators.minLength(3)] ),// o primeiro parâmetro é referente se nós queremos que ele inicie com algum valor ou não e o segundo é referente aos validadores
        password : new FormControl ( null, [Validators.required] ),
        cep : new FormControl( null, [ Validators.required ] ),
        logradouro : new FormControl( null, [ Validators.required ] ),
        bairro : new FormControl( null, [ Validators.required ] ),
        localidade : new FormControl( null, [ Validators.required ] ),
        uf : new FormControl( null, [ Validators.required ] )
        
      }
    )

    console.log(this.meuForm)
  }

  onBuscarCep(){

    if ( this.meuForm.controls.cep.value.length == 8 && this.isSomenteNumero(this.meuForm.controls.cep.value)){

      this.cepService.getCep( this.meuForm.controls.cep.value )
      .subscribe(
        (data : any) => {
          console.log(data);
          this.meuForm.patchValue(
            data
          );
          // this.meuForm.patchValue(
          //   {
          //     logradouro : data.logradouro,
          //     cidade : data.localidade
          //   }
          // );
        },
        (error:any) => {
          console.log(error)
          alert("Erro ao consultar a API viacep")
        },
        () => {
          console.log("SEMPRE EXECUTA A 3ª ARROW FUNCTION!!!")// a 3ª arrow function se assemelha ao 'finally' do 'try/catch' do Java, ou seja, sempre será executada
        }
      );
    }

  }
  isSomenteNumero(value:any){
    return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }

}
