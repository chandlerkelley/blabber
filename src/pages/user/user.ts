import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  imageURL

  constructor(public navCtrl: NavController,
  						private authService: AuthService) {

  }

  user: any;
  userTimeSince: string;

  takePicture(){
    Camera.getPicture()
    .then( (imageData) => {
      this.imageURL = imageData
    })
  }

  logout() {
  	this.authService.logout()
  	.then( (res) => {
  		console.log(res);
			this.navCtrl.setRoot(LoginPage);
  	})
  }

  timeSince(date) {

    let newDate: any = new Date();

    let seconds: number = Math.floor((newDate - date) / 1000);

    let interval: number = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

  ionViewDidLoad() {
    this.user = this.authService.returnCurrentUser();
    console.log(this.user);
    let userCreatedDate = Date.parse(this.user.createdDate);
    this.userTimeSince = this.timeSince(userCreatedDate);
  }

}
