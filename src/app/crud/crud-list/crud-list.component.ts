import { Component, OnInit } from '@angular/core';
import { GoRestUserModel } from 'src/app/shared/models/go-rest.user.mode';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  usuarios? : GoRestUserModel;

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.crudService.getAll()
    .subscribe(
      (data) => {
        this.usuarios = data
      }
    )
  }

  onDelete ( id : number | undefined ){
    this.crudService.delete ( id )
      .subscribe(
        (data) => {
          this.getAll()
        }
      );
  }

}
