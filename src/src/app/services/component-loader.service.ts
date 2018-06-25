import { GalleryComponent } from "app/gallery/gallery.component";
import { ContentComponent } from "app/content/content.component";
import { Injectable,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable()
export class ComponentLoaderService {

  public viewContainerRef: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  openGallery(data, close){
    if(close == 1){
      return false;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(GalleryComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref['_component'].saveData(data);
    ref['_component'].refCloseGallery(this.openGallery,this.viewContainerRef);
  }

  openVideo(data, close) {
    if(close == 1){
      return false;
    }
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

}
