import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Crud2Service } from '../crud2.service';

@Component({
  selector: 'app-crud2-form',
  templateUrl: './crud2-form.component.html',
  styleUrls: ['./crud2-form.component.css']
})
export class Crud2FormComponent implements OnInit {

  meuForm2 : FormGroup | any = null
  isEdicao2 : Boolean = false
  id2 : number = 0

  constructor(
    private formBuilder : FormBuilder, 
    private crud2Service : Crud2Service,
    private router: Router,
    private activatedRoute : ActivatedRoute 
  ) { }

  ngOnInit(): void {

    this.meuForm2 = this.formBuilder.group(
      {
        name : [null, [Validators.required]],
        description : [null, [Validators.required]],
        status : [null, [Validators.required]]
      }
    )

    this.activatedRoute.params // aqui estamos captando os dados obrigatórios das rotas, estamos usando o query param. Usamos o query params quando há dados após o operador elvis '?'.
    .subscribe(
      ( param ) => {
        console.log(param)
        // Edição
        if ( param.id ){
          this.isEdicao2 = true
          this.id2 = param.id
          this.crud2Service.getOne2( this.id2 ).subscribe(
            ( resp : any ) => {
              console.log( resp )
              this.meuForm2.patchValue( resp.data )
            }
          )

          // Criação
        } else {
          this.isEdicao2 = false
        }

      }
    )
    
  }

  onSubmit(){
    console.log(this.meuForm2)

    // Verificando se é edição
    if (this.isEdicao2){
      this.crud2Service.update2( this.id2, this.meuForm2.value ).
        subscribe(
          (data) => {
            this.router.navigate(['/crud2/crud2-list'])
          }
        )
    }
    else{

      this.crud2Service.save2(this.meuForm2.value)
      .subscribe(
        (data) => {
          console.log(data)
          this.meuForm2.reset();
          this.router.navigate(['/crud2/crud2-list'])
        }
      );
    }
  }

}
