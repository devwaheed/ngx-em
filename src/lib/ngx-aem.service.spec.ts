import { TestBed } from '@angular/core/testing';

import { NgxAemService } from './ngx-aem.service';

describe('NgxAemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAemService = TestBed.get(NgxAemService);
    expect(service).toBeTruthy();
  });
});
