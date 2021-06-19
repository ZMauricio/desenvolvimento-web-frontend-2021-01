import { TestBed } from '@angular/core/testing';

import { ClientesGuardService } from './clientes-guard.service';

describe('ClientesGuardService', () => {
  let service: ClientesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
