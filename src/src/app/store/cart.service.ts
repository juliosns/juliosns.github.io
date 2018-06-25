import { Injectable } from '@angular/core';
import { ApiManagerService } from "app/services/api-manager.service";
import { ProductCart, Cart } from "app/store/models";
import {environment as env} from "../../environments/environment"

@Injectable()
export class CartService {  
  public cart: Cart;
  constructor(private api: ApiManagerService ) {
    if ( window.localStorage.getItem("cart") ) {    
      this.cart = JSON.parse(window.localStorage.getItem("cart"));
    } else {
      this.cart = new Cart([]);      
    }
  }
  
  addProductToCart( product: ProductCart ) {
    let objPrepare = {
      "cartItem": {
        "sku": product.product.sku,
        "qty": product.quantity
      },
      "cartId": this.cart.cartId
    }    
    this.api.postRequest( env.STORE_API_URL + "api/cart/addItem", objPrepare ).then( (resp) => {
      let prepObj = resp.json();      
      let prodExists = this.checkIfProductInCart(product);
      if (prodExists > -1) {        
        let prod = this.cart.products[prodExists];
        prod.quantity = prepObj.qty;
        this.cart.products[prodExists] = prod;
      } else {
        this.cart.products.push(product);
      }
      this.cart.cartId = prepObj.quote_id;
      window.localStorage.setItem("cart", JSON.stringify(this.cart));
    });
  }

  getCart(): Promise<any>{
    if (this.cart.cartId) {
      return this.api.getRequest(env.STORE_API_URL + "api/cart/"+ this.cart.cartId);
    }
    Promise.reject({"message":"Não existem dados no carrinho"});
  }

  getTotals() {
    
  }

  checkIfProductInCart (product: ProductCart): number {

    let prods = this.cart.products;
    
    for (let index = 0; index < prods.length; index++) {
      let element = prods[index];
      if (product.product.sku == element.product.sku ) {
        return index;
      }
    }    
    return -1;
  }

  removeProductFromCart(product) {

  }

}
