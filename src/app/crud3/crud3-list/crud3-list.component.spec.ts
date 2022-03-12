import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud3ListComponent } from './crud3-list.component';

describe('Crud3ListComponent', () => {
  let component: Crud3ListComponent;
  let fixture: ComponentFixture<Crud3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crud3ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
