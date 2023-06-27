import { TestBed } from '@angular/core/testing';

import { filmeService } from './filme.service';

describe('filmeService', () => {
  let service: filmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(filmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
