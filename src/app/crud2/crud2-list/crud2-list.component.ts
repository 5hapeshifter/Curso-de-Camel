import { Component, OnInit } from '@angular/core';
import { Crud2Service } from '../crud2.service';


@Component({
  selector: 'app-crud2-list',
  templateUrl: './crud2-list.component.html',
  styleUrls: ['./crud2-list.component.css']
})
export class Crud2ListComponent implements OnInit {

  
  usuarios2 : any = null;

  constructor( private crudService2 : Crud2Service) { }

  ngOnInit(): void {
    this.getAll2()
  }

  getAll2(){
    this.crudService2.getAll2()
    .subscribe(
      (data) => {
        this.usuarios2 = data
      }
    )
  }

  onDelete2 ( id : number ){
    this.crudService2.delete2 ( id )
      .subscribe(
        (data) => {
          this.getAll2()
        }
      );
  }
}
