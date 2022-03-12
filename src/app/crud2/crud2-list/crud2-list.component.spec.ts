import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud2ListComponent } from './crud2-list.component';

describe('Crud2ListComponent', () => {
  let component: Crud2ListComponent;
  let fixture: ComponentFixture<Crud2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crud2ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
