import { Component, OnInit } from '@angular/core';
import {environment as env} from "../../../environments/environment"
import { ApiManagerService } from "app/services/api-manager.service";
import 'rxjs/add/operator/toPromise';
import { Category } from "app/store/models";
import { TranslateModule, TranslateService, LangChangeEvent } from "ng2-translate";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private api:ApiManagerService, private translate: TranslateService, private route: ActivatedRoute) { }
  private categories: Array<Category>;  
  private curr_lang: string;
  private linkForProducts = "";

  ngOnInit() {
    this.curr_lang = this.translate.currentLang;
    this.translate.onLangChange.subscribe( (event: LangChangeEvent) => {
      this.curr_lang = event.lang;
      this.getCategories();
    });
    this.getCategories();
  }

  getCategories(): void {    
    let categories = [];    
    this.api.getRequest(env.STORE_API_URL + "api/getCategories/" + env.LANG_CODE[this.curr_lang] ).then( resp => {      
      let rawCategories = resp.json();
      for (let idx = 0; idx < rawCategories.length; idx++) {
        let element = rawCategories[idx];
        let image_src = "", slug = "";
        if (element.is_active && element.cat_obj ) {
          for (let index = 0; index < element.cat_obj.custom_attributes.length; index++) {
            let current = element.cat_obj.custom_attributes[index];
            if (current.attribute_code == "image") {
              image_src = env.STORE_IMAGE_URL + "category/"+ current.value;
              continue;
            }
            if (current.attribute_code == "url_path") {
              slug = current.value
              continue;
            }
          }
        }
        let catObj = new Category(element.id, element.name, image_src, slug);
        categories.push(catObj);
        this.categories = categories;
      }
    });

  }

}
