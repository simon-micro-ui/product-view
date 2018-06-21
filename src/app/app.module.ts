import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ProductViewComponent } from './productview/productview.component';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [BrowserModule],
  entryComponents: [ProductViewComponent]
})
export class ProductViewModule {
  constructor(private injector: Injector) {
    console.log('ProductViewModule.constructor : Creating and Defining CustomElement : ProductViewComponent');
    const productView = createCustomElement(ProductViewComponent, { injector });
    let existing = customElements.get('product-view');
    console.log('existing=' + existing);
    //if (existing === undefined) {
        customElements.define('product-view', productView);
        console.log('customElements.define(product-view) was successful...');
    //}
  }

  ngDoBootstrap() {}
}
