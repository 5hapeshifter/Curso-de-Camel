import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsariosDetalheComponent } from './usarios-detalhe.component';

describe('UsariosDetalheComponent', () => {
  let component: UsariosDetalheComponent;
  let fixture: ComponentFixture<UsariosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsariosDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsariosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
