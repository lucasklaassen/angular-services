import { Component } from '@angular/core';
import { Product } from './core/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [
    { name: 'Hamburger', price: 8, details: ['Medium rare patty', 'No cheese', 'Fresh garden tomato'] },
    { name: 'Pizza', price: 5, details: ['10 pieces of pepperoni', 'Light cheese', 'Homemade pizza sauce'] },
    { name: 'Hot Dog', price: 3, details: ['Chili-cheese dog', 'Heavy cheese', 'Condiments available'] }
  ];

  public productsInCart: Product[] = [];

  public onProductAdd(event: Product): void {
    this.productsInCart.push(event);
  }
}
