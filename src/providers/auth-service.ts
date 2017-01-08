import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../app/user';

@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  user: User;

	returnCurrentUser() {
		if(this.user) {
			return this.user;
		} else {
			return null;
		}
	};

	loginUser(credentials) {
		return new Promise(resolve => {
			this.http.post('https://bfapp-bfsharing.rhcloud.com/login', credentials)
			.subscribe(
				function(res: any) {
					this.user = res._body;
					resolve(this.user);
				},
				function(err) {
					resolve(err);
				}
			);
		})
	}

}
