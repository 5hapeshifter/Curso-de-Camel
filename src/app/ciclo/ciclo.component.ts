import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-ciclo",
  templateUrl: "./ciclo.component.html",
  styleUrls: ["./ciclo.component.css"]
})
export class CicloComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {
    this.log("constructor");
  }

  ngOnChanges() {
    this.log("ngOnChanges");
  }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngDoCheck() {
    this.log("ngDoCheck");
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }

  private log(ciclo: string) {
    console.log(ciclo);
  }
}

