import { Router } from '@angular/router';
import { ValueAnimator } from './../../shared/value.animator';
import { Component, OnInit } from '@angular/core';
import { SvgManager } from "shared/svg.manager";
import { style } from '@angular/animations';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
	private router:Router;
	private bigImage:any;

	constructor(private svgManager:SvgManager, router:Router) {
		this.router = router;
	}

	ngOnInit() {
		this.bigImage = new Image();
		this.bigImage.onload = ()=>{
			let imW = this.bigImage.width;
			let winW = window.innerWidth - 20;
			let prop = winW / imW;
			this.bigImage.width = winW;
			this.bigImage.height = this.bigImage.height * prop;
			this.drawImages();
		}

		this.bigImage.src = '../../assets/images/escuro_estacao.jpg';
	}

	drawImages() {
		let images: any = document.querySelectorAll('.mosaic__item');
		for(let i = 0; i < images.length; i++) {
			var c: any = document.createElement("canvas");
			var ctx = c.getContext("2d");
			var l = parseInt(images[i].getBoundingClientRect().left)-10;
			var t = parseInt(images[i].getBoundingClientRect().top)-10;
			var w = parseInt(images[i].getBoundingClientRect().width);
			var h = parseInt(images[i].getBoundingClientRect().height);
			console.log('>>> ', this.bigImage, l, t, w, h);
			ctx.drawImage(this.bigImage, l, t, w, h, 0, 0, w, h);
			var image = new Image();
			image.setAttribute('class', 'picture');
			image.src = c.toDataURL();
			images[i].querySelector('.mosaic__item--container--front').append(image);
		}
	}
}
