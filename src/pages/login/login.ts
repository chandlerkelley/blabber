import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { TabsPage } from '../home/home';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	
	constructor(private navCtrl: NavController,
							private authService: AuthService) {
	}

	credentials: any = {};

	loginUser(): void {
		this.authService.loginUser(this.credentials)
		.then(res => {
			console.log(res);
			this.navCtrl.setRoot(TabsPage);
		})
	}

	dismiss(data) {
		this.viewCtrl.dismiss(data);
	}
}