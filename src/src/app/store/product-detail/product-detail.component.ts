import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from "app/services/api-manager.service";
import { TranslateService } from "ng2-translate";
import { ActivatedRoute } from "@angular/router";
import {environment as env} from "../../../environments/environment"
import { CartService } from "app/store/cart.service";
import { ProductCart } from "app/store/models";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  curr_lang: string;
  productToCart: ProductCart = new ProductCart(1, {});

  constructor(private api:ApiManagerService, private translate: TranslateService, private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit() {
    this.route.params.subscribe( (resp) => {
        this.curr_lang = this.translate.currentLang;
        this.getProductDetail(resp.prodSlug);
      });
  }

  addProductToCart( prodToCart: ProductCart ) {
    this.cart.addProductToCart(prodToCart);
  }

  getProductDetail(slug:string) {
    this.api.getRequest(env.STORE_API_URL + "api/getProducts/" + env.LANG_CODE[this.curr_lang] + "/"+ slug ).then(resp => {
      let prepProd = resp.json();

      if ( prepProd.custom_attributes && prepProd.custom_attributes.length ) {
        for (let index = 0; index < prepProd.custom_attributes.length; index++) {
          let element = prepProd.custom_attributes[index];
          prepProd[element.attribute_code] = element.value;
        }

        delete prepProd.custom_attributes;
        prepProd.first_image = env.STORE_IMAGE_URL + "product"+ prepProd.image;
        this.productToCart.product = prepProd;
      }
    });
  }

}
