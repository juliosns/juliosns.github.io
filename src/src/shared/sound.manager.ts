import { Injectable } from '@angular/core';

const SOUND_BASE_PATH = "../assets/sounds/";
@Injectable()
export class SoundManager {
	private static _instance:SoundManager;
    private _soundsData:Array<SoundFile>;
	private _soundExtension:string;	

    private onDataLoaded = (response)=>{
		this.configExtension();
		this._soundsData = new Array();
        let data = JSON.parse(response.srcElement.responseText);
		let i:number=0, len:number = data.length;
		for(i; i < len;i++){
			let dataEl = data[i];
			let id = dataEl.id;
			let sound = new SoundFile(dataEl.id, dataEl.path, (dataEl.loop=='true')?true:false, this._soundExtension);
			this._soundsData[id] = sound;
		}
    }

	private configExtension = () =>{
		let elem = document.createElement('audio');
		
		if(elem.canPlayType('audio/mpeg;') == "probably"){
			this._soundExtension = ".mp3";
		}else if(elem.canPlayType('audio/ogg; codecs="vorbis"') == "probably"){
			this._soundExtension = ".ogg";
		}else if(elem.canPlayType('audio/wav; codecs="1"') == "probably"){
			this._soundExtension = ".wav";
		}else if(elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;') == "probably"){
			this._soundExtension = ".m4a";
		}
	}

	private static config(){
		var request = new XMLHttpRequest();
            request.onload = this.getInstance().onDataLoaded;
            request.open("get", "../assets/sounds/sounds.json", true);
            request.send();
	}

	public playSoundByID = (id:string)=>{
		if(this._soundsData != undefined){
			if(this._soundsData[id]){
				this._soundsData[id].play();
			}else{
				console.warn('SOUND NOT FOUND ',id);
			}
		}else{
			setTimeout(this.playSoundByID, 200, id);
		}
	}

	public configMuteController = (el:Element) =>{
		let vol = new VolumeController(el);
	}

	public updateSoundsVolume = (volume:number) =>{
		Object.keys(this._soundsData).forEach((key)=>{
			this._soundsData[key].setVolume(volume);
		});
	}

	public static getInstance():SoundManager{
		if(!this._instance){
			this._instance = new this();
			this.config();
		}
		
		return this._instance;
	}
}

class SoundFile{
	private _audio;
	private _id:string;
	private _soundExtension:string;
	private _loop:boolean;
	constructor(private id: string, private path:string, private loop:boolean, private soundExtension:string) {
		this._id = id;
		this._soundExtension = soundExtension;
		this._loop = loop;
		this.loadSound(SOUND_BASE_PATH+path+this._soundExtension);
	}

	private loadSound = (path:string)=>{
		this._audio = new Audio(path);
		this._audio.autoplay = false;
		this._audio.preload = 'auto';
		this._audio.loop = this._loop;
		this._audio.autobuffer = true;  
	}

	public play=()=>{
		this._audio.play();
	}

	public setVolume=(volume:number)=>{
		this._audio.volume = volume;
	}
}

class VolumeController{
	private _baseElement;
	private _animationInterval;
	private _animating = false;
	private _targetVolume = 0;
	private _currVolume = 0;
	private _fadeVolumeInterval;

	constructor(private el:Element){
		this._baseElement = el;
		this.configItems();
		this._baseElement.addEventListener('click', this.configItems);
	}

	configItems=()=>{
		console.log('ASDASD')
        var items = this._baseElement.querySelectorAll('path');
        if(!items.length){
            setTimeout(this.configItems, 100);
            return false;
        }
		this.toggleVolume();
		this._animating = !this._animating;
        if(this._animating){
            this._animationInterval = setInterval(function(){
                var i = 0, len = 5;
                for(i; i <len; i++){
                    var intensity = Math.random()*1;
                    items[i].style.transform = 'scaleY('+intensity+')';
                }
            },250);
        }else{
            clearInterval(this._animationInterval);
			setTimeout(()=>{
				var i = 0, len = 5;
				for(i; i <len; i++){
					var intensity = 0.05;
					items[i].style.transform = 'scaleY('+intensity+')';
				}
			},300);
        }
    }

	toggleVolume=()=>{
		this._targetVolume = (this._targetVolume)?0:1;
		clearInterval(this._fadeVolumeInterval);
		this._fadeVolumeInterval = setInterval(()=>{
			if(this._targetVolume){
				this._currVolume += 0.1;
			}else{
				this._currVolume -= 0.1;
			}
			if(this._currVolume == this._targetVolume || (this._currVolume < 0 || (this._currVolume > this._targetVolume && this._targetVolume))){
				this._currVolume = this._targetVolume;
				clearInterval(this._fadeVolumeInterval);
			}
			SoundManager.getInstance().updateSoundsVolume(this._currVolume);

		},50);
	}
}