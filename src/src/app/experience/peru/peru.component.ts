import { Params } from '@angular/router';
import { SoundManager } from './../../../shared/sound.manager';
import { ComponentSuffix } from './../../../shared/component.suffix';
import { SvgManager } from './../../../shared/svg.manager';
import { Component, OnInit, ElementRef } from '@angular/core';
import { routerTransition } from "app/router.animations";
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class PeruComponent implements OnInit {
	activatedRoute: any;
	private _pointActive;

  constructor(private elementRef: ElementRef, private svgManager:SvgManager, private translate: TranslateService) { }

  private activeTrailPoint = (event:Event)=>{
		let pointSelected:HTMLElement = event.currentTarget as HTMLElement;
		if(pointSelected == this._pointActive)return false;
		if(this._pointActive){
			this._pointActive.classList.remove('active'); 
		}
		pointSelected.querySelector('.tip .text').innerHTML = pointSelected.getAttribute('id');
		this._pointActive = pointSelected;
		pointSelected.classList.add('active');
		// SoundManager.getInstance().playSoundByID('tok1'); 
	}


  private hoverTrailPoint = (event:Event)=>{
		let pointSelected:HTMLElement = event.currentTarget as HTMLElement;
		if(pointSelected == this._pointActive)return false;
		var circle:any = pointSelected.querySelector('.st3').cloneNode(true);
		circle.setAttribute('class', 'circle');
		SoundManager.getInstance().playSoundByID('blop');
		pointSelected.appendChild(circle);
		setTimeout(function(){
			circle.setAttribute('class', 'circle go');
		},10);

		setTimeout(function(){
			pointSelected.removeChild(circle);
		},1250);
	}

  private configSvgTrail():void{
		this.svgManager.getSvg('div.trail_1-content svg').then((svgBase => {
			let trail = svgBase.querySelector('#xablau path.to-animate');
			trail.classList.add('show'); 
 
			let points = svgBase.querySelectorAll('.point');
			points[0].classList.add('show');
			let pathAnimationTime = 2500;
			setTimeout(function(){
				SoundManager.getInstance().playSoundByID('blop');
				points[1].classList.add('show');
			},pathAnimationTime/12);

			setTimeout(function(){
				SoundManager.getInstance().playSoundByID('blop');
				points[2].classList.add('show');
			},pathAnimationTime/5);

			setTimeout(function(){
				SoundManager.getInstance().playSoundByID('blop');
				points[3].classList.add('show');
			},pathAnimationTime/2);

			setTimeout(function(){
				SoundManager.getInstance().playSoundByID('blop');
				points[4].classList.add('show');
			},pathAnimationTime);

			//clicks / hovers
			let i =0, len = points.length;
			for(i; i < len; i++){
				points[i].addEventListener('click', this.activeTrailPoint);
				points[i].addEventListener('mouseenter', this.hoverTrailPoint);
			}
		}))
	}


  ngOnInit() {
	this.translate.use('en');
	this.configSvgTrail();
      SoundManager.getInstance();
      // SoundManager.getInstance().playSoundByID('main_trail');
      this.svgManager.getSvg('footer .content-right svg').then((svgBase => {
        SoundManager.getInstance().configMuteController(svgBase);
	  }));
	  

	// this.activatedRoute.params.subscribe((params: Params) => {
	// 	let choosenLang = this.activatedRoute.firstChild.params['value'].lang;
	// 	console.log(choosenLang);
	
	// });

      
  }
}

function suffix():String{
	return ComponentSuffix.getInstance().getSuffix();
}
