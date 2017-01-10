import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../app/user';

@Injectable()
export class AuthService {

	user: User;

	test: string;

	setTest(string) {
		this.test = string;
	}

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

	returnCurrentUser() {
		return this.user;
	};

	loginUser(credentials) {
		return new Promise(resolve => {
			this.http.post('https://bfapp-bfsharing.rhcloud.com/login', credentials, { withCredentials: true })
			.subscribe(
				(res: any) => {
					console.log(res);
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
			this.http.get('https://bfapp-bfsharing.rhcloud.com/user', { withCredentials: true })
			.subscribe(
				function(res) {
					console.log(res);
					resolve(true);
				},
				function(err) {
					console.log(err);
					resolve(false);
				}
			)
		})
	}

	getFeed() {
		return new Promise(resolve => {
			this.http.get('http://bfapp-bfsharing.rhcloud.com/feed', { withCredentials: true })
			.subscribe(
				(res) => {
					resolve(res);
				})
		})
	}

}
