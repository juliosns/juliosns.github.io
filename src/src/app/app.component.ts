import { Http, ResponseContentType } from '@angular/http';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { SoundManager } from 'shared/sound.manager';
import { SvgManager } from 'shared/svg.manager';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [GalleryComponent, ContentComponent]
    
})

export class AppComponent implements OnInit {
    constructor(private http: Http, private galerry: GalleryComponent, private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private activatedRoute: ActivatedRoute, private _router: Router, private svgManager: SvgManager) { }
    private lang: string;
    private gal: object;

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
        this.svgManager.getSvg('footer .content-right svg').then((svgBase => {
            // SoundManager.getInstance().configMuteController(svgBase);
            // SoundManager.getInstance().playSoundByID('trail');
        }));
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
    }
}
