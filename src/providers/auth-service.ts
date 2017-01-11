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
			.map(res => res.json())
			.subscribe(
				(data) => {
					console.log(data);
					this.user = data;
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
			.map(res => res.json())
			.subscribe(
				(data) => {
					this.user = data;
					resolve(true);
				},
				(err) => {
					console.log(err);
					resolve(false);
				}
			)
		})
	}

	getFeed() {
		return new Promise(resolve => {
			this.http.get('http://bfapp-bfsharing.rhcloud.com/feed', { withCredentials: true })
      .map(res => res.json())
			.subscribe(
				(data) => {
					resolve(data);
				})
		})
	}

}
