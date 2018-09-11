import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';

import { CollectionsServiceProvider } from '../../providers/collections-service/collections-service';

@Component({
  selector: 'collections',
  templateUrl: 'collections.html',
  providers: [CollectionsServiceProvider]
})
export class CollectionsPage {

  public collections : any;

  loadCollections(){
    this.collectionsService.load()
    .then(data => {
      console.log(data);
      this.collections = data;
    });
  }

  constructor(public navCtrl: NavController, public collectionsService: CollectionsServiceProvider) {
    console.log("Collections");
    this.loadCollections();
  }

  goToCollection(id){
    this.navCtrl.push(ProductPage, {id});
  }

}
