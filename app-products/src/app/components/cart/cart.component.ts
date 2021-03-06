import { Component, OnInit } from '@angular/core';
import { Product } from '../../products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  items: Product[];
  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
