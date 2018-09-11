import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products'
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductsProvider]
})
export class ProductPage {

  public products : any;

  loadProducts(id){
    this.productsService.load(id)
    .then(data =>{
      this.products = data;
      console.log(data);
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService: ProductsProvider) {
    console.log(navParams.data.id);
    this.loadProducts(navParams.data.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
