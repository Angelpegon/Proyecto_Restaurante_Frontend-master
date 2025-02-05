import { TestBed } from '@angular/core/testing';

import { PlatosxpedidoService } from './platosxpedido.service';

describe('PlatosxpedidoService', () => {
  let service: PlatosxpedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosxpedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
