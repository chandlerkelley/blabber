import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(public navCtrl: NavController,
  						private authService: AuthService) {
  }

  user: any;

  post: string;

  submitPost() {
    if (this.post && this.post.length > 0) {
      let postObj = {
        username: this.user.username,
        postText: this.post
      }
      this.authService.submitPost(postObj)
      .then( (res) => {
        console.log(res);
        this.navCtrl.parent.select(0);
      })
    }
  }

  ionViewWillEnter() {
  	this.user = this.authService.returnCurrentUser();
  }

}
