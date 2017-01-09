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
		return this.user;
	};

	loginUser(credentials) {
		return new Promise(resolve => {
			this.http.post('https://bfapp-bfsharing.rhcloud.com/login', credentials)
			.subscribe(
				(res: any) => {
					this.user = res._body;
					resolve(this.user);
				},
				(err) => {
					resolve(err);
				}
			);
		})
	}

	isLoggedIn() {
		return new Promise(resolve => {
			this.http.get('https://bfapp-bfsharing.rhcloud.com/user')
			.subscribe(
				function(res) {
					console.log(res);
					return true;
				},
				function(err) {
					console.log(err);
					return false;
				}
			)
		})
	}

}
