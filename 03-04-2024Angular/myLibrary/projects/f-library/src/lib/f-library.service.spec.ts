import { TestBed } from '@angular/core/testing';

import { FLibraryService } from './f-library.service';

describe('FLibraryService', () => {
  let service: FLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
