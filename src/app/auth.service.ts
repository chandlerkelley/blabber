import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {
	user: User;

	returnCurrentUser() {
		if(this.user) {
			return this.user;
		} else {
			return null;
		}
	};

	loginUser(credentials) {

	}
}