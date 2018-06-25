import { Router } from '@angular/router';
import { ValueAnimator } from './../../shared/value.animator';
import { Component, OnInit } from '@angular/core';
import { SvgManager } from "shared/svg.manager";

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
	private _topSvg: SVGElement;
	private _topSvgBig:SVGElement;
	private _bottomSvg:SVGElement;
	private _bottomBigSvg:SVGElement;
	private _topBigContainer:any;
	private _topContainer: any;
	private _bottomBigContainer:any;
	private _bottomContainer: any;
	private _containerVideos:Element; 
	private _onUp:boolean = true;
	private _posStart:number;
	private _currPos:number = 0.6;
	private _topDifference;
	private _windowH;
	private _videoTop:any;
	private _videoBottom:any;
	private _activeDraging;
	private _bottomActive = 1;

	//loop
	private _now:number;
	private _elapsed:number; 
	private _then:number;
	private _timeInterval:number;

	//canvas
	private _canvas:any;
	private _canvasContext:any;
	private _frameAnimation:number;

	//redraw video pos
	private _sourceWF;
	private _sourceHF;

	private _sourceWS;
	private _sourceHS;

	private _targetW;

	private _targetHF;
	private _targetHS;
	
	private _multiplicatorF;
	
	private _firstH;
	private _secondtH;

	private _drawSTF;
	private _drawSHF;

	private _drawSTS;
	private _drawSHS;

	private router:Router;


	constructor(private svgManager:SvgManager, private valueAnimator:ValueAnimator, router:Router) {
		this.router = router;
	}

	ngOnInit() {
		this.svgManager.getSvg('#splash .first-video .video-content svg').then((topBase => {
			this._topSvgBig = topBase;
			this._topSvgBig.addEventListener('click', this.onClickGo);
			this.doBigTextEnter(topBase.querySelector('#mask-choco-big-svg'), 500);
			this.svgManager.getSvg('#splash .first-video .video-content-small svg').then((topBaseSmall => {
				this._topSvg = topBaseSmall;
			}));
			
			this._topContainer = document.querySelector('#splash .first-video .video-content-small');
			this._topBigContainer = document.querySelector('#splash .first-video .video-content');

			this._bottomContainer = document.querySelector('#splash .second-video .video-content');
			this._bottomBigContainer = document.querySelector('#splash .second-video .video-content-big');

			this.svgManager.getSvg('#splash .second-video .video-content-big svg').then((bottomBigBase => {
				this._bottomBigSvg = bottomBigBase;
				var paths = this._bottomBigSvg.querySelectorAll('path');
				for(let i = 0; i < paths.length; i++){
					paths[i].style['stroke-dasharray'] = paths[i].getTotalLength();
					paths[i].style['stroke-dashoffset'] =  paths[i].getTotalLength();
				}
			}));

			this.svgManager.getSvg('#splash .second-video .video-content svg').then((bottomBase => {
				this._bottomSvg = bottomBase;
				this._containerVideos = document.querySelector('#splash');
				this._windowH = window.innerHeight;
				
				this._videoTop = this._containerVideos.querySelector('.first-video video');
				this._videoBottom = this._containerVideos.querySelector('.second-video video');
				this._canvas = this._containerVideos.querySelector('#canvas-da-nasa');
				this.configDrags();
				this.configCanvasRedraw();
			}));  
		}));
	}

	private onClickGo = () =>{
		this._bottomSvg['style']['opacity'] = '0';
		this._bottomSvg['style']['pointer-events'] = 'none';
		this._containerVideos.querySelector('.first-video')['style']['height'] = '80%';
		this._topSvgBig.querySelector('#begin_button')['style']['opacity'] = '1';
		this._topSvgBig.querySelector('#begin_button')['style']['pointer-events'] = 'auto';
		this._topSvgBig.querySelector('#begin_button').addEventListener('click', ()=>{
			this.router.navigate(['/en/experiences']);
		})
		this.valueAnimator.animeTo(this._currPos, 1, ()=>{
			// console.log('end da nasa');

		}, (value)=>{
			this._currPos = (value<=1)?value:1;
			this.resizeVideo();
		}, 10000);
	}

	private configDrags = ()=>{
		this.toggleAreaDrag(this._bottomSvg, true);

		window.addEventListener('mouseup', this.onEndDrag);
		window.addEventListener('touchend', this.onEndDrag);
		
		window.addEventListener('resize', ()=>{
			this.configCanvasRedraw();
			this.resizeVideo();
		});
		this.configCanvasRedraw();
		this.resizeVideo();
	}

	private toggleAreaDrag = (area:any, active:boolean) =>{
		if(active){
			area.addEventListener('mousedown', this.onStartDrag);
			area.addEventListener('touchstart', this.onStartDrag);
		}else{
			area.removeEventListener('mousedown', this.onStartDrag);
			area.removeEventListener('touchstart', this.onStartDrag);
		}
	}

	private onStartDrag=(event:any)=>{
		this._activeDraging = event.currentTarget;
		this._topSvgBig.querySelector('#mask-choco-big-svg').classList.remove('in');
		this._bottomBigSvg.querySelector('#mask-our-content').classList.remove('in');
		if(this._activeDraging.parentNode.parentNode.parentNode.className.match('second')){
			this._bottomActive = 1;
		}else{
			this._bottomActive = 0;
		}

		this._activeDraging.classList.add('active');
		this._posStart = event.clientY || event.touches[0].pageY;
		this._topDifference = 0;
		window.addEventListener('mousemove', this.onMouseMove);
		window.addEventListener('touchmove', this.onMouseMove);
	}

	private onEndDrag=()=>{
		if(this._activeDraging){
			this._activeDraging.classList.remove('active');
			this._activeDraging = null;
		}
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('touchmove', this.onMouseMove);
		if(this._currPos > .45){
			this.toggleAreaDrag(this._topSvg,false);
			this.toggleAreaDrag(this._bottomSvg,true); 
			let interval = setInterval(()=>{
				if(this._currPos >= 0.6){
					clearInterval(interval);
				}else{
					this._currPos+= 0.03;
				}
				this.updateIllustras();
				this.resizeVideo();
			},50);
		}else{
			this.toggleAreaDrag(this._topSvg,true);
			this.toggleAreaDrag(this._bottomSvg,false);
			let interval = setInterval(()=>{
				if(this._currPos <= 0.3){
					clearInterval(interval);
				}else{
					this._currPos-= 0.03;
				}
				this.updateIllustras();
				this.resizeVideo();
			},50);
		}
	}

	private onMouseMove = (event:any) =>{
		let posY = event.clientY || event.touches[0].pageY;
		let dif = ((posY - this._posStart)/*/2*/)+this._topDifference;
		if(dif != 0){
			this._posStart = posY;
			this._currPos = this._currPos + (dif*1)/this._windowH;
			this._currPos = ((this._currPos < 0.3)?0.3:(this._currPos>0.6)?0.6:this._currPos);
			 if(this._bottomActive){
				if(this._currPos < 0.4){
					this.triggerGo(0.3);
				}
			}else{
				if(this._currPos > 0.5){
					this.triggerGo(0.6);
				}
			} 
			this.resizeVideo();
		}
	}

	private resizeVideo = () =>{		
		this._sourceWF = this._videoTop.getAttribute('data-width');
		this._sourceHF = this._videoTop.getAttribute('data-height');

		this._sourceWS = this._videoBottom.getAttribute('data-width');
		this._sourceHS = this._videoBottom.getAttribute('data-height');

		this._targetW = this._canvas.offsetWidth;

		this._targetHF = this._canvas.offsetHeight*this._currPos;
		
		this._targetHS = this._canvas.offsetHeight*(1-this._currPos);
		
		this._multiplicatorF = this._sourceWF / this._targetW;
		
		this._firstH = this._canvas.offsetHeight*this._currPos;
		this._secondtH = this._canvas.offsetHeight*(1-this._currPos);

		this._drawSTF = (this._sourceHS/2)-this._firstH/2;
		this._drawSHF = (this._firstH*this._sourceWF)/this._targetW;

		this._drawSTS = (this._sourceHS/2)-this._secondtH/2;
		this._drawSHS = (this._secondtH*this._sourceWS)/this._targetW;

		this._drawSTF = (this._drawSTF > 0)?this._drawSTF:0;
	}

	private configCanvasRedraw = () =>{
		this._canvasContext = this._canvas.getContext('2d');
		this._canvas.setAttribute('width', window.innerWidth);
		this._canvas.setAttribute('height', window.innerHeight);
		this._timeInterval = 1000 / 22;
		this._then=Date.now();
		cancelAnimationFrame(this._frameAnimation);
		this.onUpdate();
	}

	private onUpdate = () =>{
		requestAnimationFrame(this.onUpdate);
		this._now = Date.now();
		this._elapsed = this._now - this._then;
		if (this._elapsed > this._timeInterval) {
			this._then = this._now - (this._elapsed % this._timeInterval);
			this.redrawVideo();
			if(this._activeDraging){
				this.updateIllustras();
			}
		}
	}

	private updateIllustras(){
		let pos = ((this._currPos-0.3) * 333.3);
		pos = (pos>0)?pos:0;
		if(this._bottomActive){
			this.updateBottom(pos);
		}else{
			this.updateTop(pos);
		}
	}

	//bottom slide
	private updateBottom(pos){
		let perc = 100-pos; 
		let maskPerc = perc+60;
		this._bottomSvg.querySelector('#point')['style'].transform = 'translateY(-'+perc+'px)';
		this._bottomSvg.querySelector('#mask rect')['style'].transform = 'translateY(-'+maskPerc+'px)';
		//lettering animation
		let paths = this._topSvgBig.querySelector('#mask-choco-big-svg').querySelectorAll('path');
		let pathPerc = (perc<=100)?(perc > 0)?perc:0:100;
		this._bottomSvg.querySelector('#mask rect')['style'].opacity = (100-pathPerc)/100;
		for(let i = 0; i < paths.length ; i++){
			let full = +paths[i].getAttribute('data-full') || 0;
			let total = paths[i].getTotalLength();
			let pos = full + ((1000/(total - full))*pathPerc);
			pos = (pos<total)?pos:total;
			paths[i]['style']['stroke-dashoffset'] = pos;
		}
	}

	//top slide
	private updateTop(pos){
		let perc = pos;
		let pointPerc = perc;
		let maskPerc = perc;
		this._topSvg.querySelector('#point')['style'].transform = 'translateY('+(pointPerc)+'px)';
		this._topSvg.querySelector('#mask-cocoa rect')['style'].transform = 'translateY('+maskPerc+'px)';
		//lettering animation
		let paths = this._bottomBigSvg.querySelector('#mask-our-content').querySelectorAll('path');
		let pathPerc = (perc<=100)?(perc > 0)?perc:0:100;
		this._topSvg.querySelector('#mask-cocoa rect')['style'].opacity = (100-pathPerc)/100;
		for(let i = 0; i < paths.length ; i++){
			let full = +paths[i].getAttribute('data-full') || 0;
			let total = paths[i].getTotalLength();
			let pos = full + ((1000/(total - full))*pathPerc);
			pos = (pos<total)?pos:total;
			paths[i]['style']['stroke-dashoffset'] = pos;
		}
	}

	private triggerGo=(pos)=>{
		if(this._activeDraging){
			let actDrg = this._activeDraging;
			setTimeout(()=>{
				actDrg.classList.remove('active');
			},1000);
			this._activeDraging = null;
		}
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('touchmove', this.onMouseMove);
		this.valueAnimator.animeTo(this._currPos, pos, this.endAnimation, this.updateAnimation, 1000);
	}

	private updateAnimation=(value)=>{
		this._currPos = value;
		this.resizeVideo();
		this.updateIllustras();
	}
	// this._topSvgBig.querySelector('#mask-choco-big-svg')
	// this._bottomBigSvg.querySelector('#mask-our-content')
	private endAnimation=()=>{
		this._bottomActive = (this._bottomActive)?0:1;
		if(this._bottomActive){
			setTimeout(()=>{
				this._topBigContainer['style']['opacity'] = '1';
				this._topBigContainer['style']['pointer-events'] = 'auto';
			},500);
			this._topContainer['style']['opacity'] = '0';
			this._topContainer['style']['pointer-events'] = 'none';
			
			//reset top pos
			this._topSvg.querySelector('#point')['style'].transform = 'translateY(0px)';
			this._topSvg.querySelector('#mask-cocoa rect')['style'].transform = 'translateY(0px)';

			this._bottomContainer['style']['opacity'] = '1';
			this._bottomContainer['style']['pointer-events'] = 'auto';

			this._bottomBigContainer['style']['opacity'] = '0';
			this._bottomBigContainer['style']['pointer-events'] = 'none';

			this.doBigTextEnter(this._topSvgBig.querySelector('#mask-choco-big-svg'),1000);
		}else{
			setTimeout(()=>{
				//reset bottom pos
				this._bottomSvg.querySelector('#point')['style'].transform = 'translateY(0px)';
				this._bottomSvg.querySelector('#mask rect')['style'].transform = 'translateY(-60px)';

				this._topContainer['style']['opacity'] = '1';
				this._topContainer['style']['pointer-events'] = 'auto';
			},500);

			this._topBigContainer['style']['opacity'] = '0';
			this._topBigContainer['style']['pointer-events'] = 'none';
			this._bottomContainer['style']['opacity'] = '0';
			this._bottomContainer['style']['pointer-events'] = 'none';

			this._bottomBigContainer['style']['opacity'] = '1';
			this._bottomBigContainer['style']['pointer-events'] = 'auto';
			this.doBigTextEnter(this._bottomBigSvg.querySelector('#mask-our-content'),500);
		}
	}

	private doBigTextEnter=(svgNode, delay?)=>{
		delay = delay || 0;
		setTimeout(()=>{
			svgNode.classList.add('in');
		},delay);
	}

	private redrawVideo = () => {
		//CLEAR
		// Store the current transformation matrix
		this._canvasContext.save();

		// Use the identity matrix while clearing the canvas
		this._canvasContext.setTransform(1, 0, 0, 1, 0, 0);
		this._canvasContext.clearRect(0, 0, this._canvas.offsetWidth, this._canvas.offsetHeight);

		// Restore the transform
		this._canvasContext.restore();

		//END CLEAR

		// this._canvasContext.drawImage(this._videoTop, 0, (this._sourceHS/2)-this._firstH/2, this._sourceWF, (this._firstH*this._sourceWF)/this._targetW, 0, 0, this._targetW, this._firstH);
		// this._canvasContext.drawImage(this._videoBottom, 0, (this._sourceHS/2)-this._secondtH/2, this._sourceWS, (this._secondtH*this._sourceWS)/this._targetW, 0, this._firstH, this._targetW, this._secondtH);
		this._canvasContext.drawImage(this._videoTop, 0, this._drawSTF, this._sourceWF, this._drawSHF, 0, 0, this._targetW, this._firstH);
		this._canvasContext.drawImage(this._videoBottom, 0, this._drawSTS, this._sourceWS, this._drawSHS, 0, this._firstH, this._targetW, this._secondtH);
	}

}
