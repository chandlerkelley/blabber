import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';;
import { PostViewPage } from '../post-view/post-view'

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

  showPost(postId) {
    for (let post of this.feed) {
      if (post._id === postId) {
        this.navCtrl.push(PostViewPage, {
          post: post
        })
      }
    }
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
