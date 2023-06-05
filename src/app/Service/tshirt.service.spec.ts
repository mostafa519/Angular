import { TestBed } from '@angular/core/testing';

import { TShirtService } from './tshirt.service';

describe('TShirtService', () => {
  let service: TShirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TShirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
