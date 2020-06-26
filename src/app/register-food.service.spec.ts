import { TestBed } from '@angular/core/testing';

import { RegisterFoodService } from './register-food.service';

describe('RegisterFoodService', () => {
  let service: RegisterFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
