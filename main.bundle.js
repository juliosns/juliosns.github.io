webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_content_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(http, galerry, componentFactoryResolver, viewContainerRef, translate, activatedRoute, _router) {
        this.http = http;
        this.galerry = galerry;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this._router = _router;
        this.loadImage = function (path, callback) {
            var tmpImg;
            var loaded = function () {
                callback();
            };
            tmpImg = new Image();
            tmpImg.onload = loaded; // register the onload event
            tmpImg.src = path;
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var arr_url = location.href.split("/");
        this.translate.use(arr_url[3]);
        this.translate.setDefaultLang('en');
    };
    AppComponent.prototype.openGallery = function (close) {
        if (close == 1) {
            return false;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */]);
        var ref = this.viewContainerRef.createComponent(factory);
        ref['_component'].saveData(this.gal);
        ref['_component'].refCloseGallery(this.openGallery, this.viewContainerRef);
    };
    AppComponent.prototype.openContent = function (close) {
        if (close == 1) {
            return false;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__content_content_component__["a" /* ContentComponent */]);
        var ref = this.viewContainerRef.createComponent(factory);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(184),
        styles: [__webpack_require__(180)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_1__content_content_component__["a" /* ContentComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* ComponentFactoryResolver */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ViewContainerRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["d" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_svg_icon__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_translate__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(1);
/* unused harmony export translateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/en', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__["a" /* SplashComponent */] }
];
function translateLoader(http) { return new __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["a" /* TranslateStaticLoader */](http, './../assets/lang/', '.json'); }
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__["a" /* SplashComponent */],
        ],
        entryComponents: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_8_angular_svg_icon__["a" /* AngularSvgIconModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["c" /* TranslateLoader */],
                useFactory: translateLoader,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
            }),
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = (function () {
    function ContentComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.image = this.sanitizer.bypassSecurityTrustStyle('url(../../assets/images/component/1.jpg)');
    };
    ContentComponent.prototype.refCloseContent = function (func, ref) {
        this.refToClose = func;
        this.ref = ref;
    };
    ContentComponent.prototype.closeComponent = function () {
        this.ref.clear();
        this.refToClose(1);
    };
    ContentComponent.prototype.saveData = function (obj) {
        this.data = obj;
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__(185),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = (function () {
    function GalleryComponent(sanitizer) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.loadNextImage = function () {
            if (_this.menuImagesList.length) {
                var nextPath = _this.menuImagesList.shift();
                _this.loadImage(nextPath.urlGalleryImage, _this.loadNextImage);
            }
        };
        this.loadImage = function (path, callback) {
            var tmpImg;
            path = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CMS_IMG_URL + "original/" + path;
            var loaded = function () {
                callback();
            };
            tmpImg = new Image();
            tmpImg.onload = loaded; // register the onload event
            tmpImg.src = path;
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = this.sanitizer.bypassSecurityTrustStyle('url(' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CMS_IMG_URL + "/original/" + this.data[0].urlGalleryImage + ')');
        this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CMS_IMG_URL + "/original/" + this.data[1].urlGalleryImage + ')');
        this.title = this.data[0].titleGalleryImageDescription;
        this.desc = this.data[0].textGalleryImageDescription;
        this.current = 1;
        this.total = this.data.length;
        this.sectionBase = document.querySelector('#gallery');
        this.currImageObj = this.sectionBase.querySelector('div.image figure.current');
        this.nextImageObj = this.sectionBase.querySelector('div.image figure.next');
        this.menuImagesList = this.data.concat();
        this.loadNextImage();
        setTimeout(function () {
            _this.sectionBase.classList.add('in');
        }, 150);
    };
    GalleryComponent.prototype.nextItem = function () {
        if (this.current + 1 <= this.total) {
            this.current++;
            this.title = this.data[this.current - 1].titleGalleryImageDescription;
            this.desc = this.data[this.current - 1].textGalleryImageDescription;
            this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CMS_IMG_URL + "/original/" + this.data[this.current - 1].urlGalleryImage + ')');
            this.doChangeImages();
        }
    };
    GalleryComponent.prototype.lastItem = function () {
        if (this.current > 1) {
            this.current--;
            this.title = this.data[this.current - 1].titleGalleryImageDescription;
            this.desc = this.data[this.current - 1].textGalleryImageDescription;
            this.nextImage = this.sanitizer.bypassSecurityTrustStyle('url(' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CMS_IMG_URL + "/original/" + this.data[this.current - 1].urlGalleryImage + ')');
            this.doChangeImages();
        }
    };
    GalleryComponent.prototype.doChangeImages = function () {
        var _this = this;
        this.currImageObj.classList.add('out');
        this.nextImageObj.classList.add('in');
        var curr = this.image;
        var newI = this.nextImage;
        setTimeout(function () {
            _this.image = newI;
            _this.nextImage = curr;
            _this.currImageObj.classList.remove('out');
            _this.nextImageObj.classList.remove('in');
        }, 410);
    };
    GalleryComponent.prototype.refCloseGallery = function (func, ref) {
        this.refToClose = func;
        this.ref = ref;
    };
    GalleryComponent.prototype.closeGallery = function () {
        var _this = this;
        this.sectionBase.classList.remove('in');
        setTimeout(function () {
            _this.ref.clear();
            _this.refToClose(1);
        }, 500);
    };
    GalleryComponent.prototype.saveData = function (obj) {
        this.data = obj;
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__(186),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_value_animator__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_svg_manager__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SplashComponent = (function () {
    function SplashComponent(svgManager, valueAnimator, router) {
        var _this = this;
        this.svgManager = svgManager;
        this.valueAnimator = valueAnimator;
        this._onUp = true;
        this._currPos = 0.6;
        this._bottomActive = 1;
        this.onClickGo = function () {
            _this._bottomSvg['style']['opacity'] = '0';
            _this._bottomSvg['style']['pointer-events'] = 'none';
            _this._containerVideos.querySelector('.first-video')['style']['height'] = '80%';
            _this._topSvgBig.querySelector('#begin_button')['style']['opacity'] = '1';
            _this._topSvgBig.querySelector('#begin_button')['style']['pointer-events'] = 'auto';
            _this._topSvgBig.querySelector('#begin_button').addEventListener('click', function () {
                _this.router.navigate(['/en/experiences']);
            });
            _this.valueAnimator.animeTo(_this._currPos, 1, function () {
                // console.log('end da nasa');
            }, function (value) {
                _this._currPos = (value <= 1) ? value : 1;
                _this.resizeVideo();
            }, 10000);
        };
        this.configDrags = function () {
            _this.toggleAreaDrag(_this._bottomSvg, true);
            window.addEventListener('mouseup', _this.onEndDrag);
            window.addEventListener('touchend', _this.onEndDrag);
            window.addEventListener('resize', function () {
                _this.configCanvasRedraw();
                _this.resizeVideo();
            });
            _this.configCanvasRedraw();
            _this.resizeVideo();
        };
        this.toggleAreaDrag = function (area, active) {
            if (active) {
                area.addEventListener('mousedown', _this.onStartDrag);
                area.addEventListener('touchstart', _this.onStartDrag);
            }
            else {
                area.removeEventListener('mousedown', _this.onStartDrag);
                area.removeEventListener('touchstart', _this.onStartDrag);
            }
        };
        this.onStartDrag = function (event) {
            _this._activeDraging = event.currentTarget;
            _this._topSvgBig.querySelector('#mask-choco-big-svg').classList.remove('in');
            _this._bottomBigSvg.querySelector('#mask-our-content').classList.remove('in');
            if (_this._activeDraging.parentNode.parentNode.parentNode.className.match('second')) {
                _this._bottomActive = 1;
            }
            else {
                _this._bottomActive = 0;
            }
            _this._activeDraging.classList.add('active');
            _this._posStart = event.clientY || event.touches[0].pageY;
            _this._topDifference = 0;
            window.addEventListener('mousemove', _this.onMouseMove);
            window.addEventListener('touchmove', _this.onMouseMove);
        };
        this.onEndDrag = function () {
            if (_this._activeDraging) {
                _this._activeDraging.classList.remove('active');
                _this._activeDraging = null;
            }
            window.removeEventListener('mousemove', _this.onMouseMove);
            window.removeEventListener('touchmove', _this.onMouseMove);
            if (_this._currPos > .45) {
                _this.toggleAreaDrag(_this._topSvg, false);
                _this.toggleAreaDrag(_this._bottomSvg, true);
                var interval_1 = setInterval(function () {
                    if (_this._currPos >= 0.6) {
                        clearInterval(interval_1);
                    }
                    else {
                        _this._currPos += 0.03;
                    }
                    _this.updateIllustras();
                    _this.resizeVideo();
                }, 50);
            }
            else {
                _this.toggleAreaDrag(_this._topSvg, true);
                _this.toggleAreaDrag(_this._bottomSvg, false);
                var interval_2 = setInterval(function () {
                    if (_this._currPos <= 0.3) {
                        clearInterval(interval_2);
                    }
                    else {
                        _this._currPos -= 0.03;
                    }
                    _this.updateIllustras();
                    _this.resizeVideo();
                }, 50);
            }
        };
        this.onMouseMove = function (event) {
            var posY = event.clientY || event.touches[0].pageY;
            var dif = ((posY - _this._posStart) /*/2*/) + _this._topDifference;
            if (dif != 0) {
                _this._posStart = posY;
                _this._currPos = _this._currPos + (dif * 1) / _this._windowH;
                _this._currPos = ((_this._currPos < 0.3) ? 0.3 : (_this._currPos > 0.6) ? 0.6 : _this._currPos);
                if (_this._bottomActive) {
                    if (_this._currPos < 0.4) {
                        _this.triggerGo(0.3);
                    }
                }
                else {
                    if (_this._currPos > 0.5) {
                        _this.triggerGo(0.6);
                    }
                }
                _this.resizeVideo();
            }
        };
        this.resizeVideo = function () {
            _this._sourceWF = _this._videoTop.getAttribute('data-width');
            _this._sourceHF = _this._videoTop.getAttribute('data-height');
            _this._sourceWS = _this._videoBottom.getAttribute('data-width');
            _this._sourceHS = _this._videoBottom.getAttribute('data-height');
            _this._targetW = _this._canvas.offsetWidth;
            _this._targetHF = _this._canvas.offsetHeight * _this._currPos;
            _this._targetHS = _this._canvas.offsetHeight * (1 - _this._currPos);
            _this._multiplicatorF = _this._sourceWF / _this._targetW;
            _this._firstH = _this._canvas.offsetHeight * _this._currPos;
            _this._secondtH = _this._canvas.offsetHeight * (1 - _this._currPos);
            _this._drawSTF = (_this._sourceHS / 2) - _this._firstH / 2;
            _this._drawSHF = (_this._firstH * _this._sourceWF) / _this._targetW;
            _this._drawSTS = (_this._sourceHS / 2) - _this._secondtH / 2;
            _this._drawSHS = (_this._secondtH * _this._sourceWS) / _this._targetW;
            _this._drawSTF = (_this._drawSTF > 0) ? _this._drawSTF : 0;
        };
        this.configCanvasRedraw = function () {
            _this._canvasContext = _this._canvas.getContext('2d');
            _this._canvas.setAttribute('width', window.innerWidth);
            _this._canvas.setAttribute('height', window.innerHeight);
            _this._timeInterval = 1000 / 22;
            _this._then = Date.now();
            cancelAnimationFrame(_this._frameAnimation);
            _this.onUpdate();
        };
        this.onUpdate = function () {
            requestAnimationFrame(_this.onUpdate);
            _this._now = Date.now();
            _this._elapsed = _this._now - _this._then;
            if (_this._elapsed > _this._timeInterval) {
                _this._then = _this._now - (_this._elapsed % _this._timeInterval);
                _this.redrawVideo();
                if (_this._activeDraging) {
                    _this.updateIllustras();
                }
            }
        };
        this.triggerGo = function (pos) {
            if (_this._activeDraging) {
                var actDrg_1 = _this._activeDraging;
                setTimeout(function () {
                    actDrg_1.classList.remove('active');
                }, 1000);
                _this._activeDraging = null;
            }
            window.removeEventListener('mousemove', _this.onMouseMove);
            window.removeEventListener('touchmove', _this.onMouseMove);
            _this.valueAnimator.animeTo(_this._currPos, pos, _this.endAnimation, _this.updateAnimation, 1000);
        };
        this.updateAnimation = function (value) {
            _this._currPos = value;
            _this.resizeVideo();
            _this.updateIllustras();
        };
        // this._topSvgBig.querySelector('#mask-choco-big-svg')
        // this._bottomBigSvg.querySelector('#mask-our-content')
        this.endAnimation = function () {
            _this._bottomActive = (_this._bottomActive) ? 0 : 1;
            if (_this._bottomActive) {
                setTimeout(function () {
                    _this._topBigContainer['style']['opacity'] = '1';
                    _this._topBigContainer['style']['pointer-events'] = 'auto';
                }, 500);
                _this._topContainer['style']['opacity'] = '0';
                _this._topContainer['style']['pointer-events'] = 'none';
                //reset top pos
                _this._topSvg.querySelector('#point')['style'].transform = 'translateY(0px)';
                _this._topSvg.querySelector('#mask-cocoa rect')['style'].transform = 'translateY(0px)';
                _this._bottomContainer['style']['opacity'] = '1';
                _this._bottomContainer['style']['pointer-events'] = 'auto';
                _this._bottomBigContainer['style']['opacity'] = '0';
                _this._bottomBigContainer['style']['pointer-events'] = 'none';
                _this.doBigTextEnter(_this._topSvgBig.querySelector('#mask-choco-big-svg'), 1000);
            }
            else {
                setTimeout(function () {
                    //reset bottom pos
                    _this._bottomSvg.querySelector('#point')['style'].transform = 'translateY(0px)';
                    _this._bottomSvg.querySelector('#mask rect')['style'].transform = 'translateY(-60px)';
                    _this._topContainer['style']['opacity'] = '1';
                    _this._topContainer['style']['pointer-events'] = 'auto';
                }, 500);
                _this._topBigContainer['style']['opacity'] = '0';
                _this._topBigContainer['style']['pointer-events'] = 'none';
                _this._bottomContainer['style']['opacity'] = '0';
                _this._bottomContainer['style']['pointer-events'] = 'none';
                _this._bottomBigContainer['style']['opacity'] = '1';
                _this._bottomBigContainer['style']['pointer-events'] = 'auto';
                _this.doBigTextEnter(_this._bottomBigSvg.querySelector('#mask-our-content'), 500);
            }
        };
        this.doBigTextEnter = function (svgNode, delay) {
            delay = delay || 0;
            setTimeout(function () {
                svgNode.classList.add('in');
            }, delay);
        };
        this.redrawVideo = function () {
            //CLEAR
            // Store the current transformation matrix
            _this._canvasContext.save();
            // Use the identity matrix while clearing the canvas
            _this._canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            _this._canvasContext.clearRect(0, 0, _this._canvas.offsetWidth, _this._canvas.offsetHeight);
            // Restore the transform
            _this._canvasContext.restore();
            //END CLEAR
            // this._canvasContext.drawImage(this._videoTop, 0, (this._sourceHS/2)-this._firstH/2, this._sourceWF, (this._firstH*this._sourceWF)/this._targetW, 0, 0, this._targetW, this._firstH);
            // this._canvasContext.drawImage(this._videoBottom, 0, (this._sourceHS/2)-this._secondtH/2, this._sourceWS, (this._secondtH*this._sourceWS)/this._targetW, 0, this._firstH, this._targetW, this._secondtH);
            _this._canvasContext.drawImage(_this._videoTop, 0, _this._drawSTF, _this._sourceWF, _this._drawSHF, 0, 0, _this._targetW, _this._firstH);
            _this._canvasContext.drawImage(_this._videoBottom, 0, _this._drawSTS, _this._sourceWS, _this._drawSHS, 0, _this._firstH, _this._targetW, _this._secondtH);
        };
        this.router = router;
    }
    SplashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svgManager.getSvg('#splash .first-video .video-content svg').then((function (topBase) {
            _this._topSvgBig = topBase;
            _this._topSvgBig.addEventListener('click', _this.onClickGo);
            _this.doBigTextEnter(topBase.querySelector('#mask-choco-big-svg'), 500);
            _this.svgManager.getSvg('#splash .first-video .video-content-small svg').then((function (topBaseSmall) {
                _this._topSvg = topBaseSmall;
            }));
            _this._topContainer = document.querySelector('#splash .first-video .video-content-small');
            _this._topBigContainer = document.querySelector('#splash .first-video .video-content');
            _this._bottomContainer = document.querySelector('#splash .second-video .video-content');
            _this._bottomBigContainer = document.querySelector('#splash .second-video .video-content-big');
            _this.svgManager.getSvg('#splash .second-video .video-content-big svg').then((function (bottomBigBase) {
                _this._bottomBigSvg = bottomBigBase;
                var paths = _this._bottomBigSvg.querySelectorAll('path');
                for (var i = 0; i < paths.length; i++) {
                    paths[i].style['stroke-dasharray'] = paths[i].getTotalLength();
                    paths[i].style['stroke-dashoffset'] = paths[i].getTotalLength();
                }
            }));
            _this.svgManager.getSvg('#splash .second-video .video-content svg').then((function (bottomBase) {
                _this._bottomSvg = bottomBase;
                _this._containerVideos = document.querySelector('#splash');
                _this._windowH = window.innerHeight;
                _this._videoTop = _this._containerVideos.querySelector('.first-video video');
                _this._videoBottom = _this._containerVideos.querySelector('.second-video video');
                _this._canvas = _this._containerVideos.querySelector('#canvas-da-nasa');
                _this.configDrags();
                _this.configCanvasRedraw();
            }));
        }));
    };
    SplashComponent.prototype.updateIllustras = function () {
        var pos = ((this._currPos - 0.3) * 333.3);
        pos = (pos > 0) ? pos : 0;
        if (this._bottomActive) {
            this.updateBottom(pos);
        }
        else {
            this.updateTop(pos);
        }
    };
    //bottom slide
    SplashComponent.prototype.updateBottom = function (pos) {
        var perc = 100 - pos;
        var maskPerc = perc + 60;
        this._bottomSvg.querySelector('#point')['style'].transform = 'translateY(-' + perc + 'px)';
        this._bottomSvg.querySelector('#mask rect')['style'].transform = 'translateY(-' + maskPerc + 'px)';
        //lettering animation
        var paths = this._topSvgBig.querySelector('#mask-choco-big-svg').querySelectorAll('path');
        var pathPerc = (perc <= 100) ? (perc > 0) ? perc : 0 : 100;
        this._bottomSvg.querySelector('#mask rect')['style'].opacity = (100 - pathPerc) / 100;
        for (var i = 0; i < paths.length; i++) {
            var full = +paths[i].getAttribute('data-full') || 0;
            var total = paths[i].getTotalLength();
            var pos_1 = full + ((1000 / (total - full)) * pathPerc);
            pos_1 = (pos_1 < total) ? pos_1 : total;
            paths[i]['style']['stroke-dashoffset'] = pos_1;
        }
    };
    //top slide
    SplashComponent.prototype.updateTop = function (pos) {
        var perc = pos;
        var pointPerc = perc;
        var maskPerc = perc;
        this._topSvg.querySelector('#point')['style'].transform = 'translateY(' + (pointPerc) + 'px)';
        this._topSvg.querySelector('#mask-cocoa rect')['style'].transform = 'translateY(' + maskPerc + 'px)';
        //lettering animation
        var paths = this._bottomBigSvg.querySelector('#mask-our-content').querySelectorAll('path');
        var pathPerc = (perc <= 100) ? (perc > 0) ? perc : 0 : 100;
        this._topSvg.querySelector('#mask-cocoa rect')['style'].opacity = (100 - pathPerc) / 100;
        for (var i = 0; i < paths.length; i++) {
            var full = +paths[i].getAttribute('data-full') || 0;
            var total = paths[i].getTotalLength();
            var pos_2 = full + ((1000 / (total - full)) * pathPerc);
            pos_2 = (pos_2 < total) ? pos_2 : total;
            paths[i]['style']['stroke-dashoffset'] = pos_2;
        }
    };
    return SplashComponent;
}());
SplashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* Component */])({
        selector: 'app-splash',
        template: __webpack_require__(187),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_shared_svg_manager__["a" /* SvgManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_shared_svg_manager__["a" /* SvgManager */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_value_animator__["a" /* ValueAnimator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_value_animator__["a" /* ValueAnimator */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SplashComponent);

var _a, _b, _c;
//# sourceMappingURL=splash.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentSuffix; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentSuffix = ComponentSuffix_1 = (function () {
    function ComponentSuffix() {
    }
    ComponentSuffix.prototype.getSuffix = function () {
        return this._suffix;
    };
    ComponentSuffix.prototype.setSuffix = function (suffix) {
        this._suffix = suffix;
    };
    ComponentSuffix.config = function () {
        var winW = window.screenX;
        window.addEventListener('resize', onResize);
        onResize(null);
        function onResize(event) {
            winW = window.innerWidth;
            console.log('resize ', winW);
            if (winW > 600 && (ComponentSuffix_1.getInstance().getSuffix() == '-mob' || !event)) {
                if (event)
                    console.log('NEED RELOAD ^');
                ComponentSuffix_1.getInstance().setSuffix('');
            }
            else if (winW < 600 && ComponentSuffix_1.getInstance().getSuffix() == '' || !event) {
                if (event)
                    console.log('NEED RELOAD v');
                ComponentSuffix_1.getInstance().setSuffix('-mob');
            }
        }
    };
    ComponentSuffix.getInstance = function () {
        if (!this._instance) {
            this._instance = new this();
            this.config();
        }
        return this._instance;
    };
    return ComponentSuffix;
}());
ComponentSuffix = ComponentSuffix_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ComponentSuffix);

