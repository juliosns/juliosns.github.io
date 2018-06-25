import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class SvgManager {
	public getSvg(qSelector):Promise<any>{
		return new Promise<any>((resolve) => {
			let interval = setInterval(function(){
				let svgBase = document.querySelector(qSelector);
				if(svgBase){
            		resolve(svgBase); 
					clearInterval(interval);
				}
			},250);
       	})
	}
}