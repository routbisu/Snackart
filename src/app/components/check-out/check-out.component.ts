import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Order } from 'shared/models/order';
import { AuthService } from './../../services/auth.service';
import { OrderService } from './../../services/order.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  cartSubscription: Subscription;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
