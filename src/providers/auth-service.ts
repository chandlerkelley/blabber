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

	loginUser() {
		return new Promise(resolve => {
			this.http.get('https://bfapp-bfsharing.rhcloud.com/test')
			.subscribe(
				function(res) {
					resolve(res);
				},
				function(err) {
					console.log(err);
				}
			);
		})
	}

}
