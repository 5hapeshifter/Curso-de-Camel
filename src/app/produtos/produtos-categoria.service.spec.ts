import { TestBed } from '@angular/core/testing';

import { ProdutosCategoriaService } from './produtos-categoria.service';

describe('ProdutosCategoriaService', () => {
  let service: ProdutosCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
