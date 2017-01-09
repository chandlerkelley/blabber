import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';;
import { PostPage } from '../post/post'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  						private authService: AuthService) {

  };

  logUser() {
  	console.log(this.authService.returnCurrentUser());
  }

  showPost() {
  	this.navCtrl.push(PostPage)
  }

  showFeed() {
    console.log("showFeed function");
    this.authService.getFeed()
    .then( (res) => {
      console.log(res);
    })
  }

}
