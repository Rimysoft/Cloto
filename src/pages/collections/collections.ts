import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';

import { CollectionsServiceProvider } from '../../providers/collections-service/collections-service';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'collections',
  templateUrl: 'collections.html',
  providers: [CollectionsServiceProvider]
})
export class CollectionsPage {

  public collections : any;

  loadCollections(){
    let loader = this.loading.create({
      content: 'loading',
    });
    loader.present().then(() => {
      this.collectionsService.load()
      .then(data => {
        console.log(data);
        this.collections = data;
        loader.dismiss();
      });
    });
  }

  constructor(public navCtrl: NavController, public collectionsService: CollectionsServiceProvider, public loading: LoadingController) {
    console.log("Collections");
    this.loadCollections();
  }

  goToCollection(id){
    this.navCtrl.push(ProductPage, {id});
  }

}
