import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() productData: any;

  constructor(private router: Router) {}

  buyNow() {
    this.router.navigate(['/product', this.productData.id]);
  }
}