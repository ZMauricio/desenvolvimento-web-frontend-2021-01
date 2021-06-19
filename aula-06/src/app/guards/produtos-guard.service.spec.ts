import { TestBed } from '@angular/core/testing';

import { ProdutosGuardService } from './produtos-guard.service';

describe('ProdutosGuardService', () => {
  let service: ProdutosGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
