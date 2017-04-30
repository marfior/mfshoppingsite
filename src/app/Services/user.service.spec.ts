/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { AngfirebaseService } from '../Services/angfirebase.service';

let fakeAngularFireService = jasmine.createSpyObj('AngfirebaseService',['list','object','getQueryByChild','getQueryByKey']);

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService,
      { provide: AngfirebaseService, useValue: fakeAngularFireService }]
    });
  });

  it('should inject', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
