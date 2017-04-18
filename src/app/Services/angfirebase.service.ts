import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';


@Injectable()
export class AngfirebaseService {

  constructor(public af: AngularFire) {
        // login to firebase
       this.af.auth.login({
		          provider: AuthProviders.Anonymous,
		          method: AuthMethods.Anonymous,
		      });
  }

  logout() {
    this.af.auth.logout();
  }

  list(url: string, query: Object) : FirebaseListObservable<any>
  {
      return this.af.database.list(url, query);
                             // .map(responseObj => responseObj.json() );
  }

  object(url: string, query: Object)
  {
      return this.af.database.object(url, query);
  }

}
