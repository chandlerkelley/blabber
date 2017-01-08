import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'modal-login',
	templateUrl: 'login.html'
})
export class LoginModal {
	
	constructor(private viewCtrl: ViewController, private params: NavParams) {
	}

	user: {};

	loginUser(): void {
		console.log("Trying to log in");
	}

	dismiss(data) {
		this.viewCtrl.dismiss(data);
	}
}