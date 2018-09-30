import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-detail',
  templateUrl: 'events-detail.html',
})
export class EventsDetailPage {
  public urls : any;
  public title : "";
  public description : "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data.ev.title;
    this.description = navParams.data.ev.description;
    this.urls = navParams.data.ev.gallery;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsDetailPage');
  }

}
