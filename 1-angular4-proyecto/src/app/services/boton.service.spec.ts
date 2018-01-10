import { TestBed, inject } from '@angular/core/testing';

import { BotonServiceService } from './boton-service.service';

describe('BotonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotonServiceService]
    });
  });

  it('should be created', inject([BotonServiceService], (service: BotonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
