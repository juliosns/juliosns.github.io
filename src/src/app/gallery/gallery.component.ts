import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { environment as env } from "../../environments/environment";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
	private data: Array<any>;
	private image: any;
	private nextImage: any;
	private title: String;
	private desc: String;
	private current: any;
	private total: Number;
	private refToClose:any;
  private ref : any;
  private menuImagesList:any;

  private currImageObj:any;
  private nextImageObj:any;

  private sectionBase:any;

  ngOnInit() {
      this.image = this.sanitizer.bypassSecurityTrustStyle('url(' + env.CMS_IMG_URL + "/original/" + this.data[0].urlGalleryImage + ')');
      this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + env.CMS_IMG_URL + "/original/" + this.data[1].urlGalleryImage + ')');
      this.title = this.data[0].titleGalleryImageDescription;
      this.desc = this.data[0].textGalleryImageDescription;
      this.current = 1;
      this.total = this.data.length; 
      this.sectionBase = document.querySelector('#gallery');
      this.currImageObj = this.sectionBase.querySelector('div.image figure.current');
      this.nextImageObj = this.sectionBase.querySelector('div.image figure.next');
      this.menuImagesList = this.data.concat();
      this.loadNextImage();
      setTimeout(()=>{

        this.sectionBase.classList.add('in');
      },150);
  }

  private loadNextImage=()=>{
    if(this.menuImagesList.length){
      let nextPath = this.menuImagesList.shift();
      this.loadImage(nextPath.urlGalleryImage, this.loadNextImage);
    }
  }
  
  private loadImage=(path: string, callback:any)=>{
    let tmpImg:any;
    path= env.CMS_IMG_URL + "original/" + path;
    let loaded = () => { // wait for image to load then replace it with loadingGIF
      callback();
    }
    
    tmpImg = new Image();
    tmpImg.onload = loaded;  // register the onload event
    tmpImg.src = path;
  }

  nextItem(){
    if(this.current+1 <= this.total){
		this.current++;
		this.title = this.data[this.current-1].titleGalleryImageDescription;
    this.desc = this.data[this.current-1].textGalleryImageDescription;
    this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + env.CMS_IMG_URL + "/original/" + this.data[this.current-1].urlGalleryImage + ')');
		this.doChangeImages();
    }
  }

  lastItem(){
    if(this.current > 1){
      this.current--;
      this.title = this.data[this.current-1].titleGalleryImageDescription;
      this.desc = this.data[this.current-1].textGalleryImageDescription;
      this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + env.CMS_IMG_URL + "/original/" + this.data[this.current-1].urlGalleryImage + ')');
      this.doChangeImages();
    }
  }

  doChangeImages(){
    this.currImageObj.classList.add('out');
    this.nextImageObj.classList.add('in');

    let curr = this.image;
    let newI = this.nextImage;

    setTimeout(()=>{
      this.image = newI;
      this.nextImage = curr;
      this.currImageObj.classList.remove('out');
      this.nextImageObj.classList.remove('in');
    },410);

  }

  refCloseGallery(func,ref){
    this.refToClose = func;
    this.ref = ref;
  }

  closeGallery(){
    this.sectionBase.classList.remove('in');
    setTimeout(()=>{
      this.ref.clear();
      this.refToClose(1);
    },500);
  }

  saveData(obj){
    this.data = obj;
  }

}
