import { Injectable } from '@angular/core';

@Injectable()
export class ComponentSuffix {
	private _suffix:String;
	private static _instance:ComponentSuffix;

    public getSuffix():String{
		return this._suffix;
	}
	
	public setSuffix(suffix:String):void{
		this._suffix = suffix;
	}

	private static config(){
		var winW = window.screenX;

		window.addEventListener('resize', onResize);
		onResize(null);
		function onResize(event){
			winW = window.innerWidth;
			console.log('resize ',winW);
			if(winW > 600 && (ComponentSuffix.getInstance().getSuffix()=='-mob' || !event)){
				if(event)console.log('NEED RELOAD ^');
				ComponentSuffix.getInstance().setSuffix('');
			}else if(winW < 600 && ComponentSuffix.getInstance().getSuffix()=='' || !event){
				if(event)console.log('NEED RELOAD v');
				ComponentSuffix.getInstance().setSuffix('-mob');
			}
		}
	}

	public static getInstance():ComponentSuffix{
		if(!this._instance){
			this._instance = new this();
			this.config();
		}
		
		return this._instance;
	}
}