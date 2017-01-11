import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { TabsPage } from '../tabs/tabs';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	
	constructor(private navCtrl: NavController,
							private authService: AuthService) {
	}

	ngOnInit() {
		console.log("OnInit function is working");
		if (this.authService.isLoggedIn()) {
			this.navCtrl.setRoot(TabsPage);
		} 
	}

	credentials: any = {};

	loginUser(): void {
		this.authService.loginUser(this.credentials)
		.then(res => {
			console.log(res);
			this.navCtrl.setRoot(TabsPage);
		})
	}
}