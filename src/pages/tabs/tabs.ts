import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PostPage } from '../post/post';
import { UserPage } from '../user/user';
import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PostPage;
  tab3Root: any = UserPage;

  constructor(public Modal: ModalController,
              public nav: NavController,
              private authService: AuthService) {

  }
}
