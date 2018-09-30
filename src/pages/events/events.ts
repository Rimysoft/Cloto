import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';
import { EventsDetailPage } from '../../pages/events-detail/events-detail';

import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  public events : any;
  public err : any;

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Errore di rete!',
      subTitle: 'Per favore verifica la tua connessione a Internet e riprova!',
      buttons: ['Ok']
    });
    alert.present();
  }

  loadEvents(){
    let loader = this.loading.create({
      content: 'loading',
    });
    loader.present().then(() => {
      this.eventService.load()
      .then((data) => {
        if(data === "Network error"){
          this.presentAlert();
        }
        else{
          this.events = data;
          //console.log(data);
        }
        
        //console.log(data);
        
        loader.dismiss();
      });
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, private alertCtrl: AlertController, public eventService: EventsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.loadEvents();
  }

  goToEventDetail(ev){
    this.navCtrl.push(EventsDetailPage, {ev});
  }

}
