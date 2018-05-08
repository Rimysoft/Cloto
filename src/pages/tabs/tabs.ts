import { Component } from '@angular/core';

import { CompanyPage } from '../company/company';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompanyPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
