webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_content_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_sound_manager__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_shared_svg_manager__ = __webpack_require__(36);
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
    function AppComponent(http, galerry, componentFactoryResolver, viewContainerRef, activatedRoute, _router, svgManager) {
        this.http = http;
        this.galerry = galerry;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.activatedRoute = activatedRoute;
        this._router = _router;
        this.svgManager = svgManager;
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
        this.initTimer();
        this.svgManager.getSvg('footer .content-right svg').then((function (svgBase) {
            __WEBPACK_IMPORTED_MODULE_5_shared_sound_manager__["a" /* SoundManager */].getInstance().configMuteController(svgBase);
            var index = Math.ceil(Math.random() * 10);
            // SoundManager.getInstance().playSoundByID((index % 2 == 0) ?'trail':'trail_sec');
        }));
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
    AppComponent.prototype.initTimer = function () {
        var end = new Date('11/24/2018 5:00 PM');
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;
        var countDownElement = document.querySelector('.countdown');
        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
            countDownElement.querySelector('.days').innerHTML = days.toString() + 'dias ';
            countDownElement.querySelector('.hours').innerHTML = hours.toString() + 'horas ';
            countDownElement.querySelector('.minutes').innerHTML = minutes.toString() + ' minutos ';
            countDownElement.querySelector('.seconds').innerHTML = seconds.toString() + 'segundos';
        }
        timer = setInterval(showRemaining, 1000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(174),
        styles: [__webpack_require__(170)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_1__content_content_component__["a" /* ContentComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gallery_gallery_component__["a" /* GalleryComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ComponentFactoryResolver */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["S" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["S" /* ViewContainerRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_shared_svg_manager__["a" /* SvgManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_shared_svg_manager__["a" /* SvgManager */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_svg_icon__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__["a" /* SplashComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["b" /* NgModule */])({
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
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__(175),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(62);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-gallery',
        template: __webpack_require__(176),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_svg_manager__ = __webpack_require__(36);
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
    function SplashComponent(svgManager, router) {
        this.svgManager = svgManager;
        this.imagesList = [
            '20171028_100740',
            '20171028_100804',
            '20180211_041830',
            '20180216_175600',
            '20180216_182038',
            '20180216_182043',
            'claro_estacao',
            'escuro_estacao',
            'IMG-20180131-WA0023',
            'IMG-20180205-WA0017',
            'IMG-20180205-WA0023',
            'IMG-20180520-WA0034',
            'IMG-20180520-WA0035',
            'IMG-20180520-WA0036',
            'IMG-20180520-WA0037',
            'IMG-20180520-WA0038',
            'IMG-20180520-WA0039',
            'IMG-20180520-WA0040',
            'IMG-20180520-WA0041',
            'IMG-20180520-WA0042',
            'IMG-20180520-WA0043',
            'IMG-20180520-WA0044',
            'IMG-20180520-WA0045',
            'IMG-20180520-WA0046',
            'IMG-20180520-WA0047',
            'IMG-20180520-WA0048',
            'IMG-20180520-WA0049',
            'IMG-20180520-WA0050',
            'IMG-20180520-WA0051',
            'IMG-20180520-WA0052',
            'IMG-20180520-WA0053'
        ];
        this.router = router;
    }
    SplashComponent.prototype.ngOnInit = function () {
        this.fillBackImages();
        this.loadBigImage('../../assets/images/' + this.imagesList[Math.floor(Math.random() * this.imagesList.length)] + '.jpg');
        this.changeHightlight();
    };
    SplashComponent.prototype.fillBackImages = function () {
        var auxImagesList = Object.assign([], this.imagesList);
        var images = document.querySelectorAll('.mosaic__item');
        for (var i = 0; i < images.length; i++) {
            var index = Math.floor(Math.random() * auxImagesList.length);
            images[i].querySelector('.mosaic__item--container--back').style.backgroundImage = 'url(../../assets/images/' + auxImagesList[index] + '.jpg)';
            auxImagesList.slice(index, 1);
        }
    };
    SplashComponent.prototype.changeHightlight = function () {
        var _this = this;
        var current = document.querySelector('.mosaic__item--hit-area.active');
        if (current) {
            current.classList.remove('active');
        }
        var images = document.querySelectorAll('.mosaic__item');
        var index = Math.floor(Math.random() * images.length);
        setTimeout(function () {
            images[index].querySelector('.mosaic__item--hit-area').classList.add('active');
        }, 500);
        setTimeout(function () {
            _this.changeHightlight();
        }, 2000);
    };
    SplashComponent.prototype.loadBigImage = function (path) {
        var _this = this;
        this.bigImage = new Image();
        this.bigImage.onload = function () {
            var mosaic = document.querySelector('.mosaic');
            var imW = _this.bigImage.width;
            var imH = _this.bigImage.height;
            var mosaicW = mosaic.getBoundingClientRect().width;
            var mosaicH = mosaic.getBoundingClientRect().height;
            var prop = mosaicW / imW;
            var propInv = imW / mosaicW;
            var transX = 0, transY = 0;
            _this.bigImage.width = mosaicW;
            _this.bigImage.height = _this.bigImage.height * prop;
            if (_this.bigImage.height < mosaicH) {
                prop = mosaicH / imH;
                propInv = imH / mosaicH;
                _this.bigImage.height = mosaicH;
                _this.bigImage.width = _this.bigImage.width * prop;
            }
            transX = (_this.bigImage.width - mosaicW) * .5;
            transY = (_this.bigImage.height - mosaicH) * .5;
            _this.drawImages(transX, transY, propInv);
        };
        this.bigImage.src = path;
    };
    SplashComponent.prototype.drawImages = function (transX, transY, prop) {
        var images = document.querySelectorAll('.mosaic__item');
        for (var i = 0; i < images.length; i++) {
            var c = images[i].querySelector(".mosaic__item--container--front");
            var ctx = c.getContext("2d");
            var l = parseInt(images[i].getBoundingClientRect().left) - 10 + transX;
            var t = parseInt(images[i].getBoundingClientRect().top) - 10 + transY;
            var w = parseInt(images[i].getBoundingClientRect().width);
            var h = parseInt(images[i].getBoundingClientRect().height);
            c.setAttribute('width', w);
            c.setAttribute('height', h);
            ctx.drawImage(this.bigImage, l * prop, t * prop, w * prop, h * prop, 0, 0, w, h);
        }
    };
    return SplashComponent;
}());
SplashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: 'app-splash',
        template: __webpack_require__(177),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_shared_svg_manager__["a" /* SvgManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_shared_svg_manager__["a" /* SvgManager */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SplashComponent);

var _a, _b;
//# sourceMappingURL=splash.component.js.map

/***/ }),

/***/ 109:
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_animator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound_manager__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_suffix__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_manager__ = __webpack_require__(36);
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

/***/ 111:
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

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  padding: 10px; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nheader, footer {\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently not supported by any browser */ }\n\nheader {\n  height: 80px;\n  top: 0;\n  padding-top: 27px;\n  display: block; }\n  header div.header-content {\n    max-width: 1820px;\n    width: 100%;\n    height: 100%;\n    display: block;\n    margin: 0 auto; }\n    header div.header-content span.header-content-logo {\n      display: inline-block;\n      width: 246px;\n      height: 40px; }\n      header div.header-content span.header-content-logo svg-icon {\n        width: 100%;\n        height: 100%; }\n        header div.header-content span.header-content-logo svg-icon /deep/.cls-1 {\n          fill: #FFF; }\n    header div.header-content div.header-content-menu {\n      float: right;\n      line-height: 42px;\n      /* Style for \"menu\" */\n      color: #ffffff;\n      font-family: \"humanst521_btroman\";\n      font-size: 12px;\n      letter-spacing: 0.1em;\n      text-transform: uppercase;\n      cursor: pointer; }\n\n.navigation {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 30%;\n  height: 20%;\n  border-radius: 10px;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  z-index: 10;\n  background-color: #afa3d5;\n  -webkit-transform: translate(100%, -50%);\n          transform: translate(100%, -50%);\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out; }\n  .navigation.active, .navigation:hover {\n    -webkit-transform: translate(10%, -50%);\n            transform: translate(10%, -50%); }\n  .navigation::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-radius: 50%;\n    width: 85px;\n    height: 75px;\n    background-color: #afa3d5;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: -1; }\n  .navigation .plus {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    font-family: \"Rouge Script\", cursive;\n    font-size: 40px;\n    font-weight: bolder;\n    color: white;\n    -webkit-transform: translate(-120%, -50%);\n            transform: translate(-120%, -50%); }\n  .navigation .countdown {\n    font-family: \"Rouge Script\", cursive;\n    font-size: 40px;\n    margin-left: 10px;\n    color: white; }\n    .navigation .countdown .icon {\n      display: inline-block;\n      width: 25px;\n      height: 25px;\n      margin: 15px 10px 0 0;\n      background: url(" + __webpack_require__(211) + ");\n      background-size: cover; }\n  .navigation .arrow {\n    width: 30px;\n    height: 30px;\n    margin: 10px;\n    border-radius: 50%;\n    background-color: black; }\n\nfooter {\n  bottom: 0;\n  height: 44px;\n  background: transparent;\n  text-align: center; }\n  footer .footer-content {\n    max-width: 1820px;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -ms-flex-flow: row wrap;\n    -o-flex-flow: row wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -mozjustify-content: space-between;\n    -webkit-justify-content: space-between;\n    -ms-justify-content: space-between;\n    -o-justify-content: space-between;\n    height: 100%;\n    background: transparent;\n    width: 100%; }\n    footer .footer-content .content-left {\n      width: 103px;\n      height: 20px;\n      margin-top: 7px;\n      background: #000; }\n    footer .footer-content .content-right {\n      width: 20px;\n      height: 20px;\n      margin-top: 7px;\n      cursor: pointer; }\n      footer .footer-content .content-right svg-icon {\n        width: 100%; }\n        footer .footer-content .content-right svg-icon /deep/ path {\n          -webkit-transform-origin: center bottom;\n                  transform-origin: center bottom;\n          transition: -webkit-transform 0.15s ease-out;\n          transition: transform 0.15s ease-out;\n          transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n          fill: #AA927F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section#content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 700;\n  top: 0;\n  left: 0;\n  background: green; }\n  section#content div.image {\n    width: 100%;\n    position: fixed;\n    height: 100%;\n    display: block; }\n    section#content div.image figure {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background-size: cover;\n      background-position: center; }\n  section#content div.content {\n    max-width: 1200px;\n    width: 100%;\n    height: 95%;\n    background-color: #fff;\n    position: relative;\n    top: 24px;\n    margin-right: 20px;\n    float: right;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "section#gallery div.slider-box {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%); }\n\n.hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  padding: 10px; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nsection#gallery {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 900;\n  top: 0;\n  left: 0;\n  background-color: #1e1e1e;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.35s ease-out; }\n  section#gallery.in {\n    opacity: 1; }\n    section#gallery.in .close-btn {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    section#gallery.in div.slider-box div.slider-left, section#gallery.in div.slider-box div.slider-right {\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%); }\n  section#gallery .close-btn {\n    position: absolute;\n    right: 0;\n    top: 36px;\n    width: 150px;\n    height: 63px;\n    background-image: linear-gradient(to top, #1c1c1c 0%, #2f2f2f 82%, #2f2f2f 100%);\n    background-color: #2f2f2f;\n    cursor: pointer;\n    z-index: 15;\n    will-change: transform;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: -webkit-transform 0.25s ease-out .2s;\n    transition: transform 0.25s ease-out .2s;\n    transition: transform 0.25s ease-out .2s, -webkit-transform 0.25s ease-out .2s; }\n    section#gallery .close-btn p {\n      color: #ccbdb2;\n      font-family: \"crimsonitalic\";\n      font-size: 15px;\n      letter-spacing: 0.3em;\n      text-align: center;\n      line-height: 65px;\n      text-indent: 22px; }\n      section#gallery .close-btn p:after {\n        content: '';\n        background-color: #ccbdb2;\n        width: 24px;\n        height: 1px;\n        position: absolute;\n        left: 19px;\n        top: 33px; }\n  section#gallery .image {\n    width: 100%;\n    height: 100%;\n    display: block; }\n    section#gallery .image figure {\n      width: 100%;\n      height: 100%;\n      display: block;\n      background-size: cover !important;\n      background-position: center center !important;\n      background-repeat: no-repeat !important;\n      position: relative;\n      will-change: opacity;\n      position: absolute;\n      top: 0px;\n      left: 0px; }\n      section#gallery .image figure.current {\n        z-index: 10; }\n        section#gallery .image figure.current.out {\n          transition: opacity .4s ease-out;\n          opacity: 0; }\n      section#gallery .image figure.next {\n        opacity: 0;\n        z-index: 5; }\n        section#gallery .image figure.next.in {\n          transition: opacity .4s ease-out .1s;\n          opacity: 1; }\n  section#gallery div.slider-box {\n    max-width: 1000px;\n    width: 100%;\n    height: 150px;\n    display: inline-table;\n    position: absolute;\n    bottom: 0;\n    z-index: 15; }\n    section#gallery div.slider-box div.slider-left, section#gallery div.slider-box div.slider-right {\n      display: table-cell;\n      width: 50%;\n      height: 151px;\n      background: #afa3d5; }\n    section#gallery div.slider-box div.slider-left {\n      padding: 24px  49px 36px 29px;\n      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.15) 82%, rgba(255, 255, 255, 0.15) 100%);\n      background-color: #e6ddd6;\n      will-change: transform;\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%);\n      transition: -webkit-transform 0.25s ease-out .3s;\n      transition: transform 0.25s ease-out .3s;\n      transition: transform 0.25s ease-out .3s, -webkit-transform 0.25s ease-out .3s; }\n      section#gallery div.slider-box div.slider-left p.slider-title {\n        color: #f3792d;\n        font-family: \"crimsonroman\";\n        font-size: 24px;\n        margin-bottom: 19px; }\n      section#gallery div.slider-box div.slider-left p.slider-desc {\n        color: #2f2f2f;\n        font-family: \"crimsonitalic\";\n        font-size: 15px; }\n    section#gallery div.slider-box div.slider-right {\n      background-image: linear-gradient(to top, #1c1c1c 0%, #2f2f2f 82%, #2f2f2f 100%);\n      background-color: #2f2f2f;\n      will-change: transform;\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%);\n      transition: -webkit-transform 0.25s ease-out .4s;\n      transition: transform 0.25s ease-out .4s;\n      transition: transform 0.25s ease-out .4s, -webkit-transform 0.25s ease-out .4s; }\n      section#gallery div.slider-box div.slider-right div.slider-content {\n        width: 240px;\n        height: 47px;\n        margin: 0 auto;\n        margin-top: 52px; }\n        section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left {\n          float: left;\n          width: 7px;\n          cursor: pointer;\n          height: 100%; }\n          section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left svg-icon {\n            width: 100%;\n            height: auto;\n            margin-top: 16px; }\n            section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-left svg-icon /deep/ svg {\n              width: 100%;\n              height: auto;\n              transform: scaleX(-1);\n              -moz-transform: scaleX(-1);\n              -webkit-transform: scaleX(-1);\n              -ms-transform: scaleX(-1);\n              -o-transform: scaleX(-1); }\n        section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator {\n          width: 41px;\n          height: 47px;\n          float: left;\n          margin-left: 100px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator p.current {\n            color: #ccbdb2;\n            font-family: \"crimsonroman\";\n            font-size: 30px;\n            line-height: 20px;\n            text-indent: 6px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator span.divisor {\n            width: 45px;\n            height: 1px;\n            display: block;\n            background-color: #89674d;\n            transform: rotate(-40deg);\n            -moz-transform: rotate(-40deg);\n            -webkit-transform: rotate(-40deg);\n            -ms-transform: rotate(-40deg);\n            -o-transform: rotate(-40deg);\n            margin-top: 7px; }\n          section#gallery div.slider-box div.slider-right div.slider-content div.slider-indicator p.total {\n            color: #ccbdb2;\n            font-family: \"crimsonroman\";\n            font-size: 18px;\n            text-indent: 24px; }\n        section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right {\n          float: right;\n          width: 7px;\n          cursor: pointer;\n          height: 100%; }\n          section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right svg-icon {\n            width: 100%;\n            height: auto;\n            margin-top: 16px; }\n            section#gallery div.slider-box div.slider-right div.slider-content span.slider-arrow-right svg-icon /deep/ svg {\n              width: 100%;\n              height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".hamburger {\n  padding: 0px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.7; }\n\n.hamburger-box {\n  width: 23px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n  margin-top: 8px; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  right: 0; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 21px;\n  height: 2px;\n  background-color: #FFF;\n  border-radius: 0px;\n  position: absolute;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -6px; }\n\n.hamburger-inner::after {\n  bottom: -6px; }\n\n/*\r\n * Squeeze\r\n */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.1s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze::before {\n  transition: top 0.1s 0.14s ease, opacity 0.1s ease; }\n\n.hamburger--squeeze::after {\n  transition: bottom 0.1s 0.14s ease, -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.isActive .hamburger-inner, .hamburger--squeeze.isActive .hamburger-inner::before, .hamburger--squeeze.isActive .hamburger-inner::after {\n  background-color: #FFF; }\n\n.hamburger--squeeze.isActive .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  transition-delay: 0.14s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.isActive .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease, opacity 0.1s 0.14s ease; }\n  .hamburger--squeeze.isActive .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease, -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease, transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/*\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0;\n  overflow-x: hidden;\n  padding: 10px; }\n\n* {\n  box-sizing: border-box; }\n\ni {\n  font-style: normal; }\n\n/*\r\n * Seta > box-sizing: border-box em todos os elementos\r\n */\n* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  vertical-align: top; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\np {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: top; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0; }\n\n.cf_:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0; }\n\n.cf_ {\n  display: block;\n  *display: inline-block; }\n\n/* Vars ############### */\n/* Fonts */\nsection#splash {\n  width: 100%;\n  height: 100vh; }\n  section#splash * {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Chrome/Safari/Opera */\n    /* Konqueror */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently not supported by any browser */ }\n  section#splash .mosaic {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n    height: 100vh;\n    background-color: #afa3d5; }\n    section#splash .mosaic__item {\n      position: relative;\n      width: 20%;\n      height: 25%;\n      -webkit-perspective: 1200px;\n              perspective: 1200px; }\n      section#splash .mosaic__item--hit-area {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        z-index: 1; }\n        section#splash .mosaic__item--hit-area:hover ~ div, section#splash .mosaic__item--hit-area.active ~ div {\n          transition: -webkit-transform 0.4s ease-out;\n          transition: transform 0.4s ease-out;\n          transition: transform 0.4s ease-out, -webkit-transform 0.4s ease-out;\n          -webkit-transform: rotateY(180deg);\n                  transform: rotateY(180deg); }\n          section#splash .mosaic__item--hit-area:hover ~ div .mosaic__item--container--front, section#splash .mosaic__item--hit-area.active ~ div .mosaic__item--container--front {\n            transition: visibility 0s linear 0.2s;\n            visibility: hidden; }\n          section#splash .mosaic__item--hit-area:hover ~ div .mosaic__item--container--back, section#splash .mosaic__item--hit-area.active ~ div .mosaic__item--container--back {\n            transition: visibility 0s linear 0.2s;\n            visibility: visible; }\n      section#splash .mosaic__item--container {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        -webkit-transform-origin: center;\n                transform-origin: center;\n        transition: -webkit-transform 0.4s ease-out 0.2s;\n        transition: transform 0.4s ease-out 0.2s;\n        transition: transform 0.4s ease-out 0.2s, -webkit-transform 0.4s ease-out 0.2s;\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg); }\n        section#splash .mosaic__item--container .mosaic__item--container--front {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          visibility: visible;\n          background: whitesmoke;\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          transition: visibility 0s linear 0.4s; }\n        section#splash .mosaic__item--container .mosaic__item--container--back {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          visibility: hidden;\n          background: wheat;\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          transition: visibility 0s linear 0.4s; }\n  section#splash #stories {\n    width: 100%;\n    height: 100vh;\n    background-color: #afa3d5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <base href=\"/\"/>\n  <div class=\"header-content\"></div>\n</header>\n<div class=\"navigation\"><span class=\"plus\">+</span>\n  <div class=\"arrow arrow--up\"></div>\n  <div class=\"countdown\">\n    <div class=\"icon\"></div><span class=\"days\"></span><span class=\"hours\"></span><span class=\"minutes\"></span><span class=\"seconds\"></span>\n  </div>\n  <div class=\"arrow arrow--down\"></div>\n</div>\n<router-outlet></router-outlet>\n<footer>\n  <div class=\"footer-content\">\n    <div class=\"content-right\">\n      <svg-icon src=\"../assets/svg/audio.svg\"></svg-icon>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"content\">\n  <div class=\"image\">\n    <figure [style.background-image]=\"image\"></figure>\n  </div>\n  <div class=\"content\"></div>\n</section>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"gallery\">\n  <div class=\"close-btn\" (click)=\"closeGallery()\">\n    <p [innerHTML]=\"'close' | translate\" (click)=\"closeGallery()\"></p>\n  </div>\n  <div class=\"image\">\n    <figure class=\"current\" [style.background]=\"image\"></figure>\n    <figure class=\"next\" [style.background]=\"nextImage\"></figure>\n  </div>\n  <div class=\"slider-box\">\n    <div class=\"slider-left\">\n      <p class=\"slider-title\">{{title}}</p>\n      <p class=\"slider-desc\">{{desc}}</p>\n    </div>\n    <div class=\"slider-right\">\n      <div class=\"slider-content\"><span class=\"slider-arrow-left\" (click)=\"lastItem()\">\n          <svg-icon src=\"../assets/svg/arrow.svg\"></svg-icon></span>\n        <div class=\"slider-indicator\">\n          <p class=\"current\">\n             {{current}} </p><span class=\"divisor\"></span>\n          <p class=\"total\">{{total}}</p>\n        </div><span class=\"slider-arrow-right\" (click)=\"nextItem()\">\n          <svg-icon src=\"../assets/svg/arrow.svg\"></svg-icon></span>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "\n<section id=\"splash\">\n  <div class=\"mosaic\">\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n    <div class=\"mosaic__item\">\n      <div class=\"mosaic__item--hit-area\"></div>\n      <div class=\"mosaic__item--container\">\n        <canvas class=\"mosaic__item--container--front\"></canvas>\n        <div class=\"mosaic__item--container--back\"></div>\n      </div>\n    </div>\n  </div>\n  <div id=\"stories\">\n    <iframe type=\"text/html\" width=\"100%\" height=\"100%\" src=\"https://noivos.casar.com/cristianeemichel\" frameborder=\"0\"></iframe>\n  </div>\n</section>"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 36:
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

/***/ 62:
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

/***/ 63:
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
            console.log('ASDASD');
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

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(62);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map