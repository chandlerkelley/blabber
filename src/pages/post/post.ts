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

  };

  back() {
  	this.navCtrl.pop();
  }

}
