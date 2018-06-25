import { Component, OnInit } from '@angular/core';
import {environment as env} from "../../../environments/environment"
import { ApiManagerService } from "app/services/api-manager.service";
import 'rxjs/add/operator/toPromise';
import { TranslateModule, TranslateService, LangChangeEvent } from "ng2-translate";
import { ActivatedRoute, UrlSegment } from "@angular/router";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  public categories: Array<any> = [];
  private baseUrl;
  private curr_lang;
  constructor(private api:ApiManagerService, private translate: TranslateService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe( (paramsData) => {      
      let slug = paramsData["params"].catSlug;
      let lang = paramsData["params"].lang;
      
      this.curr_lang = lang;

      let langSlug = env.LANG_CODE[lang];
      
      this.api.getRequest(env.STORE_API_URL + "api/getCategories/" + langSlug + "/" + slug).then((resp) => {
        let prepCategory = resp.json();

        for (let count = 0; count < prepCategory.length; count++) {
          let singleCat = prepCategory[count];
          if (singleCat.cat_obj) {
            if (singleCat.cat_obj.custom_attributes.length) {
              for (let index = 0; index < singleCat.cat_obj.custom_attributes.length; index++) {
                let element = singleCat.cat_obj.custom_attributes[index];
                if (element.attribute_code == "url_key") {
                  prepCategory[count].slug = element.value;
                  break;
                }
              }
            }
            if (singleCat.cat_obj.products && singleCat.cat_obj.products.length) {
              for (let index = 0; index < singleCat.cat_obj.products.length; index++) {
                let element = singleCat.cat_obj.products[index];
                let product = element.product;
                
                if (product && product.custom_attributes.length) {
                  prepCategory[count].cat_obj.products[index].name = product.name;
                  for (var i = 0; i < product.custom_attributes.length; i++) {
                    let attr = product.custom_attributes[i];
                    if (attr.attribute_code == "url_key") {
                      prepCategory[count].cat_obj.products[index].slug = attr.value;
                    } else if (attr.attribute_code == "image") {
                      prepCategory[count].cat_obj.products[index].image = env.STORE_IMAGE_URL + "product/"+ attr.value;
                    } else {
                      prepCategory[count].cat_obj.products[index][attr.attribute_code] = attr.value;
                    }
                  }
                  delete prepCategory[count].cat_obj.products[index].product;
                }
              }
            }
          }
          prepCategory[count].products = prepCategory[count].cat_obj.products || [];
          delete prepCategory[count].cat_obj;
        }
        console.log(prepCategory)
        this.categories = prepCategory;
      });
    });
  }
}
