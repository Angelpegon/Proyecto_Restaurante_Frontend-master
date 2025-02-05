import { TestBed } from '@angular/core/testing';

import { TipodepedidoService } from './tipodepedido.service';

describe('TipodepedidoService', () => {
  let service: TipodepedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodepedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
