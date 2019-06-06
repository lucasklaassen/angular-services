import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() products: Product[] = [];

  public totalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
