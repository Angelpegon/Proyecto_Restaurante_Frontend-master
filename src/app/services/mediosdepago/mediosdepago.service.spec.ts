import { TestBed } from '@angular/core/testing';

import { MediosdepagoService } from './mediosdepago.service';

describe('MediosdepagoService', () => {
  let service: MediosdepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediosdepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
