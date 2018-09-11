import { Component } from '@angular/core';

import { CompanyPage } from '../company/company';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CollectionsPage } from '../collections/collections';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompanyPage;
  tab3Root = CollectionsPage;
  tab4Root = EventsPage
  tab5Root = ContactPage
  tab6Root = AboutPage

  constructor() {
    console.log("ok");
  }
}
