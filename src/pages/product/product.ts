import { Component } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products'
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LoadingController } from 'ionic-angular';


/*@IonicPage()*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [ProductsProvider]
})
export class ProductPage {

  public urls : any;
  public title : "";

  loadProducts(id){
    let loader = this.loading.create({
      content: 'loading',
    });
    loader.present().then(() => {
    this.productsService.load(id)
    .then((data, err) =>{
      /*if(err){
        console.log("err");
      }*/
      this.urls = data[0].urls;
      this.title = data[0].title_IT
      //
      loader.dismiss();
      //console.log(data[0]);
      });
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public productsService: ProductsProvider,public loading: LoadingController) {
    //console.log(navParams.data.id);
    this.loadProducts(navParams.data.id);
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
*/
}
