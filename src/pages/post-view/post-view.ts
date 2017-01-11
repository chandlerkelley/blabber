import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-post-view',
  templateUrl: 'post-view.html'
})
export class PostViewPage {

  constructor(public navCtrl: NavController,
  						public navParams: NavParams,
  						private authService: AuthService) {

  };

  post: any;

  comment: string;

  renewPost() {
    this.authService.getFeed()
    .then( (posts: any[]) => {
      for (let post of posts) {
        if (post._id === this.post._id) {
          this.post = post;
        }
      }
    })
  }

  submitComment() {
    if (this.comment && this.comment.length > 0) {
      let commentObj = {
        username: this.authService.returnCurrentUser().username,
        postId: this.post._id,
        commentText: this.comment
      };
      console.log(commentObj);
      this.authService.submitComment(commentObj)
      .then( (res) => {
        this.renewPost();
        this.comment = "";
      })
    }
  }

  back() {
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
  	this.post = this.navParams.get('post');
  }

}
