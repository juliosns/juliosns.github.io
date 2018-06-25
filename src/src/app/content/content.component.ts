import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  constructor(private sanitizer: DomSanitizer) { }

  private data: Array<any>;
	private refToClose:any;
	private ref : any;
  private image: any;


  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/images/component/1.jpg)');
  }

  refCloseContent(func,ref){
    this.refToClose = func;
    this.ref = ref;
  }

  closeComponent(){
	  this.ref.clear();
	  this.refToClose(1);
  }

  saveData(obj){
    this.data = obj;
  }

}
