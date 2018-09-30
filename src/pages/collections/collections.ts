import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';

import { CollectionsServiceProvider } from '../../providers/collections-service/collections-service';
import { LoadingController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'collections',
  templateUrl: 'collections.html',
  providers: [CollectionsServiceProvider]
})
export class CollectionsPage {

  public collections : any;
  public err : any;

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Errore di rete!',
      subTitle: 'Per favore verifica la tua connessione a Internet e riprova!',
      buttons: ['Ok']
    });
    alert.present();
  }

  loadCollections(){
    let loader = this.loading.create({
      content: 'loading',
    });
    loader.present().then(() => {
      this.collectionsService.load()
      .then((data) => {
        if(data === "Network error"){
          this.presentAlert();
        }
        else{
          this.collections = data;
        
        }
        
        //console.log(data);
        
        loader.dismiss();
      });
    });
  }

  constructor(public navCtrl: NavController, public collectionsService: CollectionsServiceProvider, public loading: LoadingController, private alertCtrl: AlertController) {
    console.log("Collections");
    this.loadCollections();
  }

  goToCollection(id){
    this.navCtrl.push(ProductPage, {id});
  }

}
