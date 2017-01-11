import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(public navCtrl: NavController,
  						public navParams: NavParams,
  						private authService: AuthService) {

  };

  post: any;

  back() {
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
  	this.post = this.navParams.get('post');
  }

}
