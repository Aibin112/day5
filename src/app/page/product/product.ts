import {ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../../ui/card/card";

import { ApiService } from '../../api-service';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
//    data: any =[
//   {
//     id:1,
//     name:"Aura wireless headphones",
//     description:"Immersive sound with premium comfort and noise cancellation",
//     price:299.00,
//     image:"https://imgs.search.brave.com/4la-PDrDk-SPDJMG2A9s7LO3WySZiAQJevK-rbcr8Fg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzUx/LzRkL2EzNTE0ZDk1/MjJiODA5OTRjZWIz/YWM0MWQzZWZjMGQ4/LmpwZw"
//   },

//   {
//     id:2,
//     name:"Aura phones",
//     description:"Immersive sound with premium comfort and noise cancellation with charger",
//     price:12299.00,
//     image:"https://imgs.search.brave.com/1Bjf1lGyEm5-moorCU3kJNaAgprrBmCrEoF3TMauqbI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5jZG4uc2hweS5p/bi8zMDE4MjYvU2Ft/c3VuZ0dhbGF4eVMy/NTVHQUlTbWFydHBo/b25lU2lsdmVyU2hh/ZG93MTJHQlJBTTI1/NkdCU3RvcmFnZTUw/TVBDYW1lcmF3aXRo/R2FsYXh5QUkxLTE3/Mzk0NTU0MTYzOTQu/anBlZz93aWR0aD02/MDAmZm9ybWF0PXdl/YnA"

//   },
//   {
//     id:3,
//     name:"Aura laptops",
//     description:"Immersive sound with premium comfort and noise cancellation with graphics card",
//     price:299.00,
//     image:"https://imgs.search.brave.com/Cl2tn6vbUzbgjXYackhrFvB-bO3ou1HAhuNu3ZYZdTk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/MDkzLzgyNC9zbWFs/bC9yb3ctb2YtbGFw/dG9wcy1iZWluZy1w/cmVwYXJlZC1hbmQt/c2V0LXVwLWZvci1u/ZXctZW1wbG95ZWVz/LWluLWEtY29tcGFu/eS1waG90by5KUEc"
// },
// {
//     id:4,
//     name:"Aura watches",
//     description:"Immersive sound with premium comfort and noise cancellation with quartz",
//     price:1234299.00,
//     image:"https://imgs.search.brave.com/G2zy93wvLh1xX3oE6z4AUxiJMR4k-KhB3pf_wIpva_0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93YXRj/aGVzLTgwNTM4NTAu/anBn"
// },{
//   id:5,
//     name:"Aura tablets",
//     description:"Immersive sound with premium comfort and noise cancellation with camera",
//     price:1234299.00,
//     image:"https://imgs.search.brave.com/BOVodXGn1DeLcWKFTifOMb2fe8-2txuqIv5dgd3gQ8I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnZl/bnRzdG9yZS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS9pUGFkLTEwdGgt/Z2VuLWJsdWUtNjAw/eDYwMC0xLndlYnA"
// }
//   ];
  
data: any = [];
constructor(private apiservice: ApiService,private cdr: ChangeDetectorRef) {} 

ngOnInit(){
 this.apiservice.getAllProducts().subscribe((res:any)=>{
  this.data = res
  this.cdr.detectChanges();
 })
}
}
