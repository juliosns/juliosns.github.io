import { transition, style } from '@angular/animations';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Component, OnInit, Injectable } from '@angular/core';
import {AppComponent} from './../app.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [Location]
})

@Injectable()


export class MenuComponent implements OnInit {

  constructor(private translate: TranslateService, private location: Location, private router: Router,  private activatedRoute: ActivatedRoute) { }
  private refToClose:any;
  private ref : any;
  private lang: Number;


private separate=(st, sufix)=> {
	var s = st.innerHTML.split("");
	if (s.length > 0) { 
		for (var i = 0; i < s.length; i++) {
			if (s[i] != "" && s[i] != " ") {
				s[i] = "<span style='z-index:1;position:relative;transform:translateX("+i*5+"px);display:inline-block;opacity:0.25;' class='spn-letter'>" + s[i] + "</span>";
			}
		}
		s = s.join("");
	}
	st.innerHTML = s;
}
  
  ngOnInit() {
		let menu = document.querySelector('#menu');
		let bg = Math.floor((Math.random() * 3) + 1);
		
		setTimeout(()=>{
			setTimeout(()=>{
				menu.classList.add('bg'+bg);
			},150);
			let menuItems = menu.querySelectorAll('.menu-itens .item')
			let i = 0, len = menuItems.length;
			for(i; i < len; i++){
				menuItems[i]['style'].transform = 'translateX(100px)';
				this.separate(menuItems[i], "");
			}
		},100);
		
		setTimeout(()=>{
			menu.classList.add('in');
			setTimeout(()=>{
				let menuItems = menu.querySelectorAll('.menu-itens .item');
				let i = 0, len = menuItems.length;
				for(i; i < len; i++){
					let spns = menuItems[i].querySelectorAll('span');
					let d = .2+(i/10);
					menuItems[i]['style'].transition = 'transform .75s ease-out '+d+'s';
					menuItems[i]['style'].transform = 'translateX(0px)';
					let j = 0, len2 = spns.length;
					for(j; j < len2; j++){
						spns[j].style.transition = 'transform .75s ease-out .75s, opacity 1.5s ease-out 1s';
						spns[j].style.transform = 'translateX(0px)';
						spns[j].style.opacity = '1';
					}
				}
			},500);
		},50);

		this.activatedRoute.params.subscribe((params: Params) => {
			let choosenLang = this.activatedRoute.firstChild.params['value'].lang;
			let langs = document.querySelectorAll('.langs');
			switch(choosenLang){
			case 'en': 
				langs[0].classList.add('active');
			break;

			case 'fr':
				langs[1].classList.add('active')
			break;

			case 'nl':
				langs[2].classList.add('active')
			break;
			}
			
			// setTimeout(this.changeDataText, 1);
    });
  }

  refCloseMenu(func,ref){
    this.refToClose = func;
    this.ref = ref;
  }

/*   changeDataText(){
		setTimeout(function() {
			let menuItens = document.querySelectorAll('.menu-itens a');
			for(let i=0; menuItens.length > i; i++ ){
				console.log(menuItens);
				let menuText = menuItens[i].innerHTML;
				menuItens[i].setAttribute('data-text',menuText);
			}
			
		}, 300);
  } */
  
  closeMenu(){
	  document.querySelector('#menu').classList.remove('in');
	  document.querySelector('#menu').classList.add('out');
	  setTimeout(()=>{
		this.ref.clear();
		this.refToClose(1);
	  },1750);

	}

  changeLang(lang,event){
		let langs = document.querySelector('.langs.active');
		if(langs) langs.classList.remove('active');
		event.currentTarget.classList.add('active');

		this.translate.use(lang);
		// this.changeDataText();

		let splitedUrl = this.router.url.split('/');
		let splicedUrl = splitedUrl.splice(1,1);
		let url = splitedUrl.join('/');
		this.location.replaceState(lang+url);

	  
  }

}