var ComponentSuffix_1;
//# sourceMappingURL=component.suffix.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_animator__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound_manager__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_suffix__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_manager__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3__svg_manager__["a" /* SvgManager */], __WEBPACK_IMPORTED_MODULE_2__component_suffix__["a" /* ComponentSuffix */], __WEBPACK_IMPORTED_MODULE_1__sound_manager__["a" /* SoundManager */], __WEBPACK_IMPORTED_MODULE_0__value_animator__["a" /* ValueAnimator */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SOUND_BASE_PATH = "../assets/sounds/";
var SoundManager = (function () {
    function SoundManager() {
        var _this = this;
        this.onDataLoaded = function (response) {
            _this.configExtension();
            _this._soundsData = new Array();
            var data = JSON.parse(response.srcElement.responseText);
            var i = 0, len = data.length;
            for (i; i < len; i++) {
                var dataEl = data[i];
                var id = dataEl.id;
                var sound = new SoundFile(dataEl.id, dataEl.path, (dataEl.loop == 'true') ? true : false, _this._soundExtension);
                _this._soundsData[id] = sound;
            }
        };
        this.configExtension = function () {
            var elem = document.createElement('audio');
            // console.log('mp3', elem.canPlayType('audio/mpeg;'));
            // console.log('ogg', elem.canPlayType('audio/ogg; codecs="vorbis"'));
            // console.log('wav', elem.canPlayType('audio/wav; codecs="1"'));
            // console.log('m4a', elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;'));
            if (elem.canPlayType('audio/mpeg;') == "probably") {
                _this._soundExtension = ".mp3";
            }
            else if (elem.canPlayType('audio/ogg; codecs="vorbis"') == "probably") {
                _this._soundExtension = ".ogg";
            }
            else if (elem.canPlayType('audio/wav; codecs="1"') == "probably") {
                _this._soundExtension = ".wav";
            }
            else if (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;') == "probably") {
                _this._soundExtension = ".m4a";
            }
        };
        this.playSoundByID = function (id) {
            if (_this._soundsData != undefined) {
                if (_this._soundsData[id]) {
                    _this._soundsData[id].play();
                }
                else {
                    console.warn('SOUND NOT FOUND ', id);
                }
            }
            else {
                setTimeout(_this.playSoundByID, 200, id);
            }
        };
        this.configMuteController = function (el) {
            var vol = new VolumeController(el);
        };
        this.updateSoundsVolume = function (volume) {
            Object.keys(_this._soundsData).forEach(function (key) {
                _this._soundsData[key].setVolume(volume);
            });
        };
    }
    SoundManager.config = function () {
        var request = new XMLHttpRequest();
        request.onload = this.getInstance().onDataLoaded;
        request.open("get", "../assets/sounds/sounds.json", true);
        request.send();
    };
    SoundManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new this();
            this.config();
        }
        return this._instance;
    };
    return SoundManager;
}());
SoundManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SoundManager);

