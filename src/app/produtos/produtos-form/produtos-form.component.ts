import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crud2Service } from 'src/app/crud2/crud2.service';
import { ProdutoService } from '../produto.service';
import { ProdutoCategoriaService } from '../produtos-categoria.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  meuForm : FormGroup | any = null
  categorias : any

  constructor( 
    private formBuilder : FormBuilder, 
    private produtoService : ProdutoService,
    private categoriaService : Crud2Service,
    private produtoCategoriaService : ProdutoCategoriaService
    ) { }

    ngOnInit(): void {
      this.createForm();
      this.getAllCategorias();
    }
  
    private getAllCategorias(){
      this.categoriaService.getAll2()
        .subscribe(
          (data)=> {
            this.categorias = data;
          }
        );
    }
  
    private createForm(){
      this.meuForm = this.formBuilder.group(
        {
          name : [null, [Validators.required]],
          price : [null, [Validators.required]],
          status : [null, [Validators.required]],
          description : [null, [Validators.required]],
          image : [null, [Validators.required]],
          categories : [null, [Validators.required]],
        }
      );
    }
  
    public onSubmit(){
  
      this.produtoService.save(this.meuForm.value)
        .subscribe(
          (response : any) => {
            console.log(response)
            let produto_id = response.data.id;
            let categoria_id = this.meuForm.get('categories').value;
            console.log (produto_id, categoria_id)
  
            this.produtoCategoriaService.save(produto_id, categoria_id)
              .subscribe(
                () => {
                  console.log ("Salvou produto-categoria com sucesso")
                }
              )
          }
        );
    }
}
