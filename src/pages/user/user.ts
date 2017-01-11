import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController,
  						private authService: AuthService) {

  }

  logout() {
  	this.authService.logout()
  	.then( (res) => {
  		console.log(res);
			this.navCtrl.setRoot(LoginPage);
  	})
  }

}
