import { TestBed } from '@angular/core/testing';

import { WomanDressService } from './woman-dress.service';

describe('WomanDressService', () => {
  let service: WomanDressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomanDressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
