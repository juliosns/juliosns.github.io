import { TranslateService } from 'ng2-translate';
import { style } from '@angular/animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SvgManager } from './../../../shared/svg.manager';
import { MapService } from './../../services/map.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ApiManagerService } from "app/services/api-manager.service";
import { environment as env } from "../../../environments/environment";
import { ComponentLoaderService } from "app/services/component-loader.service";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  private centerSVG;
  private position;
  private sectionBase;0
  private baseUrl:string;
  private partnersList = [
    {city:"Cuyagua Village", link: "venezuela"},
    {city:"Ambolikapiky", link: "madagascar"},
    {city:"Baracoa", link: "cuba"},
    {city:"San Jose de Bocay", link: "nicaragua"},
    {city:"Hacienda Victoria", link: "ecuador"},
    {city:"Samana Bay", link: "dominician-republic"},
    {city:"Mayan Red", link: "honduras"},
    {city:"Rio Dulce", link: "guatemala"}
  ]


  constructor(private _mapService: MapService, private _svgManager:SvgManager, private activatedRoute: ActivatedRoute, private router: Router, private translate: TranslateService, private api: ApiManagerService, private viewContentHref: ViewContainerRef , private componentManager:ComponentLoaderService) { }
  private countriesList = {
    'venezuela':{lat:10.344304, lng:-67.615356},
    'madagascar':{lat:-13.871601, lng:48.494682},
    'cuba':{lat:20.323661, lng: -74.548416},
    'nicaragua':{lat:13.543848, lng: -85.539977},
    'ecuador':{lat:-2.365894, lng: -80.231094},
    'dominician-republic':{lat:19.130806, lng: -69.812107},
    'honduras':{lat:15.512863, lng: -87.155228},
    'guatemala':{lat:15.696343, lng: -89.020844}
  };

  ngOnInit() {
    this.baseUrl = this.router.url;
    //this.translate.use('en');
    this.activatedRoute.params.subscribe((params: Params) => {
      var country = params['country'];

      if(country){      
        this.position = this.countriesList[country];
        if(this.position===undefined){
          this.router.navigateByUrl(this.router.url.replace(country, ''));
          return false;
        }
        
        this.api.getRequest( env.API_URL + "partners/partner/" + country ).then( (resp) => {
          let dados = resp.json();
          var gallery = dados.galleries;
          var videos = dados.videos;
          var page = dados.pages[0];
          
          this.sectionBase = document.querySelector('#partner-map');
          this.sectionBase.style.display = 'block';
          this.configMap();

          this.componentManager.viewContainerRef = this.viewContentHref;
          this._svgManager.getSvg('div.center-icons svg').then((svgBase => {
            this.centerSVG = svgBase;  
            setTimeout(()=>{
              this.centerSVG.classList.add('in');
              setTimeout(()=>{  
                let circlesCollection = this.centerSVG.querySelectorAll('#circles .dashed-circle');
                circlesCollection[0].classList.add('rotating');
                circlesCollection[1].classList.add('rotating');
  
                let pointCollection = this.centerSVG.querySelectorAll('.point');
  
                setTimeout(()=>{
                  pointCollection[0].classList.add('show');
                  if (page) {
                    //Open the page                                        
                  } else {
                    pointCollection[0].classList.add("disabled");
                  }
                },100);
  
                setTimeout(()=>{                  
                  pointCollection[1].classList.add('show');
                  if (gallery.length) {
                    pointCollection[1].addEventListener("click",  (evt) => {
                      this.componentManager.openGallery(gallery, 0);
                    });
                  } else {
                    pointCollection[1].classList.add('disabled');
                  }

                },200);
  
                setTimeout(()=>{                  
                  pointCollection[2].classList.add('show');

                  if (videos.length) {
                    pointCollection[2].addEventListener("click",  (evt) => {
                      this.componentManager.openVideo(videos, 0);
                    });
                  } else {
                    pointCollection[2].classList.add('disabled');
                  }

                },300);  
              },500);
            },1500);
          }));
          
        });

      }else{
        this.sectionBase = document.querySelector('#select-partner');
        this.sectionBase.style.display = 'block';
      }
    });
  }
  
  configMap(){
    this._mapService.createMap(this.position.lat,this.position.lng);
  }

  configSelect(){

  }
}
