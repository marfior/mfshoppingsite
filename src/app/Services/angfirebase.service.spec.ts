/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngfirebaseService } from './angfirebase.service';

import {AngularFire,AngularFireAuth, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

class FakeAngularFire {
  auth: AngularFireAuth = <AngularFireAuth>{};

  public login()
  {
    return this.auth.login({
		          provider: AuthProviders.Anonymous,
		          method: AuthMethods.Anonymous,
		      });
  }
  
}

describe('AngfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngfirebaseService, 
      { provide: AngularFire, useClass: FakeAngularFire } ],
    });
  });

  /*it('should ...', inject([AngfirebaseService, AngularFire], (service: AngfirebaseService, af: AngularFire) => {
    expect(service).toBeTruthy();
  }));*/
});
