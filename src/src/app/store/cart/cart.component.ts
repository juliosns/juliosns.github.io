import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/store/cart.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { ApiManagerService } from 'app/services/api-manager.service';
import {environment as env} from "../../../environments/environment"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cart = {
    items: []
  };
  private curr_lang;
  constructor(private cartManager: CartService, private translate: TranslateService, private route: ActivatedRoute, private api:ApiManagerService) { }

  ngOnInit() {
    this.curr_lang = this.translate.currentLang;
    this.cartManager.getCart().then((resp) => {
      let prepCart = resp.json();
      this.cart = prepCart;
    });

  }
}