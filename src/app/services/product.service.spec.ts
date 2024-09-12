import { TestBed } from '@angular/core/testing';

import { ProductserviceService } from './product.service';

describe('ProductserviceService', () => {
  let service: ProductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
