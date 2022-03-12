import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud3FormComponent } from './crud3-form.component';

describe('Crud3FormComponent', () => {
  let component: Crud3FormComponent;
  let fixture: ComponentFixture<Crud3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crud3FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
