import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Product } from './page/product/product';
import { ContactUs } from './page/contact-us/contact-us';
import { ProductDetails } from './product-details/product-details'

export const routes: Routes = [
    {
        path: '',component:Home
    },
    {
        path: 'product',component:Product
    },
   {
  path: 'contact-us',
  component: ContactUs
},
    {
    path: 'product/:id',component: ProductDetails
  }
];
