import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginModal } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(public Modal: ModalController, public nav: NavController) {

  }

  loadLogin(): void {
  	if(true) {
  		const MODAL = this.Modal.create(LoginModal);
      MODAL.present();
  	}
  }

  ngOnInit(): void {
    this.loadLogin();
  }
}
