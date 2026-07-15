import { ChangeDetectorRef,Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  singleProduct: any;
  id: any;
  constructor(private api: ApiService, private cdr: ChangeDetectorRef,private ar: ActivatedRoute) {}

ngOnInit() {
  this.id = this.ar.snapshot.params['id'];

  this.api.getProductdetails(this.id).subscribe((res: any) => {
    this.singleProduct = {
      ...res,
      price: (res.id * 37) % 500 + 99
    };

    this.cdr.detectChanges();
  });
}
}