var SoundFile = (function () {
    function SoundFile(id, path, loop, soundExtension) {
        var _this = this;
        this.id = id;
        this.path = path;
        this.loop = loop;
        this.soundExtension = soundExtension;
        this.loadSound = function (path) {
            _this._audio = new Audio(path);
            _this._audio.autoplay = false;
            _this._audio.preload = 'auto';
            _this._audio.loop = _this._loop;
            _this._audio.autobuffer = true;
        };
        this.play = function () {
            _this._audio.play();
        };
        this.setVolume = function (volume) {
            _this._audio.volume = volume;
        };
        this._id = id;
        this._soundExtension = soundExtension;
        this._loop = loop;
        this.loadSound(SOUND_BASE_PATH + path + this._soundExtension);
    }
    return SoundFile;
}());
var VolumeController = (function () {
    function VolumeController(el) {
        var _this = this;
        this.el = el;
        this._animating = false;
        this._targetVolume = 0;
        this._currVolume = 0;
        this.configItems = function () {
            var items = _this._baseElement.querySelectorAll('path');
            if (!items.length) {
                setTimeout(_this.configItems, 100);
                return false;
            }
            _this.toggleVolume();
            _this._animating = !_this._animating;
            if (_this._animating) {
                _this._animationInterval = setInterval(function () {
                    var i = 0, len = 5;
                    for (i; i < len; i++) {
                        var intensity = Math.random() * 1;
                        items[i].style.transform = 'scaleY(' + intensity + ')';
                    }
                }, 250);
            }
            else {
                clearInterval(_this._animationInterval);
                setTimeout(function () {
                    var i = 0, len = 5;
                    for (i; i < len; i++) {
                        var intensity = 0.05;
                        items[i].style.transform = 'scaleY(' + intensity + ')';
                    }
                }, 300);
            }
        };
        this.toggleVolume = function () {
            _this._targetVolume = (_this._targetVolume) ? 0 : 1;
            clearInterval(_this._fadeVolumeInterval);
            _this._fadeVolumeInterval = setInterval(function () {
                if (_this._targetVolume) {
                    _this._currVolume += 0.1;
                }
                else {
                    _this._currVolume -= 0.1;
                }
                if (_this._currVolume == _this._targetVolume || (_this._currVolume < 0 || (_this._currVolume > _this._targetVolume && _this._targetVolume))) {
                    _this._currVolume = _this._targetVolume;
                    clearInterval(_this._fadeVolumeInterval);
                }
                SoundManager.getInstance().updateSoundsVolume(_this._currVolume);
            }, 50);
        };
        this._baseElement = el;
        this.configItems();
        this._baseElement.addEventListener('click', this.configItems);
    }
    return VolumeController;
}());
//# sourceMappingURL=sound.manager.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow: hidden; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nheader, footer {\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently not supported by any browser */ }\n\nheader {\n  height: 80px;\n  top: 0;\n  padding-top: 27px;\n  display: block; }\n  header div.header-content {\n    max-width: 1820px;\n    width: 100%;\n    height: 100%;\n    display: block;\n    margin: 0 auto; }\n    header div.header-content span.header-content-logo {\n      display: inline-block;\n      width: 246px;\n      height: 40px; }\n      header div.header-content span.header-content-logo svg-icon {\n        width: 100%;\n        height: 100%; }\n        header div.header-content span.header-content-logo svg-icon /deep/.cls-1 {\n          fill: #FFF; }\n    header div.header-content div.header-content-menu {\n      float: right;\n      line-height: 42px;\n      /* Style for \"menu\" */\n      color: #ffffff;\n      font-family: \"humanst521_btroman\";\n      font-size: 12px;\n      letter-spacing: 0.1em;\n      text-transform: uppercase;\n      cursor: pointer; }\n\nfooter {\n  bottom: 0;\n  height: 44px;\n  background: transparent;\n  text-align: center; }\n  footer .footer-content {\n    max-width: 1820px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -ms-flex-flow: row wrap;\n    -o-flex-flow: row wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -mozjustify-content: space-between;\n    -webkit-justify-content: space-between;\n    -ms-justify-content: space-between;\n    -o-justify-content: space-between;\n    height: 100%;\n    background: transparent;\n    width: 100%; }\n    footer .footer-content .content-left {\n      width: 103px;\n      height: 20px;\n      margin-top: 7px;\n      background: #000; }\n    footer .footer-content .content-right {\n      width: 20px;\n      height: 20px;\n      margin-top: 7px;\n      cursor: pointer; }\n      footer .footer-content .content-right svg-icon {\n        width: 100%; }\n        footer .footer-content .content-right svg-icon /deep/ path {\n          -webkit-transform-origin: center bottom;\n                  transform-origin: center bottom;\n          transition: -webkit-transform 0.15s ease-out;\n          transition: transform 0.15s ease-out;\n          transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n          fill: #AA927F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section#content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 700;\n  top: 0;\n  left: 0;\n  background: green; }\n  section#content div.image {\n    width: 100%;\n    position: fixed;\n    height: 100%;\n    display: block; }\n    section#content div.image figure {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background-size: cover;\n      background-position: center; }\n  section#content div.content {\n    max-width: 1200px;\n    width: 100%;\n    height: 95%;\n    background-color: #fff;\n    position: relative;\n    top: 24px;\n    margin-right: 20px;\n    float: right;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section#gallery div.slider-box {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%); }\n\n.hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow: hidden; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nsection#gallery {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 900;\n  top: 0;\n  left: 0;\n  background-color: #1e1e1e;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.35s ease-out; }\n  section#gallery.in {\n    opacity: 1; }\n    section#gallery.in .close-btn {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    section#gallery.in div.slider-box div.slider-left, section#gallery.in div.slider-box div.slider-right {\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%); }\n  section#gallery .close-btn {\n    position: absolute;\n    right: 0;\n    top: 36px;\n    width: 150px;\n    height: 63px;\n    background-image: linear-gradient(to top, #1c1c1c 0%, #2f2f2f 82%, #2f2f2f 100%);\n    background-color: #2f2f2f;\n    cursor: pointer;\n    z-index: 15;\n    will-change: transform;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: -webkit-transform 0.25s ease-out .2s;\n    transition: transform 0.25s ease-out .2s;\n    transition: transform 0.25s ease-out .2s, -webkit-transform 0.25s ease-out .2s; }\n    section#gallery .close-btn p {\n      color: #ccbdb2;\n      font-family: \"crimsonitalic\";\n      font-size: 15px;\n      letter-spacing: 0.3em;\n      text-align: center;\n      line-height: 65px;\n      text-indent: 22px; }\n      section#gallery .close-btn p:after {\n        content: '';\n        background-color: #ccbdb2;\n        width: 24px;\n        height: 1px;\n        position: absolute;\n        left: 19px;\n        top: 33px; }\n  section#gallery .image {\n    width: 100%;\n    height: 100%;\n    display: block; }\n    section#gallery .image figure {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background-size: cover !important;\n      background-position: center center !important;\n      background-repeat: no-repeat !important;\n      position: relative;\n      will-change: opacity;\n      position: absolute;\n      top: 0px;\n      left: 0px; }\n      section#gallery .image figure.current {\n        z-index: 10; }\n        section#gallery .image figure.current.out {\n          transition: opacity .4s ease-out;\n          opacity: 0; }\n      section#gallery .image figure.next {\n        opacity: 0;\n        z-index: 5; }\n        section#gallery .image figure.next.in {\n          transition: opacity .4s ease-out .1s;\n          opacity: 1; }\n  section#gallery div.slider-box {\n    max-width: 1000px;\n    width: 100%;\n    height: 150px;\n    display: inline-table;\n    position: absolute;\n    bottom: 0;\n    z-index: 15; }\n    section#gallery div.slider-box div.slider-left, section#gallery div.slider-box div.slider-right {\n      display: table-cell;\n      width: 50%;\n      height: 151px;\n      background: red; }\n    section#gallery div.slider-box div.slider-left {\n      padding: 24px  49px 36px 29px;\n      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.15) 82%, rgba(255, 255, 255, 0.15) 100%);\n      background-color: #e6ddd6;\n      will-change: transform;\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%);\n      transition: -webkit-transform 0.25s ease-out .3s;\n      transition: transform 0.25s ease-out .3s;\n      transition: transform 0.25s ease-out .3s, -webkit-transform 0.25s ease-out .3s; }\n      section#gallery div.slider-box div.slider-left p.slider-title {\n        color: #f3792d;\n        font-family: \"crimsonroman\";\n        font-size: 24px;\n        margin-bottom: 19px; }\n      section#gallery div.slider-box div.slider-left p.slider-desc {\n        color: #2f2f2f;\n        font-family: \"crimsonitalic\";\n        font-size: 15px; }\n    section#gallery div.slider-box div.slider-right {\n      background-image: linear-gradient(to top, #1c1c1c 0%, #2f2f2f 82%, #2f2f2f 100%);\n      background-color: #2f2f2f;\n      will-change: transform;\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%);\n      transition: -webkit-transform 0.25s ease-out .4s;\n      transition: transform 0.25s ease-out .4s;\n      transition: transform 0.25s ease-out .4s, -webkit-transform 0.25s ease-out .4s; }\n      section#gallery div.slider-box div.slider-right div.slider-content {\n        width: 240px;\n        height: 47px;\n        margin: 0 auto;\n        margin-top: 52px; }\n        section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left {\n          float: left;\n          width: 7px;\n          cursor: pointer;\n          height: 100%; }\n          section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left svg-icon {\n            width: 100%;\n            height: auto;\n            margin-top: 16px; }\n            section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left svg-icon /deep/ svg {\n              width: 100%;\n              height: auto;\n              transform: scaleX(-1);\n              -moz-transform: scaleX(-1);\n              -webkit-transform: scaleX(-1);\n              -ms-transform: scaleX(-1);\n              -o-transform: scaleX(-1); }\n        section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator {\n          width: 41px;\n          height: 47px;\n          float: left;\n          margin-left: 100px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator p.current {\n            color: #ccbdb2;\n            font-family: \"crimsonroman\";\n            font-size: 30px;\n            line-height: 20px;\n            text-indent: 6px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator span.divisor {\n            width: 45px;\n            height: 1px;\n            display: block;\n            background-color: #89674d;\n            transform: rotate(-40deg);\n            -moz-transform: rotate(-40deg);\n            -webkit-transform: rotate(-40deg);\n            -ms-transform: rotate(-40deg);\n            -o-transform: rotate(-40deg);\n            margin-top: 7px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator p.total {\n            color: #ccbdb2;\n            font-family: \"crimsonroman\";\n            font-size: 18px;\n            text-indent: 24px; }\n        section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right {\n          float: right;\n          width: 7px;\n          cursor: pointer;\n          height: 100%; }\n          section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right svg-icon {\n            width: 100%;\n            height: auto;\n            margin-top: 16px; }\n            section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right svg-icon /deep/ svg {\n              width: 100%;\n              height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow: hidden; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nsection#splash {\n  width: 100%;\n  height: 100vh; }\n  section#splash * {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Chrome/Safari/Opera */\n    /* Konqueror */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently not supported by any browser */ }\n  section#splash #canvas-da-nasa {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    pointer-events: none; }\n  section#splash div.video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: height 0.2s ease-out;\n    -ms-transition: height 0.2s ease-out; }\n    section#splash div.video video {\n      display: none;\n      /* Make video to at least 100% wide and tall */\n      min-width: 100%;\n      min-height: 100%;\n      /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n      width: auto;\n      height: auto;\n      /* Center the video */\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n    section#splash div.video .video-content {\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      -moz-transform: translateX(-50%);\n      -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n      -o-transform: translateX(-50%);\n      z-index: 1; }\n    section#splash div.video.first-video {\n      height: 70%;\n      z-index: 2;\n      transition: height 1s ease-in-out 0.3s; }\n      section#splash div.video.first-video .video-content {\n        bottom: 129px;\n        width: 336px;\n        height: 304px; }\n        section#splash div.video.first-video .video-content svg-icon {\n          cursor: pointer; }\n          section#splash div.video.first-video .video-content svg-icon /deep/\n#begin_button {\n            -webkit-transform: translate(104px, 280px);\n                    transform: translate(104px, 280px);\n            opacity: 0;\n            pointer-events: none;\n            transition: opacity 0.25s ease-out 1.25s; }\n            section#splash div.video.first-video .video-content svg-icon /deep/\n#begin_button .text-begin {\n              fill: #564638;\n              font-family: 'Crimson-Roman';\n              font-size: 17px;\n              letter-spacing: 5px; }\n          section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path {\n            stroke-width: 10;\n            stroke: #FFF;\n            fill-opacity: 0;\n            transition: stroke-dashoffset 0.5s ease-out, fill-opacity 0.5s ease-out; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(1) {\n              stroke-dasharray: 125;\n              stroke-dashoffset: 125; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(2) {\n              stroke-dasharray: 62;\n              stroke-dashoffset: 62; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(3) {\n              stroke-dasharray: 1012;\n              stroke-dashoffset: 1012; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(4) {\n              stroke-dasharray: 1425;\n              stroke-dashoffset: 1425; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(5) {\n              stroke-dasharray: 1246;\n              stroke-dashoffset: 1246; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(6) {\n              stroke-dasharray: 106;\n              stroke-dashoffset: 106; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(7) {\n              stroke-dasharray: 1514;\n              stroke-dashoffset: 1514; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(8) {\n              stroke-dasharray: 62;\n              stroke-dashoffset: 62; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(9) {\n              stroke-dasharray: 333;\n              stroke-dashoffset: 333; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg path:nth-child(10) {\n              stroke-dasharray: 62;\n              stroke-dashoffset: 62; }\n          section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path {\n            transition: stroke-dashoffset 2s ease-out; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(1) {\n              stroke-dashoffset: 85 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(2) {\n              stroke-dashoffset: 30 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(3) {\n              stroke-dashoffset: 980 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(4) {\n              stroke-dashoffset: 1255 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(5) {\n              stroke-dashoffset: 1126 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(6) {\n              stroke-dashoffset: 80 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(7) {\n              stroke-dashoffset: 1235 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(8) {\n              stroke-dashoffset: 30 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(9) {\n              stroke-dashoffset: 250 !important; }\n            section#splash div.video.first-video .video-content svg-icon #mask-choco-big-svg.in path:nth-child(10) {\n              stroke-dashoffset: 30 !important; }\n      section#splash div.video.first-video .video-content-small {\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        z-index: 1;\n        top: 80px;\n        width: 364px;\n        height: 177px;\n        opacity: 0;\n        pointer-events: none;\n        transition: opacity 0.3s ease-out; }\n        section#splash div.video.first-video .video-content-small.active {\n          opacity: 1;\n          pointer-events: auto; }\n        section#splash div.video.first-video .video-content-small svg-icon {\n          cursor: pointer;\n          width: 364px;\n          height: 177px; }\n          section#splash div.video.first-video .video-content-small svg-icon /deep/ svg {\n            width: 364px;\n            height: 177px; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st0 {\n              fill: #22A813; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st1 {\n              enable-background: new; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st2 {\n              fill: #E9E0D9; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st3 {\n              fill: #FFFEFE; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st4 {\n              fill: #FFFFFF; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st5 {\n              opacity: 0.9804; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st6 {\n              opacity: 0.6; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg .st7 {\n              fill: #FBFBFB; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg path, section#splash div.video.first-video .video-content-small svg-icon /deep/ svg g {\n              -webkit-transform-origin: center center;\n                      transform-origin: center center; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg #haute {\n              opacity: 1;\n              transition: opacity 0.25s ease-out, -webkit-transform 0.25s ease out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease out, -webkit-transform 0.25s ease out; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg #from {\n              opacity: 1;\n              transition: opacity 0.25s ease-out 0.1s, -webkit-transform 0.25s ease-out 0.1s;\n              transition: opacity 0.25s ease-out 0.1s, transform 0.25s ease-out 0.1s;\n              transition: opacity 0.25s ease-out 0.1s, transform 0.25s ease-out 0.1s, -webkit-transform 0.25s ease-out 0.1s; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg #drag {\n              opacity: 0;\n              -webkit-transform-origin: center center;\n                      transform-origin: center center;\n              -webkit-transform: scale(1.5);\n                      transform: scale(1.5);\n              transition: opacity 0.25s ease-out, -webkit-transform 0.25s ease-out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease-out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out; }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg:hover #haute, section#splash div.video.first-video .video-content-small svg-icon /deep/ svg:hover #from, section#splash div.video.first-video .video-content-small svg-icon /deep/ svg.active #haute, section#splash div.video.first-video .video-content-small svg-icon /deep/ svg.active #from {\n              opacity: 0;\n              -webkit-transform: scale(0.5);\n                      transform: scale(0.5); }\n            section#splash div.video.first-video .video-content-small svg-icon /deep/ svg:hover #drag, section#splash div.video.first-video .video-content-small svg-icon /deep/ svg.active #drag {\n              transition: opacity 0.25s ease-out 0.2s, -webkit-transform 0.25s ease-out 0.2s;\n              transition: opacity 0.25s ease-out 0.2s, transform 0.25s ease-out 0.2s;\n              transition: opacity 0.25s ease-out 0.2s, transform 0.25s ease-out 0.2s, -webkit-transform 0.25s ease-out 0.2s;\n              opacity: 1;\n              -webkit-transform: scale(1);\n                      transform: scale(1); }\n    section#splash div.video.second-video {\n      bottom: 0;\n      top: inherit;\n      height: 29.8%; }\n      section#splash div.video.second-video .video-content {\n        bottom: 80px;\n        width: 144px;\n        height: 160px;\n        transition: opacity 0.2s ease-out; }\n        section#splash div.video.second-video .video-content svg-icon {\n          cursor: pointer; }\n          section#splash div.video.second-video .video-content svg-icon /deep/ svg {\n            -webkit-touch-callout: none;\n            /* iOS Safari */\n            -webkit-user-select: none;\n            /* Chrome/Safari/Opera */\n            /* Konqueror */\n            -moz-user-select: none;\n            /* Firefox */\n            -ms-user-select: none;\n            /* Internet Explorer/Edge */\n            user-select: none;\n            /* Non-prefixed version, currently not supported by any browser */\n            width: 144px;\n            height: 160px; }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg path {\n              -webkit-transform-origin: center center;\n                      transform-origin: center center; }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg #our {\n              opacity: 1;\n              transition: opacity 0.25s ease-out, -webkit-transform 0.25s ease out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease out, -webkit-transform 0.25s ease out; }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg #chocolate {\n              opacity: 1;\n              transition: opacity 0.25s ease-out 0.1s, -webkit-transform 0.25s ease-out 0.1s;\n              transition: opacity 0.25s ease-out 0.1s, transform 0.25s ease-out 0.1s;\n              transition: opacity 0.25s ease-out 0.1s, transform 0.25s ease-out 0.1s, -webkit-transform 0.25s ease-out 0.1s; }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg #drag {\n              opacity: 0;\n              -webkit-transform-origin: center center;\n                      transform-origin: center center;\n              -webkit-transform: scale(1.5) translate(2px, 56px);\n                      transform: scale(1.5) translate(2px, 56px);\n              transition: opacity 0.25s ease-out, -webkit-transform 0.25s ease-out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease-out;\n              transition: opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out; }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg:hover #our, section#splash div.video.second-video .video-content svg-icon /deep/ svg:hover #chocolate, section#splash div.video.second-video .video-content svg-icon /deep/ svg.active #our, section#splash div.video.second-video .video-content svg-icon /deep/ svg.active #chocolate {\n              opacity: 0;\n              -webkit-transform: scale(0.5);\n                      transform: scale(0.5); }\n            section#splash div.video.second-video .video-content svg-icon /deep/ svg:hover #drag, section#splash div.video.second-video .video-content svg-icon /deep/ svg.active #drag {\n              transition: opacity 0.25s ease-out 0.2s, -webkit-transform 0.25s ease-out 0.2s;\n              transition: opacity 0.25s ease-out 0.2s, transform 0.25s ease-out 0.2s;\n              transition: opacity 0.25s ease-out 0.2s, transform 0.25s ease-out 0.2s, -webkit-transform 0.25s ease-out 0.2s;\n              opacity: 1;\n              -webkit-transform: scale(1) translate(27px, 82px);\n                      transform: scale(1) translate(27px, 82px); }\n      section#splash div.video.second-video .video-content-big {\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        z-index: 1;\n        bottom: 80px;\n        width: 330px;\n        height: 201px;\n        opacity: 0;\n        pointer-events: none; }\n        section#splash div.video.second-video .video-content-big.active {\n          opacity: 1;\n          pointer-events: auto; }\n        section#splash div.video.second-video .video-content-big svg-icon {\n          cursor: pointer; }\n          section#splash div.video.second-video .video-content-big svg-icon /deep/ svg {\n            -webkit-touch-callout: none;\n            /* iOS Safari */\n            -webkit-user-select: none;\n            /* Chrome/Safari/Opera */\n            /* Konqueror */\n            -moz-user-select: none;\n            /* Firefox */\n            -ms-user-select: none;\n            /* Internet Explorer/Edge */\n            user-select: none;\n            /* Non-prefixed version, currently not supported by any browser */\n            width: 330px;\n            height: 201px; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg .st0 {\n              fill: #564638;\n              stroke: #564638; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg .st1 {\n              opacity: 0.5; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg .st2 {\n              fill: #FFFFFF;\n              stroke: #FFFFFF; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg .st3 {\n              fill: #AA927F;\n              stroke: #AA927F; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg .st4 {\n              fill: #CCBDB2;\n              stroke: #CCBDB2; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg #mask-our-content path {\n              stroke-width: 6;\n              stroke: #FFF;\n              fill-opacity: 0;\n              transition: stroke-dashoffset 0.5s ease-out, fill-opacity 0.5s ease-out;\n              stroke-dasharray: 1500;\n              -webkit-transform-origin: center center;\n                      transform-origin: center center;\n              stroke-dashoffset: 0; }\n            section#splash div.video.second-video .video-content-big svg-icon /deep/ svg #mask-our-content.in path {\n              transition: stroke-dashoffset 2s ease-out;\n              stroke-dashoffset: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <base href=\"/\"/>\n  <div class=\"header-content\"><span class=\"header-content-logo\"><a (click)=\"openContent()\">\n        <svg-icon src=\"../assets/svg/logo.svg\"></svg-icon></a></span>\n    <div class=\"header-content-menu\" (click)=\"openMenu()\">menu\n      <button class=\"hamburger hamburger--squeeze\"><span class=\"hamburger-box\"><span class=\"hamburger-inner\">  </span></span></button>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"footer-content\">\n    <div class=\"content-left\"></div>\n    <div class=\"content-right\">\n      <svg-icon src=\"../assets/svg/audio.svg\"></svg-icon>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"content\">\n  <div class=\"image\">\n    <figure [style.background-image]=\"image\"></figure>\n  </div>\n  <div class=\"content\"></div>\n</section>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"gallery\">\n  <div class=\"close-btn\" (click)=\"closeGallery()\">\n    <p [innerHTML]=\"'close' | translate\" (click)=\"closeGallery()\"></p>\n  </div>\n  <div class=\"image\">\n    <figure class=\"current\" [style.background]=\"image\"></figure>\n    <figure class=\"next\" [style.background]=\"nextImage\"></figure>\n  </div>\n  <div class=\"slider-box\">\n    <div class=\"slider-left\">\n      <p class=\"slider-title\">{{title}}</p>\n      <p class=\"slider-desc\">{{desc}}</p>\n    </div>\n    <div class=\"slider-right\">\n      <div class=\"slider-content\"><span class=\"slider-arrow-left\" (click)=\"lastItem()\">\n          <svg-icon src=\"../assets/svg/arrow.svg\"></svg-icon></span>\n        <div class=\"slider-indicator\">\n          <p class=\"current\">\n             {{current}} </p><span class=\"divisor\"></span>\n          <p class=\"total\">{{total}}</p>\n        </div><span class=\"slider-arrow-right\" (click)=\"nextItem()\">\n          <svg-icon src=\"../assets/svg/arrow.svg\"></svg-icon></span>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"splash\">\n  <canvas id=\"canvas-da-nasa\"></canvas>\n  <div class=\"video first-video\">\n    <video autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\" data-width=\"1280\" data-height=\"720\">\n      <source src=\"./../../assets/video/plantation.mp4\" type=\"video/mp4\"/>\n    </video>\n    <div class=\"video-content\">\n      <svg-icon src=\"../../assets/svg/choco-svg.svg\"></svg-icon>\n    </div>\n    <div class=\"video-content-small\">\n      <svg-icon src=\"../../assets/svg/from-cocoa.svg\"></svg-icon>\n    </div>\n  </div>\n  <div class=\"video second-video\"> \n    <video autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\" data-width=\"1280\" data-height=\"720\">\n      <source src=\"./../../assets/video/chocolate.mp4\" type=\"video/mp4\"/>\n    </video>\n    <div class=\"video-content\">\n      <svg-icon src=\"../../assets/svg/choco2.svg\"></svg-icon>\n    </div>\n    <div class=\"video-content-big\">\n      <svg-icon src=\"../../assets/svg/our.svg\"></svg-icon>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    MAPBOX_API_KEY: 'pk.eyJ1IjoicGVydmVydGVkZXYiLCJhIjoiY2o2NTRsZWU2MXp3bzMzbW9tcXVwczNndiJ9.8TxcIrKkrxTmQPpPIhM1sw',
    STORE_API_URL: 'http://chocolatier-middleware.dev/',
    API_URL: 'http://benoit-nihant-cms.phprvrt.com/api/',
    CMS_IMG_URL: 'http://benoit-nihant-cms.phprvrt.com/uploads/galleries/',
    STORE_IMAGE_URL: 'http://chocolatier-store.dev/pub/media/catalog/',
    LANG_CODE: {
        "en": "default",
        "fr": "french",
        "nl": "nether"
    },
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgManager = (function () {
    function SvgManager() {
    }
    SvgManager.prototype.getSvg = function (qSelector) {
        return new Promise(function (resolve) {
            var interval = setInterval(function () {
                var svgBase = document.querySelector(qSelector);
                if (svgBase) {
                    resolve(svgBase);
                    clearInterval(interval);
                }
            }, 250);
        });
    };
    return SvgManager;
}());
SvgManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SvgManager);

