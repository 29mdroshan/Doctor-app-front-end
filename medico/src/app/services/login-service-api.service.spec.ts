import { TestBed } from '@angular/core/testing';

import { LoginServiceApiService } from './login-service-api.service';

describe('LoginServiceApiService', () => {
  let service: LoginServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
