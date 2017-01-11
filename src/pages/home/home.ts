import { Component } from '@angular/core';
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

  feed: any[];

  logUser() {
  	console.log(this.authService.returnCurrentUser());
  }

  showPost() {
  	this.navCtrl.push(PostPage)
  }

  getFeed() {
    this.authService.getFeed()
    .then( (data: any) => {
      this.feed = data;
    });
  }

  ionViewDidLoad() {
    this.getFeed();
  }

}
