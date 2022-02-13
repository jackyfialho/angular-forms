import { TestBed } from '@angular/core/testing';

import { AutentitacaoService } from './autentitacao.service';

describe('AutentitacaoService', () => {
  let service: AutentitacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentitacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
