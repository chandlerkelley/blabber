import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

@Component({
	selector: 'modal-login',
	templateUrl: 'login.html'
})
export class LoginModal {
	
	constructor(private viewCtrl: ViewController,
							private params: NavParams,
							private authService: AuthService) {
	}

	credentials: any = {};

	loginUser(): void {
		this.authService.loginUser(this.credentials)
		.then(res => {
			console.log(res);
			this.viewCtrl.dismiss();
		})
	}

	dismiss(data) {
		this.viewCtrl.dismiss(data);
	}
}