import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CompanyPage } from '../pages/company/company';
import { ContactPage } from '../pages/contact/contact';
import { ProductPage } from '../pages/product/product';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { CollectionsPage } from '../pages/collections/collections';
import { EventsPage } from '../pages/events/events';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CollectionsServiceProvider } from '../providers/collections-service/collections-service';

import { HttpClientModule } from '@angular/common/http';
import { ProductsProvider } from '../providers/products/products';

import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CompanyPage,
    EventsPage,
    CollectionsPage,
    ProductPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CompanyPage,
    ContactPage,
    HomePage,
    EventsPage,
    CollectionsPage,
    ProductPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CollectionsServiceProvider,
    ProductsProvider,
    ProductsProvider
  ]
})
export class AppModule {}
