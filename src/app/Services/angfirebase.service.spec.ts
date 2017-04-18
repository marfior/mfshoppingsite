/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngfirebaseService } from './angfirebase.service';

describe('AngfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngfirebaseService]
    });
  });

  it('should ...', inject([AngfirebaseService], (service: AngfirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
