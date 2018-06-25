import { Injectable } from '@angular/core';

@Injectable()
export class ValueAnimator {
	private _start:number;
	private _currPos:number;
	private _targetPos:number;
	private _change:number;
	private _currentTime:number;
	private _increment:number;
	private _duration:number;
	private _callback:any;
	private _update:any;
	private _toDown:boolean;

	private _easeInOutQuad = (t, b, c, d):number => {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t + b
        }
        t--;
        return (-c / 2 * (t * (t - 2) - 1) + b).toPrecision(3);
    }

    private _easeInCubic = (t, b, c, d):number => {
        var tc = (t /= d) * t * t;
        return b + c * (tc);
    };

    private _inOutQuintic = (t, b, c, d):number => {
        var ts = (t /= d) * t,
            tc = ts * t;
        return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
    };

    public animeTo(start, to, callback, update, duration) {
        // because it's so fucking difficult to detect the scrolling element, just move them all
		this._start = start;
		this._targetPos = to;
        this._currPos = start;
        this._change = to - start;
        this._currentTime = 0;
        this._increment = 20;
        this._duration = (typeof (duration) === 'undefined') ? 500 : duration;
		this._callback = callback;
		this._update = update;
		console.log('starr ',start, ' to ',to);
		if(start>to){
			this._toDown = true;
		}else{
			this._toDown = false;
		}
        this.animateScroll();
	}

	private animateScroll = () => {
		// increment the time
		this._currentTime += this._increment;
		// find the value with the quadratic in-out easing function
		let val:number = this._easeInOutQuad(this._currentTime, this._currPos, this._change, this._duration);
		// move the document.body
		this.move(val);
		// do the animation unless its over
		// if (this._currentTime < this._duration) {
		if((this._toDown && this._currPos > this._targetPos) || (!this._toDown && this._currPos < this._targetPos)){
			window.requestAnimationFrame(this.animateScroll);
		} else {
			if (this._callback && typeof (this._callback) === 'function') {
				// the animation is done so lets callback
				this._callback();
			}
		}
	}

	private position = ():number => {
		return this._currPos;
	}
	
	private move = (amount) => {
		this._currPos = amount;
		this._update(this._currPos);
	}
}