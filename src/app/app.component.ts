import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'meu-projeto-angular';

  empresa : string = 'BRQ';

  salario : number = 90;

  mostraMensagem(){
    let nome = 'Fabrizio'; // para declarar uma variável dentro de um método tem usar "let" 
  return nome;
  }

  meuClique(){
    console.log("Oi!")
    this.title = "oi"
  }

  onKeyUp(valorDigitado : string){
    console.log(valorDigitado)
  }
}