//# sourceMappingURL=svg.manager.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueAnimator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValueAnimator = (function () {
    function ValueAnimator() {
        var _this = this;
        this._easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return (-c / 2 * (t * (t - 2) - 1) + b).toPrecision(3);
        };
        this._easeInCubic = function (t, b, c, d) {
            var tc = (t /= d) * t * t;
            return b + c * (tc);
        };
        this._inOutQuintic = function (t, b, c, d) {
            var ts = (t /= d) * t, tc = ts * t;
            return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
        };
        this.animateScroll = function () {
            // increment the time
            _this._currentTime += _this._increment;
            // find the value with the quadratic in-out easing function
            var val = _this._easeInOutQuad(_this._currentTime, _this._currPos, _this._change, _this._duration);
            // move the document.body
            _this.move(val);
            // do the animation unless its over
            // if (this._currentTime < this._duration) {
            if ((_this._toDown && _this._currPos > _this._targetPos) || (!_this._toDown && _this._currPos < _this._targetPos)) {
                window.requestAnimationFrame(_this.animateScroll);
            }
            else {
                if (_this._callback && typeof (_this._callback) === 'function') {
                    // the animation is done so lets callback
                    _this._callback();
                }
            }
        };
        this.position = function () {
            return _this._currPos;
        };
        this.move = function (amount) {
            _this._currPos = amount;
            _this._update(_this._currPos);
        };
    }
    ValueAnimator.prototype.animeTo = function (start, to, callback, update, duration) {
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
        console.log('starr ', start, ' to ', to);
        if (start > to) {
            this._toDown = true;
        }
        else {
            this._toDown = false;
        }
        this.animateScroll();
    };
    return ValueAnimator;
}());
ValueAnimator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ValueAnimator);

//# sourceMappingURL=value.animator.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.bundle.js.map