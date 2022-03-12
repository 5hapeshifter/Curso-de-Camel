import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud2FormComponent } from './crud2-form.component';

describe('Crud2FormComponent', () => {
  let component: Crud2FormComponent;
  let fixture: ComponentFixture<Crud2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crud2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
