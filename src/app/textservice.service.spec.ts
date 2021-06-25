import { TestBed } from '@angular/core/testing';

import { TextserviceService } from './textservice.service';

describe('TextserviceService', () => {
  let service: TextserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
