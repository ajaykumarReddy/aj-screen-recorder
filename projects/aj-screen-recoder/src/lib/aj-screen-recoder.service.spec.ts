import { TestBed } from '@angular/core/testing';

import { AjScreenRecoderService } from './aj-screen-recoder.service';

describe('AjScreenRecoderService', () => {
  let service: AjScreenRecoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjScreenRecoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
