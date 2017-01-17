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

  photo

  constructor(public navCtrl: NavController,
  						private authService: AuthService) {

  }

  user: any;
  userTimeSince: string;
  changingPic: boolean = false;
  previewingPic: boolean = false;

  toggleChangingPic() {
    if (this.changingPic) {
      this.changingPic = false;
    } else {
      this.changingPic = true;
    }
  }

  uploadPicture(){
    Camera.getPicture({
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
      quality: 50,
      targetHeight: 200,
      targetWidth: 200,
      allowEdit: true
    })
    .then( (imageData) => {
      this.photo = imageData;
      this.previewingPic = true;
    })
  }

  takePicture(){
    Camera.getPicture({
      quality: 50,
      destinationType : Camera.DestinationType.FILE_URI, 
      targetHeight: 200,
      targetWidth: 200,
      allowEdit: true
    })
    .then( (imageData) => {
      this.photo = imageData;
      this.previewingPic = true;
    })
  }

  clearPhoto() {
    this.photo = {};
    this.previewingPic = false;
  }

  submitPhoto() {
    console.log(this.photo);
    this.authService.submitPhoto(this.photo)
    .then( (res) => {
      console.log(res);
      this.resetUser();
      this.changingPic = false;
      this.previewingPic = false;
    })
  }

  logout() {
  	this.authService.logout()
  	.then( (res) => {
  		console.log(res);
      window.location.reload();
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

  resetUser() {
    this.user = this.authService.returnCurrentUser();
    let userCreatedDate = Date.parse(this.user.createdDate);
    this.userTimeSince = this.timeSince(userCreatedDate);
  }

  ionViewDidLoad() {
    this.resetUser();
  }

}
