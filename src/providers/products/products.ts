import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  public data: any;
  public err: any;

  constructor(public http: HttpClient) {
    //console.log('Hello ProductsProvider Provider');
  }

  load(idProduct){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    if (this.err) {
      // already loaded data
      return Promise.resolve(this.err);
    }
    //
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      var url = 'http://www.arredamentiportocervo.it/API/Products/' + idProduct;
      //console.log(url);
      this.http.get<any[]>(url)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        }, error => {
            this.err = "Network error";
            resolve(this.err);
        });
    });
  }

}
