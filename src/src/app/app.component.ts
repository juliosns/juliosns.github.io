import { Http, ResponseContentType } from '@angular/http';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "ng2-translate";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuComponent,GalleryComponent, ContentComponent]
  
})

export class AppComponent implements OnInit {
  constructor(private http: Http, private menu: MenuComponent, private galerry: GalleryComponent, private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private translate: TranslateService, private activatedRoute: ActivatedRoute, private _router: Router) { }
  private lang: string;
  private gal: object;
  private menuImagesList = ['assets/images/menu/1.png', '../assets/images/menu/2.png', '../assets/images/menu/3.png']

  private preloadNextMenuImage=()=>{
    if(this.menuImagesList.length){
      let nextPath = this.menuImagesList.shift();
      this.loadImage(nextPath, this.preloadNextMenuImage);
    }
  }
  
  private loadImage=(path: string, callback:any)=>{
    let tmpImg:any;

    let loaded = () => { // wait for image to load then replace it with loadingGIF
      callback();
    }
    
    tmpImg = new Image();
    tmpImg.onload = loaded;  // register the onload event
    tmpImg.src = path;
  }


  ngOnInit(){
    // this.activatedRoute.params.subscribe((params: Params) => {
    //     setTimeout(func => {
    //       // this.lang = this.activatedRoute.firstChild.params['value'].lang;
    //       this.translate.setDefaultLang('en');
    //     }, (1));
    // });

    let arr_url = location.href.split("/");
    this.translate.use(arr_url[3]);
    this.translate.setDefaultLang('en');
    this.preloadNextMenuImage();


    this.gal = {
      "id": 1,
      "imagens": [{
        'id_imagem': 1,
        'url': '../../assets/images/gallery/1.png',
        'langs': [{
          'idlang': 1,
          'lang': 'en',
          'titulo': 'San Jose de Bocay',
          'desc': 'Direct trade squid lomo leggings yr twee. Flannel health goth glossier shoreditch dreamcatcher, williamsburg enamel pin tumeric authentic butcher scenester typewriter. '
        }]
      },{
        'id_imagem': 1,
        'url': '../../assets/images/gallery/2.png',
        'langs': [{
          'idlang': 1,
          'lang': 'en',
          'titulo': 'San Jose de Bocay 2',
          'desc': 'Desc eeeeeeeeeeeeee'
        }]
      },{
        'id_imagem': 1,
        'url': '../../assets/images/gallery/1.png',
        'langs': [{
          'idlang': 1,
          'lang': 'en',
          'titulo': 'San Jose de Bocay 3',
          'desc': 'Desc aaaaaaaaaaa'
        }]
      }]
    };

  }

  openGallery(close){
    if(close == 1){
      return false;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(GalleryComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref['_component'].saveData(this.gal);
    ref['_component'].refCloseGallery(this.openGallery,this.viewContainerRef);
  }

  openContent(close){
    if(close == 1){
      return false;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(ContentComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    // ref['_component'].saveData(this.gal);
    ref['_component'].refCloseContent(this.openContent,this.viewContainerRef);
  }

	openMenu(close){

    if(close == 1){
      return false;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(MenuComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref['_component'].refCloseMenu(this.openMenu,this.viewContainerRef);
	} 
}
