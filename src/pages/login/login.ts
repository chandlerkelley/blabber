import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

@Component({
	selector: 'modal-login',
	templateUrl: 'login.html',
	providers: [AuthService]
})
export class LoginModal {
	
	constructor(private viewCtrl: ViewController,
							private params: NavParams,
							private authService: AuthService) {
	}

	user: {};

	loginUser(): void {
		this.authService.loginUser()
		.then(res => {
			console.log(res);
		})
	}

	dismiss(data) {
		this.viewCtrl.dismiss(data);
	}
}