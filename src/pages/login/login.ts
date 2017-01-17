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
		console.log("Code has been updated");
	}

	credentials: any = {};

	loginUser(): void {
		this.authService.loginUser(this.credentials)
		.then((res: any) => {
			console.log(res);
			
			if(res.status != 400) {
				this.navCtrl.setRoot(TabsPage);
			}
		})
	}
}