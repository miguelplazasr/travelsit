"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[965],{

/***/ 63189:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var ɵngcc0 = __webpack_require__(/*! @angular/core */ 37716);
var ɵngcc1 = __webpack_require__(/*! ./src/owl-carousel.component */ 36995);
var ɵngcc2 = __webpack_require__(/*! ./src/owl-child.component */ 25437);
var ɵngcc3 = __webpack_require__(/*! @angular/common */ 38583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ 37716);
var common_1 = __webpack_require__(/*! @angular/common */ 38583);
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ 36995);
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ 25437);
__export(__webpack_require__(/*! ./src/owl-carousel.component */ 36995));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([ __metadata('design:paramtypes', [])
    ], OwlModule);
OwlModule.ɵfac = function OwlModule_Factory(t) { return new (t || OwlModule)(); };
OwlModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OwlModule });
OwlModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            common_1.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OwlModule, { declarations: [ɵngcc1.OwlCarousel, ɵngcc2.OwlChild], imports: [ɵngcc3.CommonModule], exports: [ɵngcc1.OwlCarousel] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OwlModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
                ],
                exports: [
                    owl_carousel_component_1.OwlCarousel
                ]
            }]
    }], function () { return []; }, null); })();
    return OwlModule;
}());
exports.OwlModule = OwlModule;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 36995:
/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/__ivy_ngcc__/src/owl-carousel.component.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var ɵngcc0 = __webpack_require__(/*! @angular/core */ 37716);
var ɵngcc1 = __webpack_require__(/*! ./owl-child.component */ 25437);
var ɵngcc2 = __webpack_require__(/*! @angular/common */ 38583);

var _c0 = ["owl"];
var _c1 = ["*"];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 37716);
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ 25437);
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                var itemLength = _this._items && _this._items.length;
                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                    _this.$owlChild.currentSlideIndex = itemLength;
                }
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([ __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
OwlCarousel.ɵfac = function OwlCarousel_Factory(t) { return new (t || OwlCarousel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
OwlCarousel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OwlCarousel, selectors: [["owl-carousel"]], viewQuery: function OwlCarousel_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.$owlChild = _t.first);
    } }, inputs: { carouselClasses: "carouselClasses", options: "options", items: "items" }, ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[3, "ngClass", "options"], ["owl", ""]], template: function OwlCarousel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "owl-carousel-child", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.carouselClasses)("options", ctx.options);
    } }, directives: [ɵngcc1.OwlChild, ɵngcc2.NgClass], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OwlCarousel, [{
        type: core_1.Component,
        args: [{
                selector: 'owl-carousel',
                template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                    '<ng-content></ng-content></owl-carousel-child>'
            }]
    }], function () { return [{ type: ɵngcc0.IterableDiffers }]; }, { carouselClasses: [{
            type: core_1.Input
        }], options: [{
            type: core_1.Input
        }], items: [{
            type: core_1.Input
        }], $owlChild: [{
            type: core_1.ViewChild,
            args: ['owl']
        }] }); })();
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;

//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ 25437:
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/__ivy_ngcc__/src/owl-child.component.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var ɵngcc0 = __webpack_require__(/*! @angular/core */ 37716);

var _c0 = ["*"];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 37716);
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([ __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
OwlChild.ɵfac = function OwlChild_Factory(t) { return new (t || OwlChild)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
OwlChild.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OwlChild, selectors: [["owl-carousel-child"]], hostVars: 2, hostBindings: function OwlChild_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("owl-carousel", ctx.owlClass);
    } }, inputs: { options: "options" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OwlChild_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OwlChild, [{
        type: core_1.Component,
        args: [{
                selector: 'owl-carousel-child',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { owlClass: [{
            type: core_1.HostBinding,
            args: ['class.owl-carousel']
        }], options: [{
            type: core_1.Input
        }] }); })();
    return OwlChild;
}());
exports.OwlChild = OwlChild;

//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ 99217:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlickCarouselModule": () => (/* binding */ SlickCarouselModule),
/* harmony export */   "SlickCarouselComponent": () => (/* binding */ SlickCarouselComponent),
/* harmony export */   "SlickItemDirective": () => (/* binding */ SlickItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Slick component
 */


const _c0 = ["*"];
class SlickCarouselComponent {
    /**
     * Constructor
     * @param {?} el
     * @param {?} zone
     */
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
    }
    /**
     * On component destroy
     * @return {?}
     */
    ngOnDestroy() {
        this.unslick();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) {
                // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach(slickItem => {
                    this.slides.push(slickItem);
                    this.zone.runOutsideAngular(() => {
                        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    });
                });
                this._addedSlides = [];
                this._removedSlides.forEach(slickItem => {
                    /** @type {?} */
                    const idx = this.slides.indexOf(slickItem);
                    this.slides = this.slides.filter(s => s !== slickItem);
                    this.zone.runOutsideAngular(() => {
                        this.$instance.slick('slickRemove', idx);
                    });
                });
                this._removedSlides = [];
            }
        }
    }
    /**
     * init slick
     * @return {?}
     */
    initSlick() {
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular(() => {
            this.$instance = jQuery(this.el.nativeElement);
            this.$instance.on('init', (event, slick) => {
                this.zone.run(() => {
                    this.init.emit({ event, slick });
                });
            });
            this.$instance.slick(this.config);
            this.zone.run(() => {
                this.initialized = true;
                this.currentIndex = (this.config && this.config.initialSlide) ? this.config.initialSlide : 0;
            });
            this.$instance.on('afterChange', (event, slick, currentSlide) => {
                this.zone.run(() => {
                    this.afterChange.emit({ event, slick, currentSlide });
                    this.currentIndex = currentSlide;
                });
            });
            this.$instance.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
                this.zone.run(() => {
                    this.beforeChange.emit({ event, slick, currentSlide, nextSlide });
                });
            });
            this.$instance.on('breakpoint', (event, slick, breakpoint) => {
                this.zone.run(() => {
                    this.breakpoint.emit({ event, slick, breakpoint });
                });
            });
            this.$instance.on('destroy', (event, slick) => {
                this.zone.run(() => {
                    this.destroy.emit({ event, slick });
                    this.initialized = false;
                });
            });
        });
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    addSlide(slickItem) {
        this._addedSlides.push(slickItem);
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    removeSlide(slickItem) {
        this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    slickGoTo(index) {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickGoTo', index);
        });
    }
    /**
     * @return {?}
     */
    slickNext() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickNext');
        });
    }
    /**
     * @return {?}
     */
    slickPrev() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPrev');
        });
    }
    /**
     * @return {?}
     */
    slickPause() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPause');
        });
    }
    /**
     * @return {?}
     */
    slickPlay() {
        this.zone.runOutsideAngular(() => {
            this.$instance.slick('slickPlay');
        });
    }
    /**
     * @return {?}
     */
    unslick() {
        if (this.$instance) {
            this.zone.runOutsideAngular(() => {
                this.$instance.slick('unslick');
            });
            this.$instance = undefined;
        }
        this.initialized = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['config'].previousValue !== changes['config'].currentValue && changes['config'].currentValue !== undefined) {
            if (this.initialized) {
                /** @type {?} */
                const refresh = changes['config'].currentValue['refresh'];
                /** @type {?} */
                const newOptions = Object.assign({}, changes['config'].currentValue);
                delete newOptions['refresh'];
                this.zone.runOutsideAngular(() => {
                    this.$instance.slick('slickSetOption', newOptions, refresh);
                });
            }
        }
    }
}
SlickCarouselComponent.ɵfac = function SlickCarouselComponent_Factory(t) { return new (t || SlickCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
SlickCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlickCarouselComponent, selectors: [["ngx-slick-carousel"]], inputs: { config: "config" }, outputs: { afterChange: "afterChange", beforeChange: "beforeChange", breakpoint: "breakpoint", destroy: "destroy", init: "init" }, exportAs: ["slick-carousel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SlickCarouselComponent),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SlickCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/** @nocollapse */
SlickCarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
SlickCarouselComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlickCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-slick-carousel',
                exportAs: 'slick-carousel',
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SlickCarouselComponent),
                        multi: true
                    }],
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { afterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], beforeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], breakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], destroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class SlickItemDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     * @param {?} carousel
     */
    constructor(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.carousel.addSlide(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    }
}
SlickItemDirective.ɵfac = function SlickItemDirective_Factory(t) { return new (t || SlickItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SlickCarouselComponent, 1)); };
SlickItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SlickItemDirective, selectors: [["", "ngxSlickItem", ""]] });
/** @nocollapse */
SlickItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlickItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ngxSlickItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: SlickCarouselComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SlickCarouselModule {
}
SlickCarouselModule.ɵfac = function SlickCarouselModule_Factory(t) { return new (t || SlickCarouselModule)(); };
SlickCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlickCarouselModule });
SlickCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlickCarouselModule, { declarations: function () { return [SlickCarouselComponent, SlickItemDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [SlickCarouselComponent, SlickItemDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlickCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                declarations: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ],
                exports: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNsaWNrLWNhcm91c2VsLmpzIiwic291cmNlcyI6WyJuZ3gtc2xpY2stY2Fyb3VzZWwvc2xpY2suY29tcG9uZW50LnRzIiwibmd4LXNsaWNrLWNhcm91c2VsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBSTtBQUFtQjs7OztBQXFDdkI7QUFBK0I7QUFBUTtBQUFtQjtBQUFxQjtBQUF1QjtBQUVoRyxJQWlCRixZQUFvQixFQUFjLEVBQ2Q7QUFBUSxRQURSLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUNmLFNBQUksR0FBSixJQUFJO0FBQUUsMkJBakJpQixJQUFJLFlBQVksRUFBRTtBQUNqRSw0QkFBZ0QsSUFBSSxZQUFZLEVBQUU7QUFDbEUsMEJBQThDLElBQUksWUFBWSxFQUFFO0FBQ2hFLHVCQUEyQyxJQUFJLFlBQVksRUFBRTtBQUM3RCxvQkFBd0MsSUFBSSxZQUFZLEVBQUU7QUFDMUQsc0JBRzJCLEVBQUU7QUFDN0IsMkJBQXlCLEtBQUs7QUFDOUIsOEJBQW1ELEVBQUU7QUFDckQsNEJBQWlELEVBQUU7QUFDbkQsS0FPSztBQUNMO0FBQ087QUFDb0I7QUFFakI7QUFBUSxJQUFkLFdBQVc7QUFDZixRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QixLQUFLO0FBQ0w7QUFDTztBQUFtQjtBQUN0QixJQURBLGVBQWU7QUFBSyxRQUNoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNsQyxLQUFLO0FBQ0w7QUFDTztBQUN5QjtBQUV0QjtBQUFRLElBQWQsa0JBQWtCO0FBQ3RCLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzVFO0FBQTZCLFlBQWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDaEgsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNuQyxnQkFBZ0IsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7QUFDMUMsb0JBQW9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQyxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQUMsaUJBQUssSUFBSSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7QUFBRTtBQUNqQyxnQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsYUFBYTtBQUFDLGlCQUFLO0FBQ25CLGdCQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTO0FBQ25ELG9CQUFvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRCxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRCx3QkFBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckYscUJBQXFCLENBQUMsQ0FBQztBQUN2QixpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGdCQUFnQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN2QyxnQkFDZ0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUztBQUNyRDtBQUFxQyxvQkFBakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0Qsb0JBQW9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQztBQUMzRSxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNoRCx3QkFBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pFLHFCQUFxQixDQUFDLENBQUM7QUFDdkIsaUJBQWlCLENBQUMsQ0FBQztBQUNuQixnQkFBZ0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDekMsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNVO0FBRVA7QUFDVixJQURJLFNBQVM7QUFDYixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN4QyxRQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQy9CLFFBQVEsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDakMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFlBQVksSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzRCxZQUNZLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLO0FBQ25ELGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUNuRCxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsWUFDWSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsWUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMxQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEMsZ0JBQ2dCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUM3RyxhQUFhLENBQUMsQ0FBQztBQUNmLFlBQ1ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZO0FBQ3hFLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QixvQkFBb0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7QUFDeEUsb0JBQW9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQ3JELGlCQUFpQixDQUFDLENBQUM7QUFDbkIsYUFBYSxDQUFDLENBQUM7QUFDZixZQUNZLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVM7QUFDcEYsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlCLG9CQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7QUFDcEYsaUJBQWlCLENBQUMsQ0FBQztBQUNuQixhQUFhLENBQUMsQ0FBQztBQUNmLFlBQ1ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVO0FBQ3JFLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QixvQkFBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDckUsaUJBQWlCLENBQUMsQ0FBQztBQUNuQixhQUFhLENBQUMsQ0FBQztBQUNmLFlBQ1ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUs7QUFDdEQsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlCLG9CQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQ3RELG9CQUFvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUM3QyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25CLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUyxDQUFDLENBQUM7QUFDWCxLQUFLO0FBQ0w7QUFDTztBQUE0QjtBQUMzQjtBQUFRLElBRFosUUFBUSxDQUFDLFNBQTZCO0FBQzFDLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMO0FBQ087QUFBNEI7QUFDOUI7QUFBUSxJQURULFdBQVcsQ0FBQyxTQUE2QjtBQUM3QyxRQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLEtBQUs7QUFDTDtBQUNPO0FBQ1k7QUFFSjtBQUFtQjtBQUM5QixJQURPLFNBQVMsQ0FBQyxLQUFhO0FBQ2xDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNwQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRCxTQUFTLENBQUMsQ0FBQztBQUNYO0FBQ0E7QUFDTztBQUNOO0FBQVEsSUFERSxTQUFTO0FBQ3BCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNwQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLFNBQVMsQ0FBQyxDQUFDO0FBQ1g7QUFDQTtBQUNPO0FBQ047QUFBUSxJQURFLFNBQVM7QUFDcEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUMsU0FBUyxDQUFDLENBQUM7QUFDWDtBQUNBO0FBQ087QUFDUDtBQUFRLElBREcsVUFBVTtBQUNyQixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFDcEMsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMvQyxTQUFTLENBQUMsQ0FBQztBQUNYO0FBQ0E7QUFDTztBQUNOO0FBQVEsSUFERSxTQUFTO0FBQ3BCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNwQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLFNBQVMsQ0FBQyxDQUFDO0FBQ1g7QUFDQTtBQUNPO0FBQ0o7QUFBUSxJQURBLE9BQU87QUFDbEIsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDNUIsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3hDLGdCQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRCxhQUFhLENBQUMsQ0FBQztBQUNmLFlBQVksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDdkMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDakM7QUFDQTtBQUNPO0FBQTBCO0FBQzdCO0FBQVEsSUFEUixXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNsQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUNoSSxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNsQztBQUFpQyxnQkFBakIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRTtBQUFpQyxnQkFBakIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JGLGdCQUFnQixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxnQkFDZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUM1QyxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hGLGlCQUFpQixDQUFDLENBQUM7QUFDbkIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7a0RBbk1DLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsb0JBQW9CLGtCQUM5QixRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQixTQUFTLEVBQUUsQ0FBQztVQUNSLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSxzQkFBc0IsQ0FBQywwQkFDckQsS0FBSyxFQUFFLElBQUksc0JBQ2QsQ0FBQyxrQkFDRixRQUFRLEVBQUUsMkJBQTJCLGNBQ3hDOzs7Ozs7OzZCQUNHO0FBQUM7QUFBbUI7QUFBZ0QsWUEvQnBFLFVBQVU7QUFDWixZQUtFLE1BQU07QUFDVDtBQUFHO0FBR0EscUJBdUJDLEtBQUs7QUFBSywwQkFDVixNQUFNO0FBQUssMkJBQ1gsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyxzQkFDWCxNQUFNO0FBQUssbUJBQ1gsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBMkI7QUFBUTtBQUV4QztBQUNFO0FBQ047QUFBUSxJQXFMYixZQUFtQixFQUFjLEVBQ1EsVUFBa0IsRUFDL0IsUUFBZ0M7QUFDaEUsUUFIdUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQ08sZUFBVSxHQUFWLFVBQVUsQ0FBUTtBQUFDLFFBQ2hDLGFBQVEsR0FBUixRQUFRLENBQXdCO0FBQUMsS0FDNUQ7QUFDTDtBQUNPO0FBQ0U7QUFBUSxJQURiLFFBQVE7QUFDWixRQUFRLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hELFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ0Q7QUFBUSxJQURWLFdBQVc7QUFDZixRQUFRLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hELFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBUztBQUNULEtBQUs7QUFDTDs4Q0FwQkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxnQkFBZ0IsZUFDN0I7d0hBQ0k7QUFBQztBQUFtQjtBQUNuQixZQS9ORixVQUFVO0FBQ1oseUNBK05lLE1BQU0sU0FBQyxXQUFXO0FBQVMsWUFDRixzQkFBc0IsdUJBQS9DLElBQUk7QUFBTTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUFDO0FBQUk7QUFDbEM7QUFHMEM7QUMzTzNDO0FBQTRCOytDQU0zQixRQUFRLFNBQUMsa0JBQ1IsT0FBTyxFQUFFO0FBQ1AsWUFBWSxrQkFDYixrQkFDRCxZQUFZLEVBQUU7Q0FDWixzQkFBc0Isc0JBQ3RCLGtCQUFrQjtpQkFDbkI7VUFDRDtFQUFPLEVBQUUsc0JBQ1Asc0JBQXNCLHNCQUN0QixrQkFBa0IsbUJBQ25CLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFDO0FBQUk7QUFFSDtBQUFrRTtBQUFJO0FBQUM7O0FEckJBLEFBcUNBLEFBbUJBLEFBQUEsQUFBQSxBQUNBLEFBREEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBakJBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBUUEsQUFLQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFLQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQWxNQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBOUJBLEFBQUEsQUFNQSxBQUFBLEFBMkJBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQXlMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFuQkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQTdOQSxBQUFBLEFBZ09BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUN2T0EsQUFNQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgZm9yd2FyZFJlZixcbiAgICBIb3N0LFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFBMQVRGT1JNX0lELFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmRlY2xhcmUgY29uc3QgalF1ZXJ5OiBhbnk7XG5cbi8qKlxuICogU2xpY2sgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXNsaWNrLWNhcm91c2VsJyxcbiAgICBleHBvcnRBczogJ3NsaWNrLWNhcm91c2VsJyxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlja0Nhcm91c2VsQ29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0Nhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIGFmdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYmVmb3JlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGRlc3Ryb3k6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyAkaW5zdGFuY2U6IGFueTtcbiAgICBwdWJsaWMgY3VycmVudEluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIHNsaWRlczogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9yZW1vdmVkU2xpZGVzOiBTbGlja0l0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICAgIHByaXZhdGUgX2FkZGVkU2xpZGVzOiBTbGlja0l0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuc2xpY2soKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdDaGVja2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gY29tcG9uZW50IHZpZXcgY2hlY2tlZFxuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkU2xpZGVzLmxlbmd0aCA+IDAgfHwgdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2xpZGVzTGVuZ3RoID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5fcmVtb3ZlZFNsaWRlcy5sZW5ndGggKyB0aGlzLl9hZGRlZFNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgbmV4dFNsaWRlc0xlbmd0aCBpcyB6ZXJlLCBkbyBub3RoaW5nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRTbGlkZXNMZW5ndGggPT09IDApIHsgLy8gdW5zbGljayBjYXNlXG4gICAgICAgICAgICAgICAgdGhpcy51bnNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZGVkU2xpZGVzLmZvckVhY2goc2xpY2tJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlja0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrQWRkJywgc2xpY2tJdGVtLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcy5mb3JFYWNoKHNsaWNrSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2xpZGVzLmluZGV4T2Yoc2xpY2tJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLnNsaWRlcy5maWx0ZXIocyA9PiBzICE9PSBzbGlja0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrUmVtb3ZlJywgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5pdCBzbGlja1xuICAgICAqL1xuICAgIGluaXRTbGljaygpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLl9hZGRlZFNsaWRlcztcbiAgICAgICAgdGhpcy5fYWRkZWRTbGlkZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcyA9IFtdO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2UgPSBqUXVlcnkodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2luaXQnLCAoZXZlbnQsIHNsaWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdC5lbWl0KHtldmVudCwgc2xpY2t9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljayh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaW5pdGlhbFNsaWRlKSA/IHRoaXMuY29uZmlnLmluaXRpYWxTbGlkZSA6IDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJDaGFuZ2UuZW1pdCh7ZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uub24oJ2JlZm9yZUNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlLmVtaXQoe2V2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGV9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5vbignYnJlYWtwb2ludCcsIChldmVudCwgc2xpY2ssIGJyZWFrcG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmVha3BvaW50LmVtaXQoe2V2ZW50LCBzbGljaywgYnJlYWtwb2ludH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLm9uKCdkZXN0cm95JywgKGV2ZW50LCBzbGljaykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3kuZW1pdCh7ZXZlbnQsIHNsaWNrfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRTbGlkZShzbGlja0l0ZW06IFNsaWNrSXRlbURpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hZGRlZFNsaWRlcy5wdXNoKHNsaWNrSXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlU2xpZGUoc2xpY2tJdGVtOiBTbGlja0l0ZW1EaXJlY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlZFNsaWRlcy5wdXNoKHNsaWNrSXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2xpY2sgTWV0aG9kXG4gICAgICovXG4gICAgcHVibGljIHNsaWNrR29UbyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tOZXh0KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tQcmV2KCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3NsaWNrUHJldicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2xpY2tQYXVzZSgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbGlja1BsYXkoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnN0YW5jZS5zbGljaygnc2xpY2tQbGF5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy4kaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2Uuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kaW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2NvbmZpZyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZSAmJiBjaGFuZ2VzWydjb25maWcnXS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoID0gY2hhbmdlc1snY29uZmlnJ10uY3VycmVudFZhbHVlWydyZWZyZXNoJ107XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGNoYW5nZXNbJ2NvbmZpZyddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5ld09wdGlvbnNbJ3JlZnJlc2gnXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluc3RhbmNlLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIG5ld09wdGlvbnMsIHJlZnJlc2gpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFNsaWNrSXRlbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0l0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIEBIb3N0KCkgcHJpdmF0ZSBjYXJvdXNlbDogU2xpY2tDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NsaWNrQ2Fyb3VzZWxDb21wb25lbnQsIFNsaWNrSXRlbURpcmVjdGl2ZX0gZnJvbSAnLi9zbGljay5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NsaWNrLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2xpY2tDYXJvdXNlbENvbXBvbmVudCxcbiAgICBTbGlja0l0ZW1EaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTbGlja0Nhcm91c2VsQ29tcG9uZW50LFxuICAgIFNsaWNrSXRlbURpcmVjdGl2ZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlja0Nhcm91c2VsTW9kdWxlIHtcbn1cbiJdfQ==

/***/ }),

/***/ 93576:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ 15730);
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 67104);
var observable_1 = __webpack_require__(/*! ./symbol/observable */ 96232);
var pipe_1 = __webpack_require__(/*! ./util/pipe */ 23915);
var config_1 = __webpack_require__(/*! ./config */ 68273);
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 16011:
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(/*! ./config */ 68273);
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 32434);
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ 67241:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 67382);
var Observer_1 = __webpack_require__(/*! ./Observer */ 16011);
var Subscription_1 = __webpack_require__(/*! ./Subscription */ 43984);
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 81476);
var config_1 = __webpack_require__(/*! ./config */ 68273);
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 32434);
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ 43984:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ./util/isArray */ 40993);
var isObject_1 = __webpack_require__(/*! ./util/isObject */ 54720);
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 67382);
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 18574);
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ 68273:
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 48178:
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/innerSubscribe.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 67241);
var Observable_1 = __webpack_require__(/*! ./Observable */ 93576);
var subscribeTo_1 = __webpack_require__(/*! ./util/subscribeTo */ 50747);
var SimpleInnerSubscriber = (function (_super) {
    __extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber_1.Subscriber));
exports.SimpleInnerSubscriber = SimpleInnerSubscriber;
var ComplexInnerSubscriber = (function (_super) {
    __extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(Subscriber_1.Subscriber));
exports.ComplexInnerSubscriber = ComplexInnerSubscriber;
var SimpleOuterSubscriber = (function (_super) {
    __extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber_1.Subscriber));
exports.SimpleOuterSubscriber = SimpleOuterSubscriber;
var ComplexOuterSubscriber = (function (_super) {
    __extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function (error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(Subscriber_1.Subscriber));
exports.ComplexOuterSubscriber = ComplexOuterSubscriber;
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(innerSubscriber);
    }
    var subscription;
    try {
        subscription = subscribeTo_1.subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
exports.innerSubscribe = innerSubscribe;
//# sourceMappingURL=innerSubscribe.js.map

/***/ }),

/***/ 17778:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ 93576);
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ 43655);
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ 18662);
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ 98779:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/of.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 80130);
var fromArray_1 = __webpack_require__(/*! ./fromArray */ 17778);
var scheduleArray_1 = __webpack_require__(/*! ../scheduled/scheduleArray */ 18662);
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        args.pop();
        return scheduleArray_1.scheduleArray(args, scheduler);
    }
    else {
        return fromArray_1.fromArray(args);
    }
}
exports.of = of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 43575:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/catchError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var innerSubscribe_1 = __webpack_require__(/*! ../innerSubscribe */ 48178);
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
exports.catchError = catchError;
var CatchOperator = (function () {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}());
var CatchSubscriber = (function (_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
    }
    CatchSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            var innerSubscriber = new innerSubscribe_1.SimpleInnerSubscriber(this);
            this.add(innerSubscriber);
            var innerSubscription = innerSubscribe_1.innerSubscribe(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                this.add(innerSubscription);
            }
        }
    };
    return CatchSubscriber;
}(innerSubscribe_1.SimpleOuterSubscriber));
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 18662:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduled/scheduleArray.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ 93576);
var Subscription_1 = __webpack_require__(/*! ../Subscription */ 43984);
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var sub = new Subscription_1.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
exports.scheduleArray = scheduleArray;
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ 68810:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ 96232:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 81476:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ 18574:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 15730:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 67241);
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ 32434:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ 72516:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 40993:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ 19042:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 67382:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 54720:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ 9887:
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 80130:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isScheduler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 23915:
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var identity_1 = __webpack_require__(/*! ./identity */ 72516);
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 50747:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ 43655);
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ 69237);
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ 17994);
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ 73189);
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ 19042);
var isPromise_1 = __webpack_require__(/*! ./isPromise */ 9887);
var isObject_1 = __webpack_require__(/*! ./isObject */ 54720);
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 68810);
var observable_1 = __webpack_require__(/*! ../symbol/observable */ 96232);
exports.subscribeTo = function (result) {
    if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ 43655:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ 17994:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 68810);
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = void 0;
        try {
            item = iterator.next();
        }
        catch (err) {
            subscriber.error(err);
            return subscriber;
        }
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ 73189:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var observable_1 = __webpack_require__(/*! ../symbol/observable */ 96232);
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ 69237:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ 32434);
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ 67104:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 67241);
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 81476);
var Observer_1 = __webpack_require__(/*! ../Observer */ 16011);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ 88587:
/*!*********************************************************!*\
  !*** ./src/app/components/booking/booking.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponent": () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./booking.component.html */ 92379);
/* harmony import */ var _booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.component.scss */ 60656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_services_citi_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/citi-validators.service */ 47483);
/* harmony import */ var src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/summary.selectors */ 46285);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ 43575);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/observable/of */ 98779);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location.service */ 87080);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_store_actions_locations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/actions/locations */ 60642);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/commons.service */ 93765);








//import * as fromContent from '../../store/actions/content';







let BookingComponent = class BookingComponent {
    constructor(store, fb, citiValidators, locationService, _common) {
        this.store = store;
        this.fb = fb;
        this.citiValidators = citiValidators;
        this.locationService = locationService;
        this._common = _common;
        this.showComponents = false;
    }
    ngAfterViewInit() {
        this.showComponent();
    }
    ngOnInit() {
        //this.store.dispatch( fromContent.set_progress_bar({dataProgressBar: this.dataProgressBar}));
        this.store.select(src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.summary).subscribe((dataSummary) => {
            this.dataSummary = dataSummary;
            dataSummary.step = 'booking';
        });
        this.createBookingForm();
    }
    showSummary() {
        return this.dataSummary.showSummary;
    }
    showComponent() {
        if (this.dataSummary.showSummary == false && this.dataSummary.step == 'thank-you') {
            this.showComponents = false;
        }
    }
    componentAdded(event) {
        if (event) {
            this.showComponents = event.constructor.name == "SummaryBookingComponent" ? false : true;
        }
    }
    createBookingForm() {
        this.contractorForm = this.fb.group({
            dataContractor: this.fb.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.lettersWithHyphensAccentsAndSpaces
                    ])],
                secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        this.citiValidators.lettersWithHyphensAccentsAndSpaces
                    ])],
                firstLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.lettersWithHyphensAccentsAndSpaces
                    ])],
                secondLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.lettersWithHyphensAccentsAndSpaces
                    ])],
                gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                birthDateDay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(31)
                    ])],
                birthDateMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12)
                    ])],
                birthDateYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1900),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(+moment__WEBPACK_IMPORTED_MODULE_4__().year)
                    ])],
                rfc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        this.citiValidators.alphanumeric
                    ])],
                homoKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3)
                    ])],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.email
                    ])],
                dob: ['']
            }, {
                validator: this.citiValidators.minimumAge(18)
            }),
            dataInsured: this.fb.group({
                adults: this.fb.array([]),
                children: this.fb.array([])
            }),
            addressContractor: this.fb.group({
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.alphanumericWithSpace
                    ])],
                exteriorNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.alphanumeric
                    ])],
                internalNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                        this.citiValidators.alphanumeric
                    ])],
                zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        this.citiValidators.zipCode
                    ]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.composeAsync([
                        this.validateZipcode.bind(this)
                    ])],
                state: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    //Validators.required
                    ])],
                city: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    //Validators.required
                    ])],
                municipality: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    //Validators.required
                    ])],
                colony: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])]
            }),
            contractorTerms: this.fb.group({
                terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue
                    ])],
                contractorTraveling: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])]
            }),
            iFrameTerms: this.fb.group({
                terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue
                    ])],
                cover: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue
                    ])]
            })
        });
    }
    onSubmit() {
    }
    validateZipcode(control) {
        const dataBookingCtrl = this.contractorForm.controls.addressContractor;
        const bookingCtrl = dataBookingCtrl.controls;
        return this.locationService.getColoniesByZipCode(control.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((zipcode) => {
            if (zipcode) {
                bookingCtrl.state.setValue(zipcode[0].stateName);
                bookingCtrl.municipality.setValue(zipcode[0].municipalityName);
                bookingCtrl.city.setValue(zipcode[0].populationName);
                //this.zipCodeData = zipcode[0].zipcode;
                this.store.dispatch((0,src_app_store_actions_locations__WEBPACK_IMPORTED_MODULE_6__.load_colonies_zipcode)({ zipCode: zipcode[0].zipcode }));
            }
            return zipcode ? null : { invalidZipCode: true };
        }), (0,rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
            // console.log(err.message);
            return (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_13__.of)({ invalidZipCode: true });
        })).toPromise();
    }
};
BookingComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_citi_validators_service__WEBPACK_IMPORTED_MODULE_2__.CitiValidatorsService },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__.LocationService },
    { type: src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_7__.CommonsService }
];
BookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-booking',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookingComponent);



/***/ }),

/***/ 59965:
/*!******************************************************!*\
  !*** ./src/app/components/booking/booking.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModule": () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.component */ 88587);
/* harmony import */ var _step1_a_customer_data_customer_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1-a-customer-data/customer-data.component */ 30885);
/* harmony import */ var _step1_b_insured_data_insured_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step1-b-insured-data/insured-data.component */ 44729);
/* harmony import */ var _step2_confirmation_data_confirmation_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step2-confirmation-data/confirmation-data.component */ 35769);
/* harmony import */ var _step3_payment_data_payment_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step3-payment-data/payment-data.component */ 9304);
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you/thank-you.component */ 85037);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 4065);
/* harmony import */ var _booking_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking.routing */ 1723);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/directives.module */ 78434);
/* harmony import */ var _step1_b_insured_data_insured_form_insured_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step1-b-insured-data/insured-form/insured-form.component */ 38365);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/reducers/booking */ 32836);
/* harmony import */ var _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/reducers/locations */ 52513);
/* harmony import */ var _summary_booking_summary_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary-booking/summary-booking.component */ 26824);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/effects */ 94589);
/* harmony import */ var _step3_payment_data_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./step3-payment-data/components/payment/payment.component */ 65870);
/* harmony import */ var _shared_banner_banner_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/banner/banner.module */ 32103);






















let BookingModule = class BookingModule {
};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent,
            _step1_a_customer_data_customer_data_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDataComponent,
            _step1_b_insured_data_insured_data_component__WEBPACK_IMPORTED_MODULE_2__.InsuredDataComponent,
            _step2_confirmation_data_confirmation_data_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDataComponent,
            _step3_payment_data_payment_data_component__WEBPACK_IMPORTED_MODULE_4__.PaymentDataComponent,
            _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent,
            _step1_b_insured_data_insured_form_insured_form_component__WEBPACK_IMPORTED_MODULE_9__.InsuredFormComponent,
            _summary_booking_summary_booking_component__WEBPACK_IMPORTED_MODULE_12__.SummaryBookingComponent,
            _step3_payment_data_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__.PaymentComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__.PipesModule,
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_14__.BookingEffectsArr),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.riskFeatureKey, _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.riskReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.contractorDataFeatureKey, _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.contractorDataReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.rfcFeatureKey, _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.rfcReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.statesFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.statesReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.municipalitiesFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.municipalitiesReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.populationsFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.populationsReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.coloniesFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.coloniesReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.coloniesByNameFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.coloniesByNameReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.zipCodeFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_11__.zipCodeReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.paymentFeatureKey, _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.paymentReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_21__.StoreModule.forFeature(_store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.issuanceFeatureKey, _store_reducers_booking__WEBPACK_IMPORTED_MODULE_10__.issuanceReducer),
            _booking_routing__WEBPACK_IMPORTED_MODULE_7__.BookingRouting,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__.DirectivesModule,
            _shared_banner_banner_module__WEBPACK_IMPORTED_MODULE_16__.BannerModule
        ]
    })
], BookingModule);



/***/ }),

/***/ 1723:
/*!*******************************************************!*\
  !*** ./src/app/components/booking/booking.routing.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingRouting": () => (/* binding */ BookingRouting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _step1_a_customer_data_customer_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1-a-customer-data/customer-data.component */ 30885);
/* harmony import */ var _step1_b_insured_data_insured_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step1-b-insured-data/insured-data.component */ 44729);
/* harmony import */ var _step2_confirmation_data_confirmation_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step2-confirmation-data/confirmation-data.component */ 35769);
/* harmony import */ var _step3_payment_data_payment_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step3-payment-data/payment-data.component */ 9304);
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thank-you/thank-you.component */ 85037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.component */ 88587);
/* harmony import */ var _summary_booking_summary_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary-booking/summary-booking.component */ 26824);










const BOOKING_ROUTES = [
    {
        path: '',
        redirectTo: ':destino/datos-contratante',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _booking_component__WEBPACK_IMPORTED_MODULE_5__.BookingComponent,
        children: [
            {
                path: ':destino/datos-contratante',
                component: _step1_a_customer_data_customer_data_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDataComponent,
                data: {
                    currentStep: 1
                }
            },
            {
                path: ':destino/datos-asegurados',
                component: _step1_b_insured_data_insured_data_component__WEBPACK_IMPORTED_MODULE_1__.InsuredDataComponent,
                data: {
                    currentStep: 1
                }
            },
            {
                path: ':destino/confirmacion',
                component: _step2_confirmation_data_confirmation_data_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDataComponent,
                data: {
                    currentStep: 2
                }
            },
            {
                path: ':destino/pago',
                component: _step3_payment_data_payment_data_component__WEBPACK_IMPORTED_MODULE_3__.PaymentDataComponent,
                data: {
                    currentStep: 3
                }
            },
            {
                path: ':destino/thank-you',
                component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__.ThankYouComponent,
                data: {
                    currentStep: 4
                }
            },
            {
                path: ':destino/resumen',
                component: _summary_booking_summary_booking_component__WEBPACK_IMPORTED_MODULE_6__.SummaryBookingComponent,
                data: {}
            }
        ]
    },
];
let BookingRouting = class BookingRouting {
};
BookingRouting = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(BOOKING_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
        providers: []
    })
], BookingRouting);



/***/ }),

/***/ 30885:
/*!*************************************************************************************!*\
  !*** ./src/app/components/booking/step1-a-customer-data/customer-data.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDataComponent": () => (/* binding */ CustomerDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customer-data.component.html */ 78480);
/* harmony import */ var _customer_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-data.component.scss */ 6714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/quote/user-info.model */ 26553);
/* harmony import */ var src_app_store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/locations.selectors */ 83929);
/* harmony import */ var src_app_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/selectors/quote.selector */ 36229);
/* harmony import */ var src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/selectors/summary.selectors */ 46285);
/* harmony import */ var _directives_mask_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/mask.utils */ 85460);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/content */ 15530);
/* harmony import */ var _store_actions_booking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/booking */ 58015);
/* harmony import */ var _shared_zip_code_zip_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/zip-code/zip-code.component */ 29152);
/* harmony import */ var _models_booking_contractor_info_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../models/booking/contractor-info.model */ 69321);
/* harmony import */ var _models_booking_contractor_address_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../models/booking/contractor-address.model */ 13805);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/booking.service */ 62169);
/* harmony import */ var _services_commons_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/commons.service */ 93765);
/* harmony import */ var _models_booking_contractor_terms_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../models/booking/contractor-terms.model */ 52263);
/* harmony import */ var _shared_modal_error_v2_modal_error_v2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/modal-error-v2/modal-error-v2.component */ 18807);
























let CustomerDataComponent = class CustomerDataComponent {
    constructor(parentControl, router, route, store, dialog, bookingService, _commons) {
        this.parentControl = parentControl;
        this.router = router;
        this.route = route;
        this.store = store;
        this.dialog = dialog;
        this.bookingService = bookingService;
        this._commons = _commons;
        this.birthDateMonthField = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef(_angular_core__WEBPACK_IMPORTED_MODULE_16__.asNativeElements);
        this.birthDateYearField = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef(_angular_core__WEBPACK_IMPORTED_MODULE_16__.asNativeElements);
        this.homoKeyMask = _directives_mask_utils__WEBPACK_IMPORTED_MODULE_6__.homoKeyMask;
        this.phoneMask = _directives_mask_utils__WEBPACK_IMPORTED_MODULE_6__.phoneMask;
        this.zipCodeMask = _directives_mask_utils__WEBPACK_IMPORTED_MODULE_6__.zipCodeMask;
        this.colonies = [];
        this.colonyId = undefined;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    }
    ngOnInit() {
        this.dataContractor = this.dataContractorFormData;
        this.addressContractor = this.addressContractorFormData;
        this.contractorTerms = this.contractorTermsFormData;
        this.store.select(src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__.summary).subscribe((dataSummary) => {
            this.dataSummary = dataSummary;
        });
        this.store.select(src_app_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_4__.userInfoSelect).subscribe((user) => {
            this.userInfo = new src_app_models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_2__.UserInfoModel(user);
            if (this.userInfo) {
                this.dataContractor.controls.firstName.setValue(this.userInfo.insuredData.firstName);
                this.dataContractor.controls.phone.setValue(this.userInfo.cellPhone);
                this.dataContractor.controls.email.setValue(this.userInfo.email);
            }
        });
        this.store.select(src_app_store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_3__.selectZipCodeColonies).subscribe((result) => {
            if (result && result.loaded) {
                this.colonies = result.colonies;
                if (this.colonyId) {
                    let r = this.colonies.filter(item => {
                        var _a;
                        return item.colonyId == ((_a = this.colonyId) === null || _a === void 0 ? void 0 : _a.toString());
                    });
                    if (r && r.length > 0)
                        this.addressContractor.controls.colony.setValue(r[0].colonyName);
                }
            }
        });
        this.updateProgressBar();
    }
    ngAfterViewInit() {
        const firstNameField = this.dataContractor.get('firstName');
        const secondNameField = this.dataContractor.get('secondName');
        const firstLastNameField = this.dataContractor.get('firstLastName');
        const secondLastNameField = this.dataContractor.get('secondLastName');
        const birthDateYearField = this.dataContractor.get('birthDateYear');
        const birthDateMonthField = this.dataContractor.get('birthDateMonth');
        const birthDateDayField = this.dataContractor.get('birthDateDay');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(...[
            (firstNameField === null || firstNameField === void 0 ? void 0 : firstNameField.valueChanges) || '',
            (secondNameField === null || secondNameField === void 0 ? void 0 : secondNameField.valueChanges) || '',
            (firstLastNameField === null || firstLastNameField === void 0 ? void 0 : firstLastNameField.valueChanges) || '',
            (secondLastNameField === null || secondLastNameField === void 0 ? void 0 : secondLastNameField.valueChanges) || '',
            (birthDateYearField === null || birthDateYearField === void 0 ? void 0 : birthDateYearField.valueChanges) || '',
            (birthDateMonthField === null || birthDateMonthField === void 0 ? void 0 : birthDateMonthField.valueChanges) || '',
            (birthDateDayField === null || birthDateDayField === void 0 ? void 0 : birthDateDayField.valueChanges) || '',
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroyed$))
            .subscribe(() => {
            if ((firstNameField === null || firstNameField === void 0 ? void 0 : firstNameField.valid) && (secondNameField === null || secondNameField === void 0 ? void 0 : secondNameField.valid) && (firstLastNameField === null || firstLastNameField === void 0 ? void 0 : firstLastNameField.valid) && (secondLastNameField === null || secondLastNameField === void 0 ? void 0 : secondLastNameField.valid) && (birthDateYearField === null || birthDateYearField === void 0 ? void 0 : birthDateYearField.valid) && (birthDateMonthField === null || birthDateMonthField === void 0 ? void 0 : birthDateMonthField.valid) && (birthDateDayField === null || birthDateDayField === void 0 ? void 0 : birthDateDayField.valid)) {
                const values = {
                    name: firstNameField.value + (secondNameField.value ? ' ' + secondNameField.value : ''),
                    lastName: firstLastNameField.value,
                    surName: secondLastNameField.value,
                    dob: this.getbirthDate(),
                };
                this.setRFC(values);
            }
        });
    }
    goToBack() {
        this.router.navigate([this.dataSummary.package, 'cotizacion', this.dataSummary.destinations, 'planes'], {
            //relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        var _a;
        const traveling = (_a = this.contractorTerms.get('contractorTraveling')) === null || _a === void 0 ? void 0 : _a.value;
        if (this.getAge() > 79 && (traveling && traveling == 'true')) {
            this.openDialog();
            return;
        }
        this.setDob();
        const contractorInfo = new _models_booking_contractor_info_model__WEBPACK_IMPORTED_MODULE_10__.ContractorInfoModel(this.dataContractorFormData.value);
        const contractorAddress = new _models_booking_contractor_address_model__WEBPACK_IMPORTED_MODULE_11__.ContractorAddressModel(this.addressContractorFormData.value);
        const contractorTerms = new _models_booking_contractor_terms_model__WEBPACK_IMPORTED_MODULE_14__.ContractorTermsModel(this.contractorTermsFormData.value);
        this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_8__.set_contractor_info({ contractorInfo }));
        this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_8__.set_contractor_address({ contractorAddress }));
        this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_8__.set_contractor_terms({ contractorTerms }));
        this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_8__.create_person());
        this._commons.clearCaptured();
        this.router.navigate(['..', 'datos-asegurados'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    keytab(event, maxLength) {
        if (event.target.value.length === maxLength && event.currentTarget.id === 'birthDateDay') {
            this.birthDateMonthField.nativeElement.focus();
        }
        else if (event.target.value.length === maxLength && event.currentTarget.id === 'birthDateMonth') {
            this.birthDateYearField.nativeElement.focus();
        }
    }
    autocompleteEmail(event) {
        var _a;
        const value = (_a = this.dataContractor.get('email')) === null || _a === void 0 ? void 0 : _a.value;
        if (event.endsWith('@')) {
            this.emailList = [
                `${value}gmail.com`,
                `${value}outlook.com`,
                `${value}live.com.mx`,
                `${value}hotmail.com`,
                `${value}yahoo.com`,
                `${value}aol.com`
            ];
        }
        if (!event.includes('@')) {
            this.emailList = [];
        }
    }
    getPhoneHint(phone) {
        const value = phone.replace(/\D+/g, '');
        return `${value.length || 0}/10`;
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_7__.update_step_progress_bar({ step }));
        });
    }
    get dataContractorFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataContractor');
    }
    get addressContractorFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('addressContractor');
    }
    get contractorTermsFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('contractorTerms');
    }
    openZipCodeDialog() {
        this.colonyId = undefined;
        const dialogRef = this.dialog.open(_shared_zip_code_zip_code_component__WEBPACK_IMPORTED_MODULE_9__.ZipCodeComponent, {});
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.addressContractor.controls.zipCode.setValue(result.zipCode.zipcode);
                this.addressContractor.controls.state.setValue(result.state.stateName);
                this.addressContractor.controls.city.setValue(result.population.populationName);
                this.addressContractor.controls.municipality.setValue(result.municipality.municipalityName);
                this.colonyId = result.colony.colonyId;
            }
        });
    }
    setDob() {
        var _a, _b, _c, _d;
        const day = (_a = this.dataContractorFormData.get('birthDateDay')) === null || _a === void 0 ? void 0 : _a.value;
        const month = (_b = this.dataContractorFormData.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.value;
        const year = (_c = this.dataContractorFormData.get('birthDateYear')) === null || _c === void 0 ? void 0 : _c.value;
        const dob = this._commons.setDob(day, month, year, true);
        (_d = this.dataContractorFormData.get('dob')) === null || _d === void 0 ? void 0 : _d.setValue(dob);
    }
    getbirthDate() {
        var _a, _b, _c;
        const day = (_a = this.dataContractorFormData.get('birthDateDay')) === null || _a === void 0 ? void 0 : _a.value;
        const month = (_b = this.dataContractorFormData.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.value;
        const year = (_c = this.dataContractorFormData.get('birthDateYear')) === null || _c === void 0 ? void 0 : _c.value;
        return this._commons.setDob(day, month, year);
    }
    setRFC(formData) {
        return this._commons.setRfc(formData, true).then((ev) => {
            var _a, _b, _c, _d;
            (_b = (_a = this.dataContractorFormData) === null || _a === void 0 ? void 0 : _a.get('rfc')) === null || _b === void 0 ? void 0 : _b.setValue(ev.rfc);
            (_d = (_c = this.dataContractorFormData) === null || _c === void 0 ? void 0 : _c.get('homoKey')) === null || _d === void 0 ? void 0 : _d.setValue(ev.homoKey);
        });
    }
    getAge() {
        var _a, _b, _c;
        const day = (_a = this.dataContractorFormData.get('birthDateDay')) === null || _a === void 0 ? void 0 : _a.value;
        const month = (_b = this.dataContractorFormData.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.value;
        const year = (_c = this.dataContractorFormData.get('birthDateYear')) === null || _c === void 0 ? void 0 : _c.value;
        const date = `${month}/${day}/${year}`;
        return this._commons.getAge(date);
    }
    openDialog() {
        const dialogRef = this.dialog.open(_shared_modal_error_v2_modal_error_v2_component__WEBPACK_IMPORTED_MODULE_15__.ModalErrorV2Component, {
            data: { title: '¡Lo sentimos!', message: 'La edad máxima para poder asegurarte debe ser de 79 años, por favor verifica tu información', buttonText: 'Verificar fecha', linkText: 'Finalizar' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.info(result);
            if (result == 'link') {
                //TODO :
            }
        });
    }
};
CustomerDataComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ControlContainer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_22__.Store },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog },
    { type: src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_12__.BookingService },
    { type: _services_commons_service__WEBPACK_IMPORTED_MODULE_13__.CommonsService }
];
CustomerDataComponent.propDecorators = {
    birthDateMonthField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['birthDateMonth',] }],
    birthDateYearField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['birthDateYear',] }]
};
CustomerDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-customer-data',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewEncapsulation.None,
        styles: [_customer_data_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerDataComponent);



/***/ }),

/***/ 44729:
/*!***********************************************************************************!*\
  !*** ./src/app/components/booking/step1-b-insured-data/insured-data.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuredDataComponent": () => (/* binding */ InsuredDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insured_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./insured-data.component.html */ 17531);
/* harmony import */ var _insured_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insured-data.component.scss */ 30317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_citi_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/citi-validators.service */ 47483);
/* harmony import */ var _store_actions_booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/booking */ 58015);
/* harmony import */ var _models_booking_create_risk_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/booking/create-risk.model */ 76078);
/* harmony import */ var _models_booking_data_insured_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/booking/data-insured.model */ 11641);













let InsuredDataComponent = class InsuredDataComponent {
    constructor(store, fb, parentControl, router, route, citiValidators) {
        this.store = store;
        this.fb = fb;
        this.parentControl = parentControl;
        this.router = router;
        this.route = route;
        this.citiValidators = citiValidators;
        this.children = [];
        this.adults = [];
        this.sumAdults = 0;
        this.adultsValid = true;
        this.childrenValid = true;
        this.validForm = false;
    }
    ngOnInit() {
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_2__.summary).subscribe((dataSummary) => { this.dataSummary = dataSummary; });
        this.parentForm = this.dataInsuredFormData;
        this.setPeopleCount();
        this.setSumAdults();
        this.addChildrenForms();
        this.addAdultsForms();
    }
    goToBack() {
        this.router.navigate(['..', 'datos-contratante'], {
            relativeTo: this.route,
            queryParams: { 'i': null, 'a': null },
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        const people = [];
        const insuredData = new _models_booking_create_risk_model__WEBPACK_IMPORTED_MODULE_6__.CreateRiskModel();
        this.personsAdultsFormData.controls.map((entity) => {
            people.push(new _models_booking_data_insured_model__WEBPACK_IMPORTED_MODULE_7__.DataInsuredModel(entity.value));
        });
        this.personsChildrenFormData.controls.map((entity) => {
            people.push(new _models_booking_data_insured_model__WEBPACK_IMPORTED_MODULE_7__.DataInsuredModel(entity.value));
        });
        // insuredData.dataInsured.push(...people);
        this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_5__.set_insured_data({ insuredData }));
        // this.store.dispatch( fromBooking.create_risk());
        this.router.navigate(['..', 'confirmacion'], {
            relativeTo: this.route,
            queryParams: { 'i': null, 'a': null },
            queryParamsHandling: 'merge',
        });
    }
    setSumAdults() {
        this.sumAdults = (this.dataSummary.adults) ? this.dataSummary.adults.length : 0;
    }
    get dataInsuredFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataInsured');
    }
    get dataContractorFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataContractor');
    }
    get contractorTraveling() {
        var _a, _b, _c;
        const terms = (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('contractorTerms');
        return (_c = terms.get('contractorTraveling')) === null || _c === void 0 ? void 0 : _c.value;
    }
    get personsAdultsFormData() {
        const parent = this.dataInsuredFormData;
        return parent.get('adults');
    }
    get personsChildrenFormData() {
        const parent = this.dataInsuredFormData;
        return parent.get('children');
    }
    addChildrenForms() {
        if (this.personsChildrenFormData.length != this.children.length)
            this.generateForms(this.personsChildrenFormData, this.children);
    }
    addAdultsForms() {
        if (this.personsAdultsFormData.length != this.adults.length)
            this.generateForms(this.personsAdultsFormData, this.adults);
    }
    generateForms(mainForm, count) {
        for (let childForm of count) {
            mainForm.push(this.insuredForms());
        }
        return mainForm;
    }
    insuredForms() {
        return this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                    this.citiValidators.lettersWithHyphensAccentsAndSpaces
                ])],
            secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    this.citiValidators.lettersWithHyphensAccentsAndSpaces
                ])],
            firstLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                    this.citiValidators.lettersWithHyphensAccentsAndSpaces
                ])],
            secondLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50),
                    this.citiValidators.lettersWithHyphensAccentsAndSpaces
                ])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                ])],
            birthDateDay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(31),
                ])],
            birthDateMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(12)
                ])],
            birthDateYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1900),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(+moment__WEBPACK_IMPORTED_MODULE_3__().year)
                ])],
            dob: [''],
            rfc: ['']
        }, {
            validator: this.citiValidators.maxAge(79)
        });
    }
    setPeopleCount() {
        var _a, _b;
        this.children = ((_a = this.dataSummary.children) === null || _a === void 0 ? void 0 : _a.length) ? this.dataSummary.children : [];
        this.adults = ((_b = this.dataSummary.adults) === null || _b === void 0 ? void 0 : _b.length) ? this.dataSummary.adults : [];
        this.showFormsAdult = this.adults.length > 0 ? true : false;
        this.showFormsChildren = this.children.length > 0 && this.adults.length == 0 ? true : false;
    }
    setShowForms(result) {
        if (result.showForm && result.formType == 'ADULTO')
            this.showFormsChildren = true;
    }
    validateForms(result) {
        if (result.formType == 'ADULTO') {
            this.adultsValid = result.valid;
        }
        if (result.formType == 'MENOR') {
            this.childrenValid = result.valid;
        }
        this.validForm = this.personsAdultsFormData.valid && this.personsChildrenFormData.valid && this.childrenValid && this.adultsValid;
    }
};
InsuredDataComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_citi_validators_service__WEBPACK_IMPORTED_MODULE_4__.CitiValidatorsService }
];
InsuredDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-insured-data',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectionStrategy.OnPush,
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insured_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_insured_data_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InsuredDataComponent);



/***/ }),

/***/ 38365:
/*!************************************************************************************************!*\
  !*** ./src/app/components/booking/step1-b-insured-data/insured-form/insured-form.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuredFormComponent": () => (/* binding */ InsuredFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insured_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./insured-form.component.html */ 23523);
/* harmony import */ var _insured_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insured-form.component.scss */ 87220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/commons.service */ 93765);
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/booking.service */ 62169);
/* harmony import */ var _store_actions_booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/actions/booking */ 58015);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _models_booking_data_insured_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/booking/data-insured.model */ 11641);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_components_shared_modal_error_v2_modal_error_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/modal-error-v2/modal-error-v2.component */ 18807);












let InsuredFormComponent = class InsuredFormComponent {
    constructor(store, ref, _commons, _booking, route, dialog) {
        this.store = store;
        this.ref = ref;
        this._commons = _commons;
        this._booking = _booking;
        this.route = route;
        this.dialog = dialog;
        this.formType = 'uno';
        this.formArrName = 'uno';
        this.index = 0;
        this.agesArr = [];
        this.setShowForms = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.validateForms = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.hideForm = [];
        this.showForm = [];
        this.showAgeError = [];
        this.editMode = false;
    }
    ngOnInit() {
        this.setToggle();
        this.route.queryParams
            .subscribe(params => {
            if (params.i != undefined && params.a != undefined) {
                this.editMode = true;
                if (this.formType == 'MENOR' && params.a == 'false') {
                    this.agesArr.forEach((x, i) => {
                        if (params.i == i) {
                            this.hideForm[i] = false;
                            this.toggleForm(i, this.childFormData.controls[0]);
                        }
                        this.showForm[i] = true;
                    });
                }
                else if (this.formType == 'ADULTO' && params.a == 'true') {
                    this.agesArr.forEach((x, i) => {
                        if (params.i == i) {
                            this.hideForm[i] = false;
                            this.toggleForm(i, this.childFormData.controls[0]);
                        }
                        this.showForm[i] = true;
                    });
                }
                else {
                    this.agesArr.forEach((x, i) => {
                        this.showForm[i] = true;
                    });
                }
            }
        });
    }
    setToggle() {
        if (this.isTraveling == 'true') {
            this.childFormData.controls.forEach((x, i) => {
                if (i > 0) {
                    if (x.valid)
                        this.toggleForm(i, x);
                }
            });
        }
        else {
            this.childFormData.controls.forEach((x, i) => {
                if (x.valid)
                    this.toggleForm(i, x);
            });
        }
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (changes.hasOwnProperty(propName)) {
                let change = changes[propName];
                switch (propName) {
                    case 'isTraveling': {
                        this.setContractorData(change.currentValue);
                        this.showForm[0] = true;
                        break;
                    }
                    case 'agesArr': {
                        this.agesArr.forEach(() => {
                            this.hideForm.push(true);
                            this.showForm.push(false);
                            this.showAgeError.push(false);
                        });
                        if (this.isTraveling == 'true' && this.agesArr.length > 1)
                            this.showForm[1] = true;
                        else if (this.showForms)
                            this.showForm[0] = true;
                        break;
                    }
                    case 'showForms': {
                        if (this.showForms && this.formType == 'MENOR' && this.agesArr.length > 0) {
                            this.showForm[0] = true;
                        }
                    }
                }
            }
        }
    }
    setContractorData(isTraveling) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const contractor = this.parentForm;
        if (JSON.parse(isTraveling)) {
            const day = (_a = contractor === null || contractor === void 0 ? void 0 : contractor.get('birthDateDay')) === null || _a === void 0 ? void 0 : _a.value;
            const month = (_b = contractor === null || contractor === void 0 ? void 0 : contractor.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.value;
            const year = (_c = contractor === null || contractor === void 0 ? void 0 : contractor.get('birthDateYear')) === null || _c === void 0 ? void 0 : _c.value;
            const dob = this._commons.setDob(day, month, year);
            (_d = this.childFormData.controls[0].get('firstName')) === null || _d === void 0 ? void 0 : _d.setValue((_e = contractor === null || contractor === void 0 ? void 0 : contractor.get('firstName')) === null || _e === void 0 ? void 0 : _e.value);
            (_f = this.childFormData.controls[0].get('secondName')) === null || _f === void 0 ? void 0 : _f.setValue((_g = contractor === null || contractor === void 0 ? void 0 : contractor.get('secondName')) === null || _g === void 0 ? void 0 : _g.value);
            (_h = this.childFormData.controls[0].get('firstLastName')) === null || _h === void 0 ? void 0 : _h.setValue((_j = contractor === null || contractor === void 0 ? void 0 : contractor.get('firstLastName')) === null || _j === void 0 ? void 0 : _j.value);
            (_k = this.childFormData.controls[0].get('secondLastName')) === null || _k === void 0 ? void 0 : _k.setValue((_l = contractor === null || contractor === void 0 ? void 0 : contractor.get('secondLastName')) === null || _l === void 0 ? void 0 : _l.value);
            (_m = this.childFormData.controls[0].get('gender')) === null || _m === void 0 ? void 0 : _m.setValue((_o = contractor === null || contractor === void 0 ? void 0 : contractor.get('gender')) === null || _o === void 0 ? void 0 : _o.value);
            (_p = this.childFormData.controls[0].get('birthDateDay')) === null || _p === void 0 ? void 0 : _p.setValue(day);
            (_q = this.childFormData.controls[0].get('birthDateMonth')) === null || _q === void 0 ? void 0 : _q.setValue(month);
            (_r = this.childFormData.controls[0].get('birthDateYear')) === null || _r === void 0 ? void 0 : _r.setValue(year);
            (_s = this.childFormData.controls[0].get('dob')) === null || _s === void 0 ? void 0 : _s.setValue(dob);
            this.toggleForm(0, this.childFormData.controls[0]);
        }
    }
    toBool(a) {
        return Boolean(a).valueOf();
    }
    toggleForm(i, insured) {
        var _a, _b;
        const insuredData = new _models_booking_data_insured_model__WEBPACK_IMPORTED_MODULE_5__.DataInsuredModel(insured.value);
        const day = insured.value.birthDateDay;
        const month = insured.value.birthDateMonth;
        const year = insured.value.birthDateYear;
        const dob = this._commons.setDob(day, month, year);
        const age = this._commons.getAge(`${month}/${day}/${year}`);
        this.showAgeError[i] = false;
        if (!this.hideForm[i]) {
            this._commons.removeAge(age, this.formType == 'MENOR' ? false : true);
            (_a = insured.get('dob')) === null || _a === void 0 ? void 0 : _a.setValue('');
            this.hideForm[i] = !this.hideForm[i];
            this.validateForms.emit({ valid: false, formType: this.formType });
        }
        else {
            if (this._commons.validateYears(age, this.agesArr) && this._commons.validateDuplicated(age, this.agesArr, this.formType == 'MENOR' ? false : true)) {
                const rfc = {
                    name: insured.value.firstName,
                    lastName: insured.value.firstLastName,
                    surName: insured.value.secondLastName,
                    dob
                };
                this._commons.setRfc(rfc, false).then((rfcResponse) => {
                    var _a;
                    insuredData.rfc = String(rfcResponse);
                    insuredData.dob = this._commons.setDob(day, month, year, true);
                    this.store.dispatch(_store_actions_booking__WEBPACK_IMPORTED_MODULE_4__.create_risk({ insuredData }));
                    this.validateForms.emit({ valid: this.hideForm.some(x => x) ? false : true, formType: this.formType });
                    return (_a = insured.get('rfc')) === null || _a === void 0 ? void 0 : _a.setValue(rfcResponse);
                });
                (_b = insured.get('dob')) === null || _b === void 0 ? void 0 : _b.setValue(this._commons.setDob(day, month, year, true));
                this.hideForm[i] = !this.hideForm[i];
                if ((i + 1) == this.agesArr.length && this.formType == 'ADULTO' && !this.editMode)
                    this.setShowForms.emit({ showForm: true, formType: this.formType });
                if ((i + 1) < this.agesArr.length)
                    this.showForm[i + 1] = true;
            }
            else {
                this.showAgeError[i] = true;
                this.openAgeDialog();
            }
        }
    }
    get childFormData() {
        const parent = this.control;
        return parent.get(this.formArrName);
    }
    openAgeDialog() {
        const dialogRef = this.dialog.open(src_app_components_shared_modal_error_v2_modal_error_v2_component__WEBPACK_IMPORTED_MODULE_6__.ModalErrorV2Component, {
            data: {
                title: 'El precio de tu seguro cambia ',
                message: 'Las fechas de nacimiento no coinciden con las edades de la cotización, lo que cambiaría el precio de tu seguro.',
                buttonText: 'Recalcular precio',
                linkText: 'Editar fechas'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'button') {
                //TODO :
            }
        });
    }
};
InsuredFormComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService },
    { type: _services_booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog }
];
InsuredFormComponent.propDecorators = {
    control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['control',] }],
    formType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['formType',] }],
    formArrName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['formArrName',] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['index',] }],
    agesArr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['agesArr',] }],
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['parentForm',] }],
    isTraveling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['isTraveling',] }],
    showForms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['showForms',] }],
    setShowForms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    validateForms: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
InsuredFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-insured-form',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insured_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
        styles: [_insured_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InsuredFormComponent);



/***/ }),

/***/ 35769:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/booking/step2-confirmation-data/confirmation-data.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDataComponent": () => (/* binding */ ConfirmationDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirmation_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confirmation-data.component.html */ 36678);
/* harmony import */ var _confirmation_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-data.component.scss */ 99541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/content */ 15530);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 93765);










let ConfirmationDataComponent = class ConfirmationDataComponent {
    constructor(router, route, parentControl, store, _commons) {
        this.router = router;
        this.route = route;
        this.parentControl = parentControl;
        this.store = store;
        this._commons = _commons;
        this.dob = '';
        this.email = '';
        this.adults = [];
        this.childs = [];
        this.showTraveling = false;
    }
    ngOnInit() {
        this.dataContractor = this.dataContractorFormData;
        this.addressContractor = this.addressContractorFormData;
        this.contractorTerms = this.contractorTermsFormData;
        this.dataIssured = this.dataIssuredFormData;
        if (this.dataIssured) {
            let adults = this.dataIssured.controls.adults.value;
            if (this.contractorTerms.controls.contractorTraveling.value == 'true' && adults.length > 0) {
                adults.splice(0, 1);
                this.adults = adults;
                this.showTraveling = true;
            }
            else {
                this.adults = adults;
                this.showTraveling = false;
            }
            this.childs = this.dataIssured.controls.children.value;
        }
        if (this.dataContractor) {
            this.dob = this.getbirthDate();
            this.email = this.dataContractor.controls.email.value;
        }
        this.updateProgressBar();
    }
    goToBack() {
        this._commons.clearCaptured();
        this.router.navigate(['..', 'datos-asegurados'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        this.router.navigate(['..', 'pago'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_2__.update_step_progress_bar({ step }));
        });
    }
    goTo(route, index, adult = true, traveling = false) {
        this._commons.clearCaptured();
        if (this.contractorTerms.controls.contractorTraveling.value == 'true' && !traveling && adult)
            index = index + 1;
        this.router.navigate(['..', route], {
            queryParams: {
                i: index,
                a: adult
            },
            relativeTo: this.route,
        });
    }
    getbirthDate() {
        return moment__WEBPACK_IMPORTED_MODULE_3__({
            year: +this.dataContractor.controls.birthDateYear.value,
            month: +this.dataContractor.controls.birthDateMonth.value - 1,
            day: +this.dataContractor.controls.birthDateDay.value
        }).format('DD/MM/YYYY');
    }
    get dataContractorFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataContractor');
    }
    get addressContractorFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('addressContractor');
    }
    get contractorTermsFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('contractorTerms');
    }
    get dataIssuredFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataInsured');
    }
};
ConfirmationDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store },
    { type: src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService }
];
ConfirmationDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-confirmation-data',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confirmation_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
        styles: [_confirmation_data_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmationDataComponent);



/***/ }),

/***/ 65870:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/booking/step3-payment-data/components/payment/payment.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.component.html */ 22004);
/* harmony import */ var _payment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component.scss */ 58211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors */ 13654);
/* harmony import */ var src_app_models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/summary/summary.model */ 88981);
/* harmony import */ var src_app_models_booking_contractor_info_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/booking/contractor-info.model */ 69321);
/* harmony import */ var src_app_models_booking_payment_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/booking/payment.model */ 1143);
/* harmony import */ var src_app_store_actions_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/booking */ 58015);













let PaymentComponent = class PaymentComponent {
    constructor(domSanitizer, store) {
        this.domSanitizer = domSanitizer;
        this.store = store;
        this.iframe = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef(_angular_core__WEBPACK_IMPORTED_MODULE_8__.asNativeElements);
        this.paymentIsLoadingEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.summary$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.summaryData = new src_app_models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__.SummaryModel();
        this.contractorInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.contractorInfo = new src_app_models_booking_contractor_info_model__WEBPACK_IMPORTED_MODULE_5__.ContractorInfoModel();
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    }
    ngOnInit() {
        this.paymentIsLoadingEmiter.emit(true);
        this.summary$ = this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__.summary).subscribe((result) => {
            if (result) {
                this.summaryData = result;
                this.contractorInfo$ = this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__.contractorInfoSelect).subscribe((info) => {
                    var _a, _b, _c, _d;
                    if (info) {
                        this.contractorInfo = new src_app_models_booking_contractor_info_model__WEBPACK_IMPORTED_MODULE_5__.ContractorInfoModel(info);
                        let data = new src_app_models_booking_payment_model__WEBPACK_IMPORTED_MODULE_6__.PaymentDataModel();
                        data.kli = this.getPaymentBack();
                        data.mpa = ((_a = this.summaryData.planSelected) === null || _a === void 0 ? void 0 : _a.planCost) ? (_b = this.summaryData.planSelected) === null || _b === void 0 ? void 0 : _b.planCost.toString() : '0';
                        data.nma = this.getFullName();
                        data.vce = this.contractorInfo.email;
                        data.vel = ((_c = this.summaryData.planSelected) === null || _c === void 0 ? void 0 : _c.versionId) ? (_d = this.summaryData.planSelected) === null || _d === void 0 ? void 0 : _d.versionId.toString() : '';
                        this.store.dispatch((0,src_app_store_actions_booking__WEBPACK_IMPORTED_MODULE_7__.load_payment_data)({ paymentData: data }));
                    }
                });
            }
        });
        this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_3__.paymentStateSelect).subscribe((data) => {
            if (data.loaded) {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
                    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${data.paymentResult.url}`);
                }
                else {
                    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`${data.paymentResult.url}`);
                }
            }
        });
    }
    ngAfterViewInit() {
        const nativeEl = this.iframe.nativeElement;
        if ((nativeEl.contentDocument || nativeEl.contentWindow.document).readyState === 'complete') {
            nativeEl.onload = this.onIframeLoad.bind(this);
        }
        else {
            if (nativeEl.addEventListener) {
                nativeEl.addEventListener('load', this.onIframeLoad.bind(this), true);
            }
            else if (nativeEl.attachEvent) {
                nativeEl.attachEvent('onload', this.onIframeLoad.bind(this));
            }
        }
    }
    getPaymentBack() {
        const url = (0,_environments_environment__WEBPACK_IMPORTED_MODULE_2__.paymentBackEndUrlFormat)(this.summaryData.package.toString(), this.summaryData.destinations);
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.paymentConfig.paymentBackStartUrl + url;
    }
    onIframeLoad() {
        this.iframe.nativeElement.classList = ['iframe-loaded'];
        this.paymentIsLoadingEmiter.emit(false);
    }
    getFullName() {
        return this.contractorInfo.firstName + ' ' + (this.contractorInfo.secondName ? this.contractorInfo.secondName + ' ' : '') + this.contractorInfo.firstLastName + ' ' + this.contractorInfo.secondLastName;
    }
    ngOnDestroy() {
        this.summary$.unsubscribe();
        this.contractorInfo$.unsubscribe();
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store }
];
PaymentComponent.propDecorators = {
    iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['iframe', { static: false },] }],
    paymentIsLoadingEmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
PaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentComponent);



/***/ }),

/***/ 9304:
/*!*********************************************************************************!*\
  !*** ./src/app/components/booking/step3-payment-data/payment-data.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDataComponent": () => (/* binding */ PaymentDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment-data.component.html */ 52553);
/* harmony import */ var _payment_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-data.component.scss */ 5009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/quote/user-info.model */ 26553);
/* harmony import */ var src_app_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/selectors/quote.selector */ 36229);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions/content */ 15530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);











let PaymentDataComponent = class PaymentDataComponent {
    constructor(parentControl, router, store, route) {
        this.parentControl = parentControl;
        this.router = router;
        this.store = store;
        this.route = route;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.iFrameData = this.dataFrameFormData;
        this.store.select(src_app_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_3__.userInfoSelect).subscribe((user) => {
            this.userInfo = new src_app_models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_2__.UserInfoModel(user);
        });
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_4__.update_step_progress_bar({ step }));
        });
    }
    goToBack() {
        this.router.navigate(['..', 'confirmacion'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        this.router.navigate(['..', 'thank-you'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    onPaymentInfoIsLoading(creditInfoIsLoading) {
        //console.log(creditInfoIsLoading);
        //this.loading = creditInfoIsLoading;
    }
    get dataFrameFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('iFrameTerms');
    }
};
PaymentDataComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ControlContainer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
PaymentDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-payment-data',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_data_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentDataComponent);



/***/ }),

/***/ 26824:
/*!*********************************************************************************!*\
  !*** ./src/app/components/booking/summary-booking/summary-booking.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryBookingComponent": () => (/* binding */ SummaryBookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_summary_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./summary-booking.component.html */ 48520);
/* harmony import */ var _summary_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary-booking.component.scss */ 72365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SummaryBookingComponent = class SummaryBookingComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
SummaryBookingComponent.ctorParameters = () => [];
SummaryBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-summary-booking',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_summary_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_summary_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SummaryBookingComponent);



/***/ }),

/***/ 85037:
/*!*********************************************************************!*\
  !*** ./src/app/components/booking/thank-you/thank-you.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thank_you_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./thank-you.component.html */ 81421);
/* harmony import */ var _thank_you_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you.component.scss */ 48185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var src_app_models_booking_issuance_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/booking/issuance.model */ 21205);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commons.service */ 93765);
/* harmony import */ var src_app_store_actions_booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/booking */ 58015);
/* harmony import */ var src_app_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/selectors */ 13654);
/* harmony import */ var src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/selectors/summary.selectors */ 46285);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/actions/summary */ 86257);














let ThankYouComponent = class ThankYouComponent {
    constructor(route, router, store, _common) {
        this.route = route;
        this.router = router;
        this.store = store;
        this._common = _common;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.routes$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.paySuccess = false;
        this.email = '';
        this.poliza = '';
        this.folio = '';
        this.auhtorizeNo = '';
    }
    ngOnInit() {
        this._common.changeAnimation(true);
        this.store.select(src_app_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_6__.summary).subscribe((dataSummary) => {
            dataSummary.step = 'thank-you';
            dataSummary.showSummary = false;
            this.dataSummary = dataSummary;
        });
        this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_7__.set_data_summary({ dataSummary: this.dataSummary }));
        this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_5__.issuanceStateSelect).subscribe((data) => {
            this.issuanceState = data;
            if (data.loaded) {
                this._common.changeAnimation(false);
                if (data.issuanceResult.success) {
                    this.paySuccess = true;
                }
            }
        });
    }
    ngAfterViewInit() {
        this.routes$ = this.route.queryParams
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroyed$))
            .subscribe((params) => {
            if (params['RTNC']) {
                this.params = this.getDecodeParams();
                this.paySuccess = this.params.get('CargoAutorizado') === '1' ? true : false;
                this.folio = this.params.get('ReferenciaId');
                this.auhtorizeNo = this.params.get('NoAutorizacion');
                this.validatePayment();
            }
            else {
                this.params = params;
                this.paySuccess = this.params['CargoAutorizado'] === '1' ? true : false;
                this.folio = this.params['ReferenciaId'];
                this.auhtorizeNo = this.params['NoAutorizacion'];
                this.validatePayment();
            }
        });
    }
    validatePayment() {
        var _a;
        if (this.paySuccess) {
            let data = new src_app_models_booking_issuance_model__WEBPACK_IMPORTED_MODULE_2__.IssuanceModel();
            data.versionId = this.folio;
            data.authorizationNo = this.auhtorizeNo;
            if (!((_a = this.issuanceState) === null || _a === void 0 ? void 0 : _a.loaded))
                this.store.dispatch((0,src_app_store_actions_booking__WEBPACK_IMPORTED_MODULE_4__.load_issuance)({ issuance: data }));
        }
        else {
            this._common.changeAnimation(false);
        }
    }
    getDecodeParams() {
        var _a;
        const snap = new URLSearchParams(window.location.search);
        return new URLSearchParams(atob((_a = snap.get('RTNC')) !== null && _a !== void 0 ? _a : ''));
    }
};
ThankYouComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store },
    { type: src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__.CommonsService }
];
ThankYouComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-thank-you',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thank_you_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thank_you_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThankYouComponent);



/***/ }),

/***/ 31701:
/*!**************************************************************!*\
  !*** ./src/app/components/shared/banner/banner.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_banner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./banner.component.html */ 36469);
/* harmony import */ var _banner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.component.scss */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BannerComponent = class BannerComponent {
    constructor() {
        this.title = 'owl-carousel';
        this.slides = [
            { IMAGESLIDE: "assets/images/auto.svg", URLHREF: '', TITLE: 'Auto Protegido CBNX', SUBTITLE: 'Protege tu vehículo particular contra robo, accidentes o lesiones.' },
            { IMAGESLIDE: "assets/images/compras.svg", URLHREF: '', TITLE: 'Compras Protegidas CBNX', SUBTITLE: 'Realiza operaciones de forma rápida, fácil y segura desde tu computadora o móvil.' },
            { IMAGESLIDE: "assets/images/premier.svg", URLHREF: '', TITLE: 'Citibanamex Premier', SUBTITLE: 'Vuela al destino que tanto deseas y disfruta de privilegios alrededor del mundo.' },
        ];
        this.carouselOptions = {
            dots: true,
            items: 3,
            loop: false,
            margin: 10,
            stagePadding: 20,
            autoWidth: true,
            responsiveClass: true,
            nav: false,
            startPosition: 1,
            navText: [
                '<div class=\'nav-btn prev-slide\'></div>',
                '<div class=\'nav-btn next-slide\'></div>',
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: true,
                },
                1000: {
                    items: 3,
                    nav: false,
                },
                1900: {
                    items: 4,
                    nav: false,
                    loop: false
                },
            },
        };
    }
    ngOnInit() {
        //
        //console.log(this.slides);
    }
    addSlide() {
        // this.slides.push('http://placehold.it/350x150/777777');
    }
    removeSlide() {
        // this.slides.length = this.slides.length - 1;
    }
    slickInit(e) {
        // console.log('slick initialized');
    }
    breakpoint(e) {
        // console.log('breakpoint');
    }
    afterChange(e) {
        // console.log('afterChange');
    }
    beforeChange(e) {
        // console.log('beforeChange');
    }
};
BannerComponent.ctorParameters = () => [];
BannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-banner',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_banner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_banner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BannerComponent);



/***/ }),

/***/ 32103:
/*!***********************************************************!*\
  !*** ./src/app/components/shared/banner/banner.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerModule": () => (/* binding */ BannerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.component */ 31701);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ 99217);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ 63189);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);







let BannerModule = class BannerModule {
};
BannerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__.SlickCarouselModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlModule],
        declarations: [_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent],
        exports: [_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlModule],
    })
], BannerModule);



/***/ }),

/***/ 18807:
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/modal-error-v2/modal-error-v2.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalErrorV2Component": () => (/* binding */ ModalErrorV2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_error_v2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-error-v2.component.html */ 16355);
/* harmony import */ var _modal_error_v2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-error-v2.component.scss */ 77334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_models_content_shared_dialog_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/content/shared/dialog-error.model */ 75066);






let ModalErrorV2Component = class ModalErrorV2Component {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        const ele = document.getElementsByClassName('cdk-overlay-pane');
        if (ele.length > 0) {
            ele[0].classList.add('warning-dialog-pane');
        }
    }
    finish(action) {
        this.dialogRef.close(action);
    }
    ngOnDestroy() {
    }
};
ModalErrorV2Component.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef },
    { type: src_app_models_content_shared_dialog_error_model__WEBPACK_IMPORTED_MODULE_2__.DialogErrorModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA,] }] }
];
ModalErrorV2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-error-v2',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_error_v2_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        styles: [_modal_error_v2_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalErrorV2Component);



/***/ }),

/***/ 11641:
/*!******************************************************!*\
  !*** ./src/app/models/booking/data-insured.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataInsuredModel": () => (/* binding */ DataInsuredModel)
/* harmony export */ });
class DataInsuredModel {
    constructor(obj) {
        this.firstName = obj && obj.firstName || '';
        this.secondName = obj && obj.secondName || '';
        this.firstLastName = obj && obj.firstLastName || '';
        this.secondLastName = obj && obj.secondLastName || '';
        this.gender = obj && obj.gender || 0;
        this.rfc = obj && obj.rfc || '';
        this.dob = obj && obj.dob || '';
    }
}


/***/ }),

/***/ 93765:
/*!*********************************************!*\
  !*** ./src/app/services/commons.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonsService": () => (/* binding */ CommonsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.service */ 62169);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);





let CommonsService = class CommonsService {
    constructor(_booking) {
        this._booking = _booking;
        this.adultsCaptured = [];
        this.childrenCaptured = [];
        this.loadAnimation = false;
    }
    /**
     * Return string plain format Date, if isoFormat is true the string will ISOFormat
     *
     * @param day
     * @param month
     * @param year
     * @param isoFormat
     */
    setDob(day, month, year, isoFormat = false) {
        const dateIso = moment__WEBPACK_IMPORTED_MODULE_0__(`${year}-${month}-${day}`, "YYYY-MM-DD");
        return isoFormat ? dateIso.toISOString() : dateIso.format('DD/MM/YYYY');
    }
    setRfc(rfcData, model) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let resRfc = '';
            yield this._booking.getRfc(rfcData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => resRfc = (model) ? res : `${res.rfc}${res.homoKey}`)).toPromise();
            return resRfc;
        });
    }
    getAge(dob) {
        return moment__WEBPACK_IMPORTED_MODULE_0__().diff(dob, 'years');
    }
    validateYears(age, years) {
        let match = years.filter(x => x == age);
        return match.length > 0 ? true : false;
    }
    validateDuplicated(age, ages, adult = true) {
        if (adult) {
            let captured = this.adultsCaptured.filter(x => x == age);
            let ag = ages.filter(x => x == age);
            if (captured.length < ag.length) {
                this.adultsCaptured.push(age);
                return true;
            }
        }
        else if (!adult) {
            let captured = this.childrenCaptured.filter(x => x == age);
            let ag = ages.filter(x => x == age);
            if (captured.length < ag.length) {
                this.childrenCaptured.push(age);
                return true;
            }
        }
        return false;
    }
    removeAge(age, adult = true) {
        if (adult) {
            for (let i = 0; i < this.adultsCaptured.length; i++) {
                if (this.adultsCaptured[i] == age) {
                    this.adultsCaptured.splice(i, 1);
                    break;
                }
            }
        }
        else if (!adult) {
            for (let i = 0; i < this.childrenCaptured.length; i++) {
                if (this.childrenCaptured[i] == age) {
                    this.childrenCaptured.splice(i, 1);
                    break;
                }
            }
        }
    }
    clearCaptured() {
        this.adultsCaptured = [];
        this.childrenCaptured = [];
    }
    changeAnimation(loading) {
        this.loadAnimation = loading;
    }
};
CommonsService.ctorParameters = () => [
    { type: _booking_service__WEBPACK_IMPORTED_MODULE_1__.BookingService }
];
CommonsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CommonsService);



/***/ }),

/***/ 92379:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/booking.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-loading-animation *ngIf=\"_common.loadAnimation; else loaded\"></app-loading-animation>\n\n<ng-template #loaded>\n  <ng-container class=\"booking\">\n    <div class=\"row-max column\">\n      <section *ngIf=\"showComponents\" class=\"booking__progress-bar\">\n        <app-progress-bar></app-progress-bar>\n      </section>\n\n      <section class=\"booking__content\" [style.display]=\"showSummary() ? 'flex': 'inline-block'\">\n        <section [style.flex]=\"showSummary() ? '2 0': ''\">\n          <form novalidate [formGroup]=\"contractorForm\" (ngSubmit)=\"onSubmit()\">\n            <router-outlet (activate)=\"componentAdded($event)\"></router-outlet>\n          </form>\n        </section>\n\n        <ng-container *ngIf=\"showSummary()\">\n          <div class=\"summary-section\">\n            <app-summary [style.flex]=\"showSummary() ? '1 0': ''\" ></app-summary>\n          </div>\n        </ng-container>\n      </section>\n    </div>\n\n\n    <section *ngIf=\"showComponents\" class=\"booking-footer-doubts\">\n      <app-footer-dubs></app-footer-dubs>\n    </section>\n  </ng-container>\n</ng-template>\n");

/***/ }),

/***/ 78480:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step1-a-customer-data/customer-data.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"custommer-data\">\n  <section class=\"custommer-data__data-section\">\n    <div class=\"custommer-data__data-section__content\">\n      <div class=\"custommer-data__data-section__content__item\">\n        <div class=\"custommer-data__data-section__content__item__header\">\n          <img class=\"pl-3\" src=\"assets/images/profile-icon.svg\" /> <span class=\"custommer-data__data-section__content__item--title\">DATOS DEL CONTRATANTE</span>\n        </div>\n        <div class=\"custommer-data__data-section__content__item--description mb-4\">\n          <form [formGroup]=\"dataContractor\">\n            <div class=\"custommer-data__data-section__content__item--description__column mt-2\">\n              <mat-form-field class=\"\">\n                <mat-label>Primer nombre</mat-label>\n                <input type=\"text\" matInput maxlength='50' data-cy=\"firstName\" formControlName=\"firstName\">\n                <mat-error *ngIf=\"dataContractor.get('firstName')?.hasError('maxlength') && dataContractor.get('firstName')?.touched\">\n                  Por favor ingresar menos de 50 caracteres\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('firstName')?.hasError('required') && dataContractor.get('firstName')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('firstName')?.hasError('letters') && dataContractor.get('firstName')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-2\">\n              <mat-form-field class=\"\">\n                <mat-label>Segundo nombre</mat-label>\n                <input type=\"text\" matInput maxlength='50' data-cy=\"secondtName\" formControlName=\"secondName\">\n                <mat-hint class=\"custom-hint\">Opcional</mat-hint>\n                <mat-error *ngIf=\"dataContractor.get('secondName')?.hasError('letters') && dataContractor.get('secondName')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field class=\"\">\n                <mat-label>Primer apellido</mat-label>\n                <input type=\"text\" matInput maxlength='50' data-cy=\"firstLastName\" formControlName=\"firstLastName\">\n                <mat-error *ngIf=\"dataContractor.get('firstLastName')?.hasError('maxlength') && dataContractor.get('firstLastName')?.touched\">\n                  Por favor ingresar menos de 50 caracteres\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('firstLastName')?.hasError('required') && dataContractor.get('firstLastName')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('firstLastName')?.hasError('letters') && dataContractor.get('firstLastName')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field class=\"\">\n                <mat-label>Segundo apellido</mat-label>\n                <input type=\"text\" matInput maxlength='50' data-cy=\"secondLastName\" formControlName=\"secondLastName\">\n                <mat-error *ngIf=\"dataContractor.get('secondLastName')?.hasError('maxlength') && dataContractor.get('secondLastName')?.touched\">\n                  Por favor ingresar menos de 50 caracteres\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('secondLastName')?.hasError('required') && dataContractor.get('secondLastName')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('secondLastName')?.hasError('letters') && dataContractor.get('secondLastName')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <label class=\"subtitle mb-3\">Género</label>\n              <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n                <mat-radio-button [value]=\"1\"><img class=\"opt-not-selected\" src=\"assets/images/man-icon.svg\" /><img class=\"opt-selected\" src=\"assets/images/man-selected-icon.svg\" /><div class=\"radio-text\">Masculino</div></mat-radio-button>\n                <mat-radio-button [value]=\"2\"><img class=\"opt-not-selected\" src=\"assets/images/woman-icon.svg\" /><img class=\"opt-selected\" src=\"assets/images/woman-selected-icon.svg\" /><div class=\"radio-text\">Femenino</div></mat-radio-button>\n              </mat-radio-group>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <label class=\"subtitle mb-3\">Fecha de nacimiento</label>\n              <div class=\"dates-content\">\n                <mat-form-field class=\"dates\">\n                  <mat-label>DD</mat-label>\n                  <input matInput id=\"birthDateDay\" min=\"1\" maxLength=\"2\" type=\"number\" formControlName=\"birthDateDay\"\n                  oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                  (keyup)=\"keytab($event, 2)\" data-cy=\"birthDateDay\" />\n                </mat-form-field>\n                <mat-form-field class=\"dates\">\n                  <mat-label>MM</mat-label>\n                  <input matInput id=\"birthDateMonth\" min=\"1\" #birthDateMonth maxLength=\"2\" type=\"number\" formControlName=\"birthDateMonth\"\n                  oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                  (keyup)=\"keytab($event, 2)\" data-cy=\"birthDateMonth\" />\n                </mat-form-field>\n                <mat-form-field class=\"dates\">\n                  <mat-label>YYYY</mat-label>\n                  <input matInput #birthDateYear min=\"1900\" maxLength=\"4\" type=\"number\" formControlName=\"birthDateYear\"\n                  oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" data-cy=\"birthDateYear\" />\n                </mat-form-field>\n              </div>\n              <div>\n                <mat-error class=\"custom-error-hint\" *ngIf=\"dataContractor.hasError('minimumAge')\">\n                  Debes ser mayor de edad para contratar el Seguro\n                </mat-error>\n                <mat-error class=\"custom-error-hint\"\n                *ngIf=\"dataContractor?.hasError('birthDate') ||\n                      dataContractor.get('birthDateDay')?.hasError('min') ||\n                      dataContractor.get('birthDateDay')?.hasError('max') ||\n                      dataContractor.get('birthDateMonth')?.hasError('min') ||\n                      dataContractor.get('birthDateMonth')?.hasError('max') ||\n                      dataContractor.get('birthDateYear')?.hasError('min') ||\n                      dataContractor.get('birthDateYear')?.hasError('max')\">\n                  Ingresa una fecha válida\n                </mat-error>\n                <mat-error class=\"custom-error-hint\"\n                *ngIf=\"!dataContractor?.hasError('birthDate') &&\n                      (dataContractor.get('birthDateDay')?.hasError('required') &&\n                      dataContractor.get('birthDateDay')?.touched) ||\n                      (dataContractor.get('birthDateMonth')?.hasError('required') &&\n                      dataContractor.get('birthDateMonth')?.touched) ||\n                      (dataContractor.get('birthDateYear')?.hasError('required') &&\n                      dataContractor.get('birthDateYear')?.touched)\">\n                  Este campo es requerido\n                </mat-error>\n              </div>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field>\n                <mat-label>RFC</mat-label>\n                <input type=\"text\" class=\"uppercase\" matInput maxlength='50' formControlName='rfc'>\n                <mat-hint class=\"custom-hint\">Si no es correcto, ajústalo</mat-hint>\n                <!--<mat-error *ngIf=\"dataContractor.get('rfc')?.hasError('maxlength') && dataContractor.get('rfc')?.touched\">\n                  Por favor ingresar menos de 50 caracteres\n                </mat-error>-->\n                <mat-error *ngIf=\"dataContractor.get('rfc')?.hasError('required') && dataContractor.get('rfc')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('rfc')?.hasError('alphanumericSpace') && dataContractor.get('rfc')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field>\n                <mat-label>Homoclave</mat-label>\n                <input type=\"text\" class=\"uppercase\" matInput [textMask]=\"{ mask: homoKeyMask }\" formControlName='homoKey'>\n                <mat-hint class=\"custom-hint\">Si no es correcto, ajústalo</mat-hint>\n                <mat-error *ngIf=\"dataContractor.get('homoKey')?.hasError('maxlength') && dataContractor.get('homoKey')?.touched\">\n                  Verifica que este dato sea correcto\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('homoKey')?.hasError('required') && dataContractor.get('homoKey')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field>\n                <mat-label>Teléfono celular</mat-label>\n                <input type=\"tel\" matInput #phoneInput [textMask]=\"{mask: phoneMask}\" data-cy=\"phone\" formControlName='phone'>\n                <mat-error *ngIf=\"dataContractor.get('phone')?.hasError('required') && dataContractor.get('phone')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-hint align=\"start\" class=\"phone-hint\">{{getPhoneHint(phoneInput.value)}}</mat-hint>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__data-section__content__item--description__column mt-3\">\n              <mat-form-field>\n                <mat-label>Correo Electrónico</mat-label>\n                <input type=\"email\" matInput maxlength=\"50\" [matAutocomplete]=\"auto\" data-cy=\"email\" formControlName='email'\n                  (ngModelChange)=\"autocompleteEmail($event)\" />\n                <mat-autocomplete #auto=\"matAutocomplete\" >\n                  <mat-option *ngFor=\"let item of emailList\" [value]=\"item\" appAutocompleteEmail [emailValue]=\"item\">\n                    {{ item }}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-error *ngIf=\"dataContractor.get('email')?.hasError('maxlength') && dataContractor.get('email')?.touched\">\n                  Ingresa un correo válido de hasta 50 caracteres\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('email')?.hasError('required')\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"dataContractor.get('email')?.hasError('email') && dataContractor.get('email')?.touched\">\n                  Por favor ingresa un correo electrónico válido\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"custommer-data__address-section\">\n    <div class=\"custommer-data__address-section__content\">\n      <div class=\"custommer-data__address-section__content__item\">\n        <div class=\"custommer-data__address-section__content__item__header\">\n          <img class=\"pl-3\" src=\"assets/images/location-icon.svg\" /> <span class=\"custommer-data__address-section__content__item--title\">DIRECCIÓN</span>\n        </div>\n        <div class=\"custommer-data__address-section__content__item--description\">\n          <form [formGroup]=\"addressContractor\">\n            <div class=\"custommer-data__address-section__content__item--description__column-100 mt-2\">\n              <mat-form-field class=\"\">\n                <mat-label>Calle</mat-label>\n                <input type=\"text\" maxlength=\"50\" matInput data-cy=\"streetName\" formControlName=\"street\">\n                <mat-error *ngIf=\"addressContractor.get('street')?.hasError('maxlength') && addressContractor.get('street')?.touched\">\n                  Por favor ingresar menos de 50 caracteres\n                </mat-error>\n                <mat-error *ngIf=\"addressContractor.get('street')?.hasError('required') && addressContractor.get('street')?.touched\">\n                  Este campo es requerido\n                </mat-error>\n                <mat-error *ngIf=\"addressContractor.get('street')?.hasError('alphanumeric') && addressContractor.get('street')?.touched\">\n                  Usa letras y/o carácteres válidos\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <div class=\"nums-content\">\n                <mat-form-field class='nums'>\n                  <mat-label>Núm. exterior</mat-label>\n                  <input type=\"text\" matInput maxlength='50' data-cy=\"num\" formControlName=\"exteriorNumber\">\n                  <mat-error *ngIf=\"addressContractor.get('exteriorNumber')?.hasError('maxlength') && addressContractor.get('exteriorNumber')?.touched\">\n                      Por favor ingresar menos de 50 caracteres\n                  </mat-error>\n                  <mat-error *ngIf=\"addressContractor.get('exteriorNumber')?.hasError('required') && addressContractor.get('exteriorNumber')?.touched\">\n                      Este campo es requerido\n                  </mat-error>\n                  <mat-error *ngIf=\"addressContractor.get('exteriorNumber')?.hasError('alphanumeric') && addressContractor.get('exteriorNumber')?.touched\">\n                      Usa letras y/o carácteres válidos\n                  </mat-error>\n                </mat-form-field>\n\n                <mat-form-field class='nums'>\n                  <mat-label>Núm. Interior</mat-label>\n                  <input type=\"text\" matInput maxlength='50' formControlName=\"internalNumber\">\n                  <mat-hint class=\"custom-hint\">Opcional</mat-hint>\n                  <mat-error *ngIf=\"addressContractor.get('internalNumber')?.hasError('maxlength') && addressContractor.get('internalNumber')?.touched\">\n                      Por favor ingresar menos de 50 caracteres\n                  </mat-error>\n                  <mat-error *ngIf=\"addressContractor.get('internalNumber')?.hasError('alphanumeric') && addressContractor.get('internalNumber')?.touched\">\n                      Usa letras y/o carácteres válidos\n                  </mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <div class=\"zip-content\">\n                <mat-form-field class=\"zip\">\n                  <mat-label>Código postal</mat-label>\n                  <input matInput type=\"text\" [textMask]=\"{ mask: zipCodeMask }\" aria-label=\"Number\" formControlName=\"zipCode\" />\n                  <mat-error *ngIf=\"(addressContractor.get('zipCode')?.hasError('zipCode') || addressContractor.get('zipCode')?.hasError('invalidZipCode') ) && addressContractor.get('zipCode')?.touched\">\n                    Ingresa un código postal válido\n                  </mat-error>\n                  <mat-error *ngIf=\"addressContractor.get('zipCode')?.hasError('required') && addressContractor.get('zipCode')?.touched\">\n                    Este campo es requerido\n                  </mat-error>\n                  <mat-hint *ngIf=\"addressContractor.get('zipCode')?.status === 'PENDING'\">Validando...</mat-hint>\n                </mat-form-field>\n                <a class=\"zp-link\" href=\"JavaScript:void(0)\" (click)=\"openZipCodeDialog()\">¿No conoces tu c&oacute;digo postal?</a>\n              </div>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <mat-form-field>\n                <mat-label>Estado</mat-label>\n                <input type=\"text\" matInput formControlName=\"state\" />\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <mat-form-field>\n                <mat-label>Ciudad</mat-label>\n                <input type=\"text\" matInput formControlName=\"city\" />\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <mat-form-field>\n                <mat-label>Municipio o delegaci&oacute;n</mat-label>\n                <input type=\"text\" matInput formControlName=\"municipality\" />\n              </mat-form-field>\n            </div>\n            <div class=\"custommer-data__address-section__content__item--description__column\">\n              <mat-form-field id=\"colony\">\n                <mat-label>Colonia</mat-label>\n                <mat-select data-autom=\"paymentFrequency\" formControlName=\"colony\">\n                  <mat-option *ngFor=\"let colony of colonies\" [value]=\"colony.colonyName\">\n                      {{colony.colonyName}}\n                  </mat-option>\n                </mat-select>\n                <mat-icon matSuffix><img class=\"dropdown-icon\" src=\"assets/images/chevron-down.svg\" /></mat-icon>\n                <mat-error *ngIf=\"addressContractor.get('colony')?.hasError('required')\">\n                    Este campo es requerido\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <form [formGroup]=\"contractorTerms\" class=\"terms-container\">\n    <div class=\"custommer-data__contractor\">\n      <label class=\"subtitle mb-2\">¿Viaja el contratante?</label>\n      <mat-radio-group aria-label=\"Select an option\" formControlName=\"contractorTraveling\">\n        <mat-radio-button class=\"mt-4\" value=\"true\">Sí</mat-radio-button>\n        <mat-radio-button class=\"mt-4\" value=\"false\">No</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div class=\"custommer-data__terms mt-5\">\n      <mat-checkbox class=\"custommer-data__terms__checkbox\" formControlName=\"terms\">\n        <div class=\"custommer-data__terms__checkbox--text\">\n          <p>\n            Acepto el <a class=\"link link__citi--blue\"  target=\"_blank\" >Aviso de Privacidad</a> y los\n            <a class=\"link link__citi--blue\" target=\"_blank\" >T&eacute;rminos,<br/>Exclusiones y Condiciones Generales</a>.\n          </p>\n        </div>\n      </mat-checkbox>\n\n      <div>\n        <p class=\"personal-data mt-3 pl-4\">Tus datos personales son recabados y protegidos<br class=\"break\" /> por CHUBB, consulta su aviso de privacidad.</p>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"navigation row wrap custommer-data__navigation pt-5\">\n    <!-- Bottom page buttons -->\n    <div class=\"btn-container pt-3\">\n      <!-- Return to Cotizar Online page -->\n      <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n        Regresar\n      </a>\n    </div>\n\n    <!-- Continue To Brands -->\n    <div class=\"btn-container\">\n      <button id=\"continue2\" type=\"button\" (click)=\"goToNext()\" [disabled]=\"!contractorTerms.valid || !addressContractor.valid || !dataContractor.valid\" class=\"btn btn-text btn--primary\">\n        Continuar\n      </button>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 17531:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step1-b-insured-data/insured-data.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"insured-data\">\n<!--  <ng-container *ngIf=\"adults?.length\">-->\n<!--    <app-insured-form formType=\"ADULTO\" [index]=\"i + 1\" *ngFor=\"let form of adults; let i = index\"-->\n<!--                      class=\"custommer-data__data-section\">-->\n<!--    </app-insured-form>-->\n<!--  </ng-container>-->\n\n  <div class=\"insured-data__form\">\n    <ng-container *ngIf=\"adults?.length\" >\n      <app-insured-form [control]=\"dataInsuredFormData\" formType=\"ADULTO\" formArrName=\"adults\" [agesArr]=\"adults\" [parentForm]=\"dataContractorFormData\" [isTraveling]=\"contractorTraveling\" [showForms]=\"showFormsAdult\" class=\"insured-data__form__container\" (setShowForms)=\"setShowForms($event)\" (validateForms)=\"validateForms($event)\">\n      </app-insured-form>\n    </ng-container>\n  </div>\n\n  <div class=\"insured-data__form\" >\n    <ng-container *ngIf=\"children?.length\"  >\n      <app-insured-form [control]=\"dataInsuredFormData\" formType=\"MENOR\" [index]=\"sumAdults\" formArrName=\"children\" [agesArr]=\"children\" [showForms]=\"showFormsChildren\" class=\"insured-data__form__container\" (setShowForms)=\"setShowForms($event)\" (validateForms)=\"validateForms($event)\">\n      </app-insured-form>\n    </ng-container>\n  </div>\n\n  <div class=\"navigation row wrap insured-data__navigation pt-5\">\n    <!-- Bottom page buttons -->\n    <div class=\"btn-container pt-3\">\n      <!-- Return to Cotizar Online page -->\n      <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n        Regresar\n      </a>\n    </div>\n\n    <!-- Continue To Brands -->\n    <div class=\"btn-container\">\n      <button id=\"continue2\" type=\"button\" [disabled]=\"!validForm\" (click)=\"goToNext()\" class=\"btn btn-text btn--primary\" >\n        Continuar\n      </button>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 23523:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step1-b-insured-data/insured-form/insured-form.component.html ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"insured-data-component\" [formGroup]=\"control\">\n  <div [formArrayName]=\"formArrName\" class=\"insured-data-component__content\" *ngFor=\"let insured of childFormData.controls; let i = index\">\n    <div class=\"insured-data-component__content__item\">\n      <div class=\"insured-data-component__content__item__header\">\n        <div class=\"insured-data-component__content__item__header--title\">\n          <img src=\"assets/images/profile-icon.svg\"/>\n          <span class=\"insured-data-component__content__item--title\">ASEGURADO {{ (i + 1) + index}} ( {{formType}} )</span>\n        </div>\n\n        <div class=\"insured-data-component__content__item__header--action\">\n          <a *ngIf=\"!hideForm[i]\" [routerLink]=\"\" class=\"edit\" (click)=\"toggleForm( i, insured)\">\n            <img alt=\"edit\" src=\"assets/images/edit-icon.svg\"/> Editar\n          </a>\n        </div>\n      </div>\n\n      <ng-container [formGroupName]=\"i\" *ngIf=\"showForm[i]\">\n        <div class=\"insured-data-component__summary citi-accordion__content\" *ngIf=\"!hideForm[i]\">\n          <div class=\"insured-data-component__summary__title\">\n            <span class=\"insured-data-component__summary__title--name\">\n              {{ insured.get('firstName')?.value }} {{ insured.get('secondName')?.value }} {{ insured.get('firstLastName')?.value }} {{ insured.get('secondLastName')?.value }}\n            </span>\n            <span class=\"insured-data-component__summary__title--birthday\">\n              {{ insured.get('birthDateDay')?.value }}/{{ insured.get('birthDateMonth')?.value }}/{{ insured.get('birthDateYear')?.value }}\n            </span>\n          </div>\n          <div class=\"insured-data-component__summary__img\">\n            <img alt=\"edit\" src=\"assets/images/validate-green.svg\"/>\n          </div>\n        </div>\n\n        <div class=\"insured-data-component__form\" *ngIf=\"hideForm[i]\">\n          <!-- firstName Field -->\n          <div class=\"insured-data-component__form__column pt-3\">\n            <mat-form-field class=\"\">\n              <mat-label>Primer nombre</mat-label>\n              <input type=\"text\" matInput maxlength='50' data-cy=\"firstName\" formControlName=\"firstName\" />\n              <mat-error *ngIf=\"insured.get('firstName')?.hasError('maxlength') && insured.get('firstName')?.touched\">\n                Por favor ingresar menos de 50 caracteres\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('firstName')?.hasError('required') && insured.get('firstName')?.touched\">\n                Este campo es requerido\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('firstName')?.hasError('letters') && insured.get('firstName')?.touched\">\n                Usa letras y/o carácteres válidos\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!-- ./firstName_field -->\n\n          <!-- secondName Field -->\n          <div class=\"insured-data-component__form__column pt-3\">\n            <mat-form-field class=\"\">\n              <mat-label>Segundo nombre</mat-label>\n              <input type=\"text\" matInput maxlength='50' data-cy=\"secondName\" formControlName=\"secondName\" />\n              <mat-hint class=\"custom-hint\">Opcional</mat-hint>\n              <mat-error *ngIf=\"insured.get('secondName')?.hasError('letters') && insured.get('secondName')?.touched\">\n                Usa letras y/o carácteres válidos\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!-- ./secondName_field -->\n\n          <!-- firstLastName Field -->\n          <div class=\"insured-data-component__form__column pt-3\">\n            <mat-form-field class=\"\">\n              <mat-label>Primer apellido</mat-label>\n              <input type=\"text\" matInput maxlength='50' data-cy=\"firstLastName\" formControlName=\"firstLastName\" />\n              <mat-error *ngIf=\"insured.get('firstLastName')?.hasError('maxlength') && insured.get('firstLastName')?.touched\">\n                Por favor ingresar menos de 50 caracteres\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('firstLastName')?.hasError('required') && insured.get('firstLastName')?.touched\">\n                Este campo es requerido\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('firstLastName')?.hasError('letters') && insured.get('firstLastName')?.touched\">\n                Usa letras y/o carácteres válidos\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!-- ./firstLastName_field -->\n\n          <!-- secondLastName Field -->\n          <div class=\"insured-data-component__form__column pt-3\">\n            <mat-form-field class=\"\">\n              <mat-label>Segundo apellido</mat-label>\n              <input type=\"text\" matInput maxlength='50' data-cy=\"secondLastName\" formControlName=\"secondLastName\" />\n              <mat-error *ngIf=\"insured.get('secondLastName')?.hasError('maxlength') && insured.get('secondLastName')?.touched\">\n                Por favor ingresar menos de 50 caracteres\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('secondLastName')?.hasError('required') && insured.get('secondLastName')?.touched\">\n                Este campo es requerido\n              </mat-error>\n              <mat-error *ngIf=\"insured.get('secondLastName')?.hasError('letters') && insured.get('secondLastName')?.touched\">\n                Usa letras y/o carácteres válidos\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!-- ./secondLastName_field -->\n\n          <!-- Field -->\n          <div class=\"insured-data-component__form__column mt-3\">\n            <label class=\"subtitle mb-2\">Género</label>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n              <mat-radio-button [value]=\"1\"><img class=\"opt-not-selected\" src=\"assets/images/man-icon.svg\"/>\n                <img class=\"opt-selected\" src=\"assets/images/man-selected-icon.svg\"/>\n                <div class=\"radio-text\">Masculino</div>\n              </mat-radio-button>\n              <mat-radio-button [value]=\"2\"><img class=\"opt-not-selected\" src=\"assets/images/woman-icon.svg\"/>\n                <img class=\"opt-selected\" src=\"assets/images/woman-selected-icon.svg\"/>\n                <div class=\"radio-text\">Femenino</div>\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <!-- ./field -->\n\n          <!-- Field -->\n          <div class=\"insured-data-component__form__column mt-3\">\n            <label class=\"subtitle\">Fecha de nacimiento</label>\n            <div class=\"dates-content\">\n              <mat-form-field class=\"dates\">\n                <mat-label>DD</mat-label>\n                <input matInput numeric type=\"text\" maxlength=\"2\" id=\"birthDateDay\" formControlName=\"birthDateDay\" data-cy=\"birthDateDay\" />\n              </mat-form-field>\n              <mat-form-field class=\"dates\">\n                <mat-label>MM</mat-label>\n                <input matInput numeric type=\"text\" maxlength=\"2\" id=\"birthDateMonth\" #birthDateMonth\n                       formControlName=\"birthDateMonth\"\n                       data-cy=\"birthDateMonth\" />\n              </mat-form-field>\n              <mat-form-field class=\"dates\">\n                <mat-label>YYYY</mat-label>\n                <input matInput numeric type=\"text\" maxlength=\"4\" #birthDateYear\n                       formControlName=\"birthDateYear\"\n                       data-cy=\"birthDateYear\" />\n              </mat-form-field>\n\n              <mat-error *ngIf=\"showAgeError[i]\">\n                No coincide con edad de cotización\n              </mat-error>\n              <mat-error class=\"custom-error-hint\" *ngIf=\"insured.hasError('maxAge')\">\n                La edad máxima para asegurar es de 79 años\n              </mat-error>\n              <mat-error class=\"custom-error-hint\"\n                *ngIf=\"insured.hasError('birthDate') ||\n                insured.get('birthDateDay')?.hasError('min') ||\n                insured.get('birthDateDay')?.hasError('max') ||\n                insured.get('birthDateMonth')?.hasError('min') ||\n                insured.get('birthDateMonth')?.hasError('max') ||\n                insured.get('birthDateYear')?.hasError('min') ||\n                insured.get('birthDateYear')?.hasError('max')\">\n                Ingresa una fecha válida\n              </mat-error>\n              <mat-error class=\"custom-error-hint\"\n                *ngIf=\"!insured.hasError('birthDate') &&\n                    (insured.get('birthDateDay')?.hasError('required') &&\n                    insured.get('birthDateDay')?.touched) ||\n                    (insured.get('birthDateMonth')?.hasError('required') &&\n                    insured.get('birthDateMonth')?.touched) ||\n                    (insured.get('birthDateYear')?.hasError('required') &&\n                    insured.get('birthDateYear')?.touched)\">\n                Este campo es requerido\n              </mat-error>\n            </div>\n          </div>\n          <!-- ./field -->\n\n          <!-- Button -->\n          <div class=\"insured-data-component__form__submit pb-3\">\n            <button type=\"button\" [disabled]=\"insured.invalid\" (click)=\"toggleForm(i, insured)\"class=\"btn btn-text btn--secondary insured-data-component__form__submit--small\">\n              Guardar\n            </button>\n          </div>\n          <!-- ./button -->\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 36678:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step2-confirmation-data/confirmation-data.component.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"custommer-confirmation\">\n  <section class=\"custommer-confirmation__contractor-section\" *ngIf=\"showTraveling\">\n    <div class=\"custommer-confirmation__contractor-section__content\">\n      <div class=\"custommer-confirmation__contractor-section__content__item\">\n        <div class=\"custommer-confirmation__contractor-section__content__item__header\">\n          <img class=\"pl-3\" src=\"assets/images/profile-icon.svg\" /> <span class=\"custommer-confirmation__contractor-section__content__item--title\">CONTRATANTE</span>\n        </div>\n        <div class=\"custommer-confirmation__contractor-section__content__item--description\">\n          <div class=\"custommer-confirmation__contractor-section__content__item--description__column\">\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column-gc\">\n              <span class=\"text\">{{dataContractor?.controls?.firstName?.value}}<span *ngIf=\"dataContractor?.controls?.secondName?.value\">&nbsp;{{dataContractor?.controls?.secondName?.value}}</span>&nbsp;{{dataContractor?.controls?.firstLastName?.value}}&nbsp;{{dataContractor?.controls?.secondLastName?.value}}</span>\n            </div>\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column-lc\">\n              <a (click)=\"goTo('datos-asegurados', 0, true, true)\"><img alt=\"edit\" src=\"assets/images/edit-icon.svg\" /> Editar</a>\n            </div>\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column-oc\">\n              <span class=\"text\">{{dob}}</span>\n            </div>\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column-oc pt-2\">\n              <span class=\"text\">\n                {{addressContractor?.controls?.street?.value}}&nbsp;\n                {{addressContractor?.controls?.exteriorNumber?.value}},&nbsp;\n                <span *ngIf=\"addressContractor?.controls?.internalNumber?.value\">Int {{addressContractor?.controls?.internalNumber?.value}},&nbsp;</span>\n                {{addressContractor?.controls?.colony?.value}},&nbsp;\n                {{addressContractor?.controls?.municipality?.value}},&nbsp;\n                {{addressContractor?.controls?.state?.value}},&nbsp;\n                {{addressContractor?.controls?.zipCode?.value}}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"custommer-confirmation__insured-section\" *ngIf=\"adults.length > 0 || childs.length > 0\">\n    <div class=\"custommer-confirmation__insured-section__content\">\n      <div class=\"custommer-confirmation__insured-section__content__item\">\n        <div class=\"custommer-confirmation__insured-section__content__item__header\">\n          <img class=\"pl-3\" src=\"assets/images/profiles-icon.svg\" /> <span class=\"custommer-confirmation__insured-section__content__item--title\">ASEGURADOS</span>\n        </div>\n        <div class=\"custommer-confirmation__insured-section__content__item--description\">\n          <div class=\"custommer-confirmation__contractor-section__content__item--description__column\">\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column__content\" *ngFor=\"let adult of adults; let i = index\"> <!--*ngFor=\"let adult of dataIssured.controls.adults\"-->\n              <div class=\"custommer-confirmation__contractor-section__content__item--description__column-gc\">\n                <span class=\"text\">{{adult | nameInput}}</span>\n                <span class=\"text\">{{adult | dateInput}}</span>\n              </div>\n              <div class=\"custommer-confirmation__contractor-section__content__item--description__column-lc\">\n                <a (click)=\"goTo('datos-asegurados', i, true)\"><img class=\"contractor-img\" alt=\"edit\" src=\"assets/images/edit-icon.svg\" /> Editar</a>\n              </div>\n            </div>\n            <div class=\"custommer-confirmation__contractor-section__content__item--description__column__content\" *ngFor=\"let child of childs; let i = index\">\n              <div class=\"custommer-confirmation__contractor-section__content__item--description__column-gc\">\n                <span class=\"text\">{{child | nameInput}}</span>\n                <span class=\"text\">{{child | dateInput}}</span>\n              </div>\n              <div class=\"custommer-confirmation__contractor-section__content__item--description__column-lc\">\n                <a (click)=\"goTo('datos-asegurados', i, false)\"><img class=\"contractor-img\" alt=\"edit\" src=\"assets/images/edit-icon.svg\" /> Editar</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"custommer-confirmation__email\">\n    <div class=\"custommer-confirmation__email__column\">\n      <div class=\"custommer-confirmation__email__column__label\">\n        <span class=\"icon\"><img alt=\"email\" src=\"assets/images/email-icon.svg\" /></span>\n        <span class=\"leyend\">Te enviaremos las pólizas al siguiente correo</span>\n      </div>\n      <div class=\"custommer-confirmation__email__column__input\">\n        <mat-form-field class=\"email pt-4\">\n          <mat-label>Correo Electrónico</mat-label>\n          <input type=\"email\" matInput disabled [value]=\"email\" />\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"navigation row wrap custommer-confirmation__navigation pt-5\">\n    <!-- Bottom page buttons -->\n    <div class=\"btn-container pt-3\">\n      <!-- Return to Cotizar Online page -->\n      <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n        Regresar\n      </a>\n    </div>\n\n    <!-- Continue To Brands -->\n    <div class=\"btn-container\">\n      <button id=\"continue2\" type=\"button\" (click)=\"goToNext()\" class=\"btn btn-text btn--primary\" [disabled]=\"!contractorTerms.valid || !addressContractor.valid || !dataContractor.valid\">\n        Continuar\n      </button>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 22004:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step3-payment-data/components/payment/payment.component.html ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <iframe #iframe class=\"box\" [src]=\"iframeUrl\" frameborder=\"0\" sandbox=\"allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation\"></iframe>\n</div>\n");

/***/ }),

/***/ 52553:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/step3-payment-data/payment-data.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"payment-data\">\n  <section class=\"payment-data__terms-section\" >\n    <div class=\"payment-data__terms-section__content\">\n      <form [formGroup]=\"iFrameData\">\n        <div class=\"payment-data__terms-section__content__item\">\n          <div class=\"payment-data__terms-section__content__item__header\">\n            <img class=\"pl-3\" src=\"assets/images/document-form.svg\" />\n            <span class=\"payment-data__terms-section__content__item--title\">TÉRMINOS Y CONDICIONES DEL SEGURO</span>\n          </div>\n          <mat-checkbox class=\"payment-data__terms-section__checkbox mt-4 pt-2\" formControlName=\"terms\">\n            <div class=\"payment-data__terms__checkbox--text\">\n              <p class=\"pl-4\">\n                Acepto y he leído los <a class=\"link link__citi--blue\"  target=\"_blank\" >Términos y Condiciones </a>de la póliza a contratar, así como el <br>\n                <a class=\"link link__citi--blue\"  target=\"_blank\" >Aviso de Privacidad.</a>\n              </p>\n            </div>\n          </mat-checkbox>\n          <mat-checkbox class=\"payment-data__terms-section__checkbox mt-2 pt-1\" formControlName=\"cover\">\n            <div class=\"payment-data__terms__checkbox--text\">\n              <p class=\"pl-4\">\n                Acepto que la carátula de la póliza, condiciones generales y resumen del seguro sea <br>enviado a mi correo electrónico <b>{{userInfo.email}}</b>\n              </p>\n            </div>\n          </mat-checkbox>\n        </div>\n      </form>\n    </div>\n  </section>\n\n  <section class=\"payment-data__payment-data-section\" >\n    <div class=\"payment-data__payment-data-section__content\">\n      <div class=\"payment-data__payment-data-section__content__item\">\n        <div class=\"payment-data__payment-data-section__content__item__header\">\n          <img class=\"pl-3\" src=\"assets/images/card.svg\" />\n          <span class=\"payment-data__payment-data-section__content__item--title\">DATOS DE PAGO</span>\n        </div>\n\n        <app-payment *ngIf=\"iFrameData.valid\" (paymentIsLoadingEmiter)=\"onPaymentInfoIsLoading($event)\"></app-payment>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"navigation row wrap paises__navigation\">\n    <!-- Bottom page buttons -->\n    <div class=\"btn-container pt-3\">\n      <!-- Return to Cotizar Online page -->\n      <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n        Regresar\n      </a>\n    </div>\n\n    <!--<div class=\"btn-container\">\n      <button id=\"continue2\" type=\"button\" (click)=\"goToNext()\" class=\"btn btn-text btn--primary\">\n        Continuar\n      </button>\n    </div>-->\n  </div>\n</section>\n");

/***/ }),

/***/ 48520:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/summary-booking/summary-booking.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"summary-booking\">\n  <app-summary></app-summary>\n</div>\n");

/***/ }),

/***/ 81421:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/booking/thank-you/thank-you.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container class=\"booking\">\n  <div class=\"row-max column\">\n    <section *ngIf=\"paySuccess\">\n      <section class=\"thankyou\">\n        <img  src=\"assets/images/success.svg\" class=\"pb-2 thankyou__icon\"/>\n        <p class=\"pt-2 thankyou__text_title\">¡Contratación exitosa!</p>\n        <p class=\"pt-2 thankyou__text_msg\">Ya puedes viajar sin preocupaciones.</p>\n        <p class=\"pt-3 thankyou__text_subtitle\">Tu póliza de seguro de viaje, condiciones generales y la información de tu pago han sido enviadas al correo <b>{{email}}</b></p>\n        <p class=\"pt-4 thankyou__text_poliza\">Tu número de póliza es:<b>{{poliza}}</b></p>\n        <div class=\"btn-container pt-4\">\n          <button id=\"download\" type=\"button\" class=\"btn btn-text btn--primary\">\n            Descargar póliza\n          </button>\n        </div>\n        <p class=\"pt-3 thankyou__text_dudas\">¿Tienes más dudas?</p>\n        <p class=\"pt-3 thankyou__text_tel\">Comunícate al <b class=\"phone-desk\">800 900 2880</b><a class=\"phone-mob\" href=\"tel:8009002880\"><b>800 900 2880</b></a></p>\n        <br>\n        <br>\n        <br>\n        <app-banner></app-banner>\n      </section>\n    </section>\n    <section *ngIf=\"!paySuccess\">\n      <section class=\"thankyou\">\n        <img  src=\"assets/images/error.svg\" class=\"pb-2 thankyou__icon_error\"/>\n        <p class=\"pt-2 thankyou__text_title_error\">Tu pago no pudo ser verificado</p>\n        <p class=\"pt-3 thankyou__text_subtitle_error\">Contacta con nuestros ejecutivos, te ayudarán a terminar el proceso de contratación</p>\n        <p class=\"pt-4 thankyou__text_poliza\"><b>Folio:&nbsp;&nbsp;</b>{{folio}}</p>\n        <p class=\"pt-3 thankyou__text_tel\">Llama al <b class=\"phone-desk\">800 900 2880</b><a class=\"phone-mob\" href=\"tel:8009002880\"><b>800 900 2880</b></a></p>\n      </section>\n    </section>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ 36469:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shared/banner/banner.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"msg\">\n    <p>Completa tu seguro de viaje con alguno de nuestros productos</p>\n</div>\n<owl-carousel [options]=\"carouselOptions\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n    <div class=\"banner\">\n        <div *ngFor=\"let slide of slides\" class=\"card_container item\">\n            <img src=\"{{ slide.IMAGESLIDE }}\" class=\"\" alt=\"\">\n            <p class=\"banner__title pl-2 pr-2 pb-2 pt-3\">\n                {{ slide.TITLE }}\n            </p> \n            <p class=\"banner__subtitle pt-3\">\n                {{ slide.SUBTITLE }}\n            </p>\n        </div>\n    </div>\n</owl-carousel >\n\n");

/***/ }),

/***/ 16355:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shared/modal-error-v2/modal-error-v2.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dialog-error-v2 flex-container\">\n  <div class=\"title-close\">\n    <img alt=\"close\" src=\"assets/images/error-close-icon.svg\" class=\"close\" (click)=\"finish('button')\" />\n  </div>\n  <div mat-dialog-content>\n    <div class=\"warning-icon\">\n      <img alt=\"warning\" src=\"assets/images/error-warning-icon.svg\" />\n    </div>\n    <div class=\"title-section\">\n      {{data.title}}\n    </div>\n    <div class=\"message p-2\">\n      {{data.message}}\n    </div>\n    <div class=\"buttons text-center p-3\">\n      <a (click)=\"finish('link')\" class=\"\">{{data.linkText}}</a>\n      <button type=\"button\" (click)=\"finish('button')\" class=\"btn btn-text btn--primary\">\n        {{data.buttonText}}\n      </button>\n    </div>\n  </div>\n  <div mat-dialog-actions>\n  </div>\n</div>\n");

/***/ }),

/***/ 60656:
/*!***********************************************************!*\
  !*** ./src/app/components/booking/booking.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.booking__progress-bar {\n  padding: 0 3rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .booking__progress-bar {\n    padding: 0;\n  }\n}\n\n.booking__content {\n  padding: 3rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .booking__content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.booking__content .summary-section {\n  flex: 1 0;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .booking__content .summary-section {\n    display: none;\n  }\n}";

/***/ }),

/***/ 6714:
/*!***************************************************************************************!*\
  !*** ./src/app/components/booking/step1-a-customer-data/customer-data.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.custommer-data {\n  font-family: Interstate;\n  margin-right: 1.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data {\n    margin-right: 0;\n  }\n}\n\n.custommer-data__data-section__content, .custommer-data__address-section__content {\n  border: solid 3px var(--color-gray-light);\n  border-radius: 4px;\n  margin-bottom: 3rem;\n}\n\n.custommer-data__data-section__content__item__header, .custommer-data__address-section__content__item__header {\n  padding: 0.5rem 0;\n  background-color: var(--color-gray-light);\n  display: flex;\n}\n\n.custommer-data__data-section__content__item--title, .custommer-data__address-section__content__item--title {\n  padding: 0.6rem 2.5rem;\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.custommer-data__data-section__content__item--description,\n.custommer-data__data-section__content__item form, .custommer-data__address-section__content__item--description,\n.custommer-data__address-section__content__item form {\n  padding: 2rem 1rem;\n  display: flex;\n  width: 85%;\n  flex-wrap: wrap;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__data-section__content__item--description,\n.custommer-data__data-section__content__item form, .custommer-data__address-section__content__item--description,\n.custommer-data__address-section__content__item form {\n    width: 100%;\n  }\n}\n\n.custommer-data__data-section__content__item--description form,\n.custommer-data__data-section__content__item form form, .custommer-data__address-section__content__item--description form,\n.custommer-data__address-section__content__item form form {\n  width: 100%;\n  padding: 0;\n}\n\n.custommer-data__data-section__content__item--description__column,\n.custommer-data__data-section__content__item form__column, .custommer-data__address-section__content__item--description__column,\n.custommer-data__address-section__content__item form__column {\n  width: 50%;\n  padding: 0 1rem;\n  margin-bottom: 1.2rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__data-section__content__item--description__column,\n.custommer-data__data-section__content__item form__column, .custommer-data__address-section__content__item--description__column,\n.custommer-data__address-section__content__item form__column {\n    width: 100%;\n  }\n}\n\n.custommer-data__data-section__content__item--description__column .dates-content,\n.custommer-data__data-section__content__item form__column .dates-content, .custommer-data__address-section__content__item--description__column .dates-content,\n.custommer-data__address-section__content__item form__column .dates-content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.custommer-data__data-section__content__item--description__column .dates-content .dates,\n.custommer-data__data-section__content__item form__column .dates-content .dates, .custommer-data__address-section__content__item--description__column .dates-content .dates,\n.custommer-data__address-section__content__item form__column .dates-content .dates {\n  width: 30%;\n}\n\n.custommer-data__data-section__content__item--description__column .uppercase,\n.custommer-data__data-section__content__item form__column .uppercase, .custommer-data__address-section__content__item--description__column .uppercase,\n.custommer-data__address-section__content__item form__column .uppercase {\n  text-transform: uppercase;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-form-field,\n.custommer-data__data-section__content__item form__column .mat-form-field, .custommer-data__address-section__content__item--description__column .mat-form-field,\n.custommer-data__address-section__content__item form__column .mat-form-field {\n  width: 100%;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-container,\n.custommer-data__data-section__content__item form__column .mat-radio-container, .custommer-data__address-section__content__item--description__column .mat-radio-container,\n.custommer-data__address-section__content__item form__column .mat-radio-container {\n  display: none;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button,\n.custommer-data__data-section__content__item form__column .mat-radio-button, .custommer-data__address-section__content__item--description__column .mat-radio-button,\n.custommer-data__address-section__content__item form__column .mat-radio-button {\n  margin-right: 1rem;\n  background: var(--color-white);\n  box-shadow: 0px 3px 6px rgba(130, 167, 217, 0.32);\n  border-radius: 0.4rem;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button .opt-selected,\n.custommer-data__data-section__content__item form__column .mat-radio-button .opt-selected, .custommer-data__address-section__content__item--description__column .mat-radio-button .opt-selected,\n.custommer-data__address-section__content__item form__column .mat-radio-button .opt-selected {\n  display: none;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-label,\n.custommer-data__data-section__content__item form__column .mat-radio-label, .custommer-data__address-section__content__item--description__column .mat-radio-label,\n.custommer-data__address-section__content__item form__column .mat-radio-label {\n  width: 8rem;\n  height: 6.7rem;\n  display: table-cell;\n  text-align: center;\n}\n\n.custommer-data__data-section__content__item--description__column .radio-text,\n.custommer-data__data-section__content__item form__column .radio-text, .custommer-data__address-section__content__item--description__column .radio-text,\n.custommer-data__address-section__content__item form__column .radio-text {\n  font-size: 1rem;\n  line-height: 1.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button.mat-radio-checked,\n.custommer-data__data-section__content__item--description__column .mat-radio-button:focus,\n.custommer-data__data-section__content__item form__column .mat-radio-button.mat-radio-checked,\n.custommer-data__data-section__content__item form__column .mat-radio-button:focus, .custommer-data__address-section__content__item--description__column .mat-radio-button.mat-radio-checked,\n.custommer-data__address-section__content__item--description__column .mat-radio-button:focus,\n.custommer-data__address-section__content__item form__column .mat-radio-button.mat-radio-checked,\n.custommer-data__address-section__content__item form__column .mat-radio-button:focus {\n  border: solid 0.15rem var(--color-border-btn);\n  box-sizing: border-box;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button.mat-radio-checked .radio-text,\n.custommer-data__data-section__content__item--description__column .mat-radio-button:focus .radio-text,\n.custommer-data__data-section__content__item form__column .mat-radio-button.mat-radio-checked .radio-text,\n.custommer-data__data-section__content__item form__column .mat-radio-button:focus .radio-text, .custommer-data__address-section__content__item--description__column .mat-radio-button.mat-radio-checked .radio-text,\n.custommer-data__address-section__content__item--description__column .mat-radio-button:focus .radio-text,\n.custommer-data__address-section__content__item form__column .mat-radio-button.mat-radio-checked .radio-text,\n.custommer-data__address-section__content__item form__column .mat-radio-button:focus .radio-text {\n  color: var(--color-border-btn);\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button.mat-radio-checked .opt-not-selected,\n.custommer-data__data-section__content__item--description__column .mat-radio-button:focus .opt-not-selected,\n.custommer-data__data-section__content__item form__column .mat-radio-button.mat-radio-checked .opt-not-selected,\n.custommer-data__data-section__content__item form__column .mat-radio-button:focus .opt-not-selected, .custommer-data__address-section__content__item--description__column .mat-radio-button.mat-radio-checked .opt-not-selected,\n.custommer-data__address-section__content__item--description__column .mat-radio-button:focus .opt-not-selected,\n.custommer-data__address-section__content__item form__column .mat-radio-button.mat-radio-checked .opt-not-selected,\n.custommer-data__address-section__content__item form__column .mat-radio-button:focus .opt-not-selected {\n  display: none;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button.mat-radio-checked .opt-selected,\n.custommer-data__data-section__content__item--description__column .mat-radio-button:focus .opt-selected,\n.custommer-data__data-section__content__item form__column .mat-radio-button.mat-radio-checked .opt-selected,\n.custommer-data__data-section__content__item form__column .mat-radio-button:focus .opt-selected, .custommer-data__address-section__content__item--description__column .mat-radio-button.mat-radio-checked .opt-selected,\n.custommer-data__address-section__content__item--description__column .mat-radio-button:focus .opt-selected,\n.custommer-data__address-section__content__item form__column .mat-radio-button.mat-radio-checked .opt-selected,\n.custommer-data__address-section__content__item form__column .mat-radio-button:focus .opt-selected {\n  display: inherit;\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button:hover,\n.custommer-data__data-section__content__item form__column .mat-radio-button:hover, .custommer-data__address-section__content__item--description__column .mat-radio-button:hover,\n.custommer-data__address-section__content__item form__column .mat-radio-button:hover {\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button:hover .mat-radio-label,\n.custommer-data__data-section__content__item form__column .mat-radio-button:hover .mat-radio-label, .custommer-data__address-section__content__item--description__column .mat-radio-button:hover .mat-radio-label,\n.custommer-data__address-section__content__item form__column .mat-radio-button:hover .mat-radio-label {\n  color: var(--color-border-btn);\n}\n\n.custommer-data__data-section__content__item--description__column .mat-radio-button:active,\n.custommer-data__data-section__content__item form__column .mat-radio-button:active, .custommer-data__address-section__content__item--description__column .mat-radio-button:active,\n.custommer-data__address-section__content__item form__column .mat-radio-button:active {\n  background: var(--color-light-blue);\n}\n\n.custommer-data__data-section__content__item--description__column .mat-input-element,\n.custommer-data__data-section__content__item form__column .mat-input-element, .custommer-data__address-section__content__item--description__column .mat-input-element,\n.custommer-data__address-section__content__item form__column .mat-input-element {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.custommer-data__address-section__content {\n  border: solid 3px var(--color-gray-light);\n  border-radius: 4px;\n  margin-bottom: 3rem;\n}\n\n.custommer-data__address-section__content__item--description__column-100 {\n  width: 100%;\n  padding: 0 1rem;\n  margin-bottom: 1.2rem;\n}\n\n.custommer-data__address-section__content__item--description__column-100 .mat-form-field {\n  width: 100%;\n}\n\n.custommer-data__address-section__content__item--description__column-100 .mat-input-element {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.custommer-data__address-section__content__item--description__column .nums-content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.custommer-data__address-section__content__item--description__column .nums-content .nums {\n  width: 40%;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__address-section__content__item--description__column .nums-content .nums {\n    width: 65%;\n  }\n}\n\n.custommer-data__address-section__content__item--description__column .zip-content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.custommer-data__address-section__content__item--description__column .zip-content .zip {\n  width: 65%;\n}\n\n.custommer-data__address-section__content__item--description__column .zp-link {\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  color: var(--color-border-btn);\n  width: 100%;\n  margin-top: 1.2rem;\n}\n\n.custommer-data__address-section__content__item--description__column .mat-hint {\n  margin-top: 1rem;\n}\n\n.custommer-data__address-section__content__item--description__column .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: none;\n  background-color: var(--color-text-gray-h2);\n}\n\n.custommer-data__address-section__content__item--description__column .mat-select {\n  padding-bottom: 0.3rem;\n  padding-top: 0.5rem !important;\n}\n\n.custommer-data__address-section__content__item--description__column .mat-form-field-appearance-legacy.mat-form-field-disabled mat-label {\n  color: var(--color-black-1);\n}\n\n.custommer-data__address-section__content__item--description__column .mat-select-arrow {\n  border: none;\n}\n\n.custommer-data__address-section__content__item--description__column .mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon img, .custommer-data__address-section__content__item--description__column .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon img {\n  width: 2rem;\n}\n\n.custommer-data__contractor {\n  padding-left: 2.3rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__contractor {\n    padding-left: 0;\n  }\n}\n\n.custommer-data__contractor .mat-radio-container {\n  display: none;\n}\n\n.custommer-data__contractor .mat-radio-button {\n  margin-right: 2rem;\n  background: var(--color-white);\n  box-shadow: 0px 3px 6px rgba(130, 167, 217, 0.32);\n  border-radius: 0.4rem;\n}\n\n.custommer-data__contractor .mat-radio-button .opt-selected {\n  display: none;\n}\n\n.custommer-data__contractor .mat-radio-label {\n  width: 14rem;\n  height: 4.8rem;\n  display: table-cell;\n  text-align: center;\n  font-size: 1.4rem;\n  line-height: 1.6rem;\n  color: var(--color-gray-dark-5);\n}\n\n.custommer-data__contractor .mat-radio-button.mat-radio-checked,\n.custommer-data__contractor .mat-radio-button:focus {\n  border: solid 0.15rem var(--color-border-btn);\n  box-sizing: border-box;\n  color: var(--color-border-btn);\n}\n\n.custommer-data__contractor .mat-radio-button.mat-radio-checked .mat-radio-label,\n.custommer-data__contractor .mat-radio-button:focus .mat-radio-label {\n  color: var(--color-border-btn);\n}\n\n.custommer-data__contractor .mat-radio-button:hover {\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n.custommer-data__contractor .mat-radio-button:hover .mat-radio-label {\n  color: var(--color-border-btn);\n}\n\n.custommer-data__contractor .mat-radio-button:active {\n  background: var(--color-light-blue);\n}\n\n.custommer-data__terms {\n  padding-left: 2.3rem;\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1.4rem;\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__terms {\n    padding-left: 0;\n  }\n}\n\n.custommer-data__terms__checkbox--text {\n  line-height: 1.4rem;\n  font-family: Interstate;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-data__terms .personal-data .break {\n    display: none;\n  }\n}\n\n.custommer-data .subtitle {\n  display: block;\n  width: 100%;\n  font-weight: 300;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  color: var(--color-gray-dark-7);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .row-max {\n    margin: 0 !important;\n  }\n  .row-max .booking__progress-bar {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .row-max .custommer-data__data-section__content,\n.row-max .custommer-data__address-section__content {\n    border: none;\n  }\n  .row-max .terms-container {\n    padding: 0 2rem;\n  }\n  .row-max .navigation {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n}";

/***/ }),

/***/ 30317:
/*!*************************************************************************************!*\
  !*** ./src/app/components/booking/step1-b-insured-data/insured-data.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n.insured-data {\n  font-family: Interstate;\n  padding-right: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .insured-data {\n    padding-right: 0;\n  }\n}\n\n.insured-data__form {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.insured-data__form__container {\n  width: 100%;\n}\n\n.insured-data__navigation {\n  width: 100%;\n}";

/***/ }),

/***/ 87220:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/booking/step1-b-insured-data/insured-form/insured-form.component.scss ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.insured-data-component__content {\n  border: solid 3px var(--color-gray-light);\n  border-radius: 4px;\n  margin-bottom: 3rem;\n  width: 100%;\n}\n\n.insured-data-component__content__item__header {\n  padding: 0.5rem 0;\n  background-color: var(--color-gray-light);\n  display: flex;\n  width: 100%;\n}\n\n.insured-data-component__content__item__header--title {\n  display: flex;\n  width: 60%;\n}\n\n.insured-data-component__content__item__header--title img {\n  padding-left: 4.5rem;\n  height: 2.3rem;\n}\n\n.insured-data-component__content__item__header--action {\n  margin-right: 1.4rem;\n  display: flex;\n  flex-flow: row-reverse;\n  width: 40%;\n}\n\n.insured-data-component__content__item--title {\n  padding: 0.6rem 2.5rem;\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.insured-data-component__form {\n  padding: 1rem 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .insured-data-component__form {\n    width: 100%;\n  }\n}\n\n.insured-data-component__form__column {\n  width: 50%;\n}\n\n.insured-data-component__form__column:not(:last-child) {\n  padding-right: 4.6rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .insured-data-component__form__column {\n    width: 100%;\n  }\n}\n\n.insured-data-component__form__column .dates-content {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.insured-data-component__form__column .dates-content .dates {\n  width: 30%;\n}\n\n.insured-data-component__form__column .uppercase {\n  text-transform: uppercase;\n}\n\n.insured-data-component__form__column .mat-form-field {\n  width: 100%;\n}\n\n.insured-data-component__form__column .mat-radio-container {\n  display: none;\n}\n\n.insured-data-component__form__column .mat-radio-button {\n  margin-right: 1rem;\n  background: var(--color-white);\n  box-shadow: 0px 3px 6px rgba(130, 167, 217, 0.32);\n  border-radius: 0.4rem;\n}\n\n.insured-data-component__form__column .mat-radio-button .opt-selected {\n  display: none;\n}\n\n.insured-data-component__form__column .mat-radio-label {\n  width: 8rem;\n  height: 6.7rem;\n  display: table-cell;\n  text-align: center;\n}\n\n.insured-data-component__form__column .radio-text {\n  font-size: 1rem;\n  line-height: 1.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.insured-data-component__form__column .mat-radio-button.mat-radio-checked,\n.insured-data-component__form__column .mat-radio-button:focus {\n  border: solid 0.15rem var(--color-border-btn);\n  box-sizing: border-box;\n}\n\n.insured-data-component__form__column .mat-radio-button.mat-radio-checked .radio-text,\n.insured-data-component__form__column .mat-radio-button:focus .radio-text {\n  color: var(--color-border-btn);\n}\n\n.insured-data-component__form__column .mat-radio-button.mat-radio-checked .opt-not-selected,\n.insured-data-component__form__column .mat-radio-button:focus .opt-not-selected {\n  display: none;\n}\n\n.insured-data-component__form__column .mat-radio-button.mat-radio-checked .opt-selected,\n.insured-data-component__form__column .mat-radio-button:focus .opt-selected {\n  display: inherit;\n}\n\n.insured-data-component__form__column .mat-radio-button:hover {\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n.insured-data-component__form__column .mat-radio-button:hover .mat-radio-label {\n  color: var(--color-border-btn);\n}\n\n.insured-data-component__form__column .mat-radio-button:active {\n  background: var(--color-light-blue);\n}\n\n.insured-data-component__form__submit {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  padding-right: 4.4rem;\n  padding-top: 3rem;\n}\n\n.insured-data-component__form__submit--small {\n  width: 18rem;\n}\n\n.insured-data-component .subtitle {\n  display: block;\n  width: 100%;\n  font-weight: 300;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  color: var(--color-gray-dark-7);\n}\n\n.insured-data-component__summary {\n  padding: 1.3rem 0 1.6rem 8.3rem;\n  display: flex;\n}\n\n.insured-data-component__summary__title--name {\n  margin-right: 2rem;\n}\n\n.insured-data-component__summary__img {\n  display: flex;\n  flex: 1;\n  flex-flow: row-reverse;\n  padding-right: 1.7rem;\n}";

/***/ }),

/***/ 99541:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/booking/step2-confirmation-data/confirmation-data.component.scss ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.custommer-confirmation {\n  font-family: Interstate;\n  margin-right: 1.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation {\n    margin-right: 0;\n  }\n}\n\n.custommer-confirmation__contractor-section__content, .custommer-confirmation__insured-section__content {\n  border: solid 3px var(--color-gray-light);\n  border-radius: 4px;\n  margin-bottom: 3rem;\n}\n\n.custommer-confirmation__contractor-section__content__item__header, .custommer-confirmation__insured-section__content__item__header {\n  padding: 0.5rem 0;\n  background-color: var(--color-gray-light);\n  display: flex;\n}\n\n.custommer-confirmation__contractor-section__content__item--title, .custommer-confirmation__insured-section__content__item--title {\n  padding: 0.6rem 2.5rem;\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.custommer-confirmation__contractor-section__content__item--description, .custommer-confirmation__insured-section__content__item--description {\n  padding: 2rem 1rem;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 1.8rem;\n  color: var(--color-black);\n  font-family: \"Interstate-700\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description, .custommer-confirmation__insured-section__content__item--description {\n    width: 100%;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column, .custommer-confirmation__insured-section__content__item--description__column {\n  width: 100%;\n  padding: 0 1rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column__content, .custommer-confirmation__insured-section__content__item--description__column__content {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-oc, .custommer-confirmation__insured-section__content__item--description__column-oc {\n  width: 100%;\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-oc span.text, .custommer-confirmation__insured-section__content__item--description__column-oc span.text {\n  padding-left: 4.5rem;\n  display: flex;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description__column-oc span.text, .custommer-confirmation__insured-section__content__item--description__column-oc span.text {\n    padding-left: 1rem;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-gc, .custommer-confirmation__insured-section__content__item--description__column-gc {\n  width: 65%;\n  display: flex;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description__column-gc, .custommer-confirmation__insured-section__content__item--description__column-gc {\n    width: 75%;\n    justify-content: left;\n    flex-wrap: wrap;\n    padding-top: 1rem;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-gc span.text, .custommer-confirmation__insured-section__content__item--description__column-gc span.text {\n  padding-left: 4.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description__column-gc span.text, .custommer-confirmation__insured-section__content__item--description__column-gc span.text {\n    padding-left: 1rem;\n    width: 100%;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-lc, .custommer-confirmation__insured-section__content__item--description__column-lc {\n  width: 35%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description__column-lc, .custommer-confirmation__insured-section__content__item--description__column-lc {\n    width: 25%;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-lc a, .custommer-confirmation__insured-section__content__item--description__column-lc a {\n  text-decoration: none;\n  color: var(--color-border-btn);\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  display: flex;\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-lc a img, .custommer-confirmation__insured-section__content__item--description__column-lc a img {\n  width: 1.4rem;\n  margin-top: -0.2rem;\n  margin-right: 0.4rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__contractor-section__content__item--description__column-lc a img.contractor-img, .custommer-confirmation__insured-section__content__item--description__column-lc a img.contractor-img {\n    margin-top: -1.5rem;\n  }\n}\n\n.custommer-confirmation__contractor-section__content__item--description__column-lc a:hover, .custommer-confirmation__insured-section__content__item--description__column-lc a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.custommer-confirmation__email__column {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.custommer-confirmation__email__column__label {\n  width: 40%;\n  display: flex;\n  flex-wrap: wrap;\n  font-weight: normal;\n  font-size: 1.8rem;\n  line-height: 2rem;\n  color: var(--color-text-gray-h1);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .custommer-confirmation__email__column__label {\n    width: 100%;\n  }\n}\n\n.custommer-confirmation__email__column__label .icon {\n  width: 100%;\n}\n\n.custommer-confirmation__email__column__label .leyend {\n  width: 60%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .custommer-confirmation__email__column__label .leyend {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__email__column__label .leyend {\n    width: 90%;\n  }\n}\n\n.custommer-confirmation__email__column__input {\n  width: 60%;\n  /*.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{\n    background-color: var(--color-border-btn);\n  }*/\n}\n\n@media only screen and (max-width: 56.25em) {\n  .custommer-confirmation__email__column__input {\n    width: 100%;\n  }\n}\n\n.custommer-confirmation__email__column__input .email {\n  width: 80%;\n}\n\n.custommer-confirmation__email__column__input .email .mat-input-element {\n  margin-top: -1rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .custommer-confirmation__email__column__input .email {\n    width: 100%;\n  }\n}\n\n.custommer-confirmation__email__column__input .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: none;\n  background-color: var(--color-border-btn);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .row-max .custommer-confirmation__contractor-section__content,\n.row-max .custommer-confirmation__insured-section__content {\n    border-left: none;\n    border-right: none;\n  }\n  .row-max .custommer-confirmation__email {\n    padding: 0 2rem;\n  }\n  .row-max .navigation {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n}";

/***/ }),

/***/ 58211:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/booking/step3-payment-data/components/payment/payment.component.scss ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\niframe {\n  width: 100%;\n  min-height: 40rem;\n}\n\niframe.iframe-loaded {\n  min-height: 61.5rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  iframe.iframe-loaded {\n    min-height: 81.5rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  iframe.iframe-loaded {\n    min-height: 85.5rem;\n  }\n}";

/***/ }),

/***/ 5009:
/*!***********************************************************************************!*\
  !*** ./src/app/components/booking/step3-payment-data/payment-data.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.payment-data {\n  font-family: Interstate;\n  margin-right: 1.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data {\n    margin-right: 0;\n  }\n}\n\n.payment-data__terms-section__checkbox, .payment-data__payment-data-section__checkbox {\n  margin-left: 1.5rem;\n}\n\n.payment-data__terms-section__checkbox--text, .payment-data__payment-data-section__checkbox--text {\n  line-height: 1.4rem;\n  font-family: Interstate;\n}\n\n.payment-data__terms-section__content, .payment-data__payment-data-section__content {\n  border-radius: 4px;\n  margin-bottom: 3rem;\n}\n\n.payment-data__terms-section__content__item__header, .payment-data__payment-data-section__content__item__header {\n  padding: 0.5rem 0;\n  background-color: var(--color-gray-light);\n  display: flex;\n  border-radius: 4px 4px 4px 4px;\n}\n\n.payment-data__terms-section__content__item--title, .payment-data__payment-data-section__content__item--title {\n  padding: 0.6rem 2.5rem;\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-gray-dark-5);\n}\n\n.payment-data__terms-section__content__item--description, .payment-data__payment-data-section__content__item--description {\n  padding: 2rem 1rem;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 1.8rem;\n  color: var(--color-black);\n  font-family: \"Interstate-700\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description, .payment-data__payment-data-section__content__item--description {\n    width: 100%;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column, .payment-data__payment-data-section__content__item--description__column {\n  width: 100%;\n  padding: 0 1rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.payment-data__terms-section__content__item--description__column-oc, .payment-data__payment-data-section__content__item--description__column-oc {\n  width: 100%;\n}\n\n.payment-data__terms-section__content__item--description__column-oc span.text, .payment-data__payment-data-section__content__item--description__column-oc span.text {\n  padding-left: 4.5rem;\n  display: flex;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description__column-oc span.text, .payment-data__payment-data-section__content__item--description__column-oc span.text {\n    padding-left: 1rem;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column-gc, .payment-data__payment-data-section__content__item--description__column-gc {\n  width: 65%;\n  display: flex;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description__column-gc, .payment-data__payment-data-section__content__item--description__column-gc {\n    width: 75%;\n    justify-content: left;\n    flex-wrap: wrap;\n    padding-top: 1rem;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column-gc span.text, .payment-data__payment-data-section__content__item--description__column-gc span.text {\n  padding-left: 4.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description__column-gc span.text, .payment-data__payment-data-section__content__item--description__column-gc span.text {\n    padding-left: 1rem;\n    width: 100%;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column-lc, .payment-data__payment-data-section__content__item--description__column-lc {\n  width: 35%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description__column-lc, .payment-data__payment-data-section__content__item--description__column-lc {\n    width: 25%;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column-lc a, .payment-data__payment-data-section__content__item--description__column-lc a {\n  text-decoration: none;\n  color: var(--color-border-btn);\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  display: flex;\n}\n\n.payment-data__terms-section__content__item--description__column-lc a img, .payment-data__payment-data-section__content__item--description__column-lc a img {\n  width: 1.4rem;\n  margin-top: -0.2rem;\n  margin-right: 0.4rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .payment-data__terms-section__content__item--description__column-lc a img.contractor-img, .payment-data__payment-data-section__content__item--description__column-lc a img.contractor-img {\n    margin-top: -1.5rem;\n  }\n}\n\n.payment-data__terms-section__content__item--description__column-lc a:hover, .payment-data__payment-data-section__content__item--description__column-lc a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .row-max .payment-data__terms-section__content,\n.row-max .payment-data__payment-data-section__content {\n    border-left: none;\n    border-right: none;\n  }\n  .row-max .navigation {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n}";

/***/ }),

/***/ 72365:
/*!***********************************************************************************!*\
  !*** ./src/app/components/booking/summary-booking/summary-booking.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n.summary-booking {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n\n/*.booking__progress-bar,\n.booking-footer-doubts{\n  display: none;\n}*/";

/***/ }),

/***/ 48185:
/*!***********************************************************************!*\
  !*** ./src/app/components/booking/thank-you/thank-you.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.thankyou {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.thankyou__icon {\n  height: 26.875px;\n  width: 35.625px;\n  left: 8.4375px;\n  top: 11.5625px;\n  border-radius: 0px;\n}\n\n.thankyou__icon_error {\n  height: 50px;\n  width: 50px;\n}\n\n.thankyou__text_title {\n  width: 330px;\n  height: 40px;\n  font-size: 32px;\n  font-family: \"Interstate\";\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  color: #323232;\n}\n\n.thankyou__text_title_error {\n  width: 500px;\n  height: 40px;\n  left: 457px;\n  top: 174px;\n  font-size: 32px;\n  text-align: center;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_title_error {\n    width: 279px;\n    height: 60px;\n    left: 21px;\n    top: 129px;\n    font-size: 22px;\n    text-align: center;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_title {\n    width: 227px;\n    height: 30px;\n    left: calc(50% - 227px/2);\n    top: calc(50% - 30px/2 + 30px);\n    font-size: 22px;\n  }\n}\n\n.thankyou__text_msg {\n  width: 339px;\n  height: 32px;\n  left: 512px;\n  top: 195px;\n  font-size: 20px;\n  font-family: \"Interstate\";\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  color: #323232;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_msg {\n    width: 280px;\n    height: 48px;\n    left: 20px;\n    top: 166px;\n    font-size: 18px;\n  }\n}\n\n.thankyou__text_subtitle {\n  width: 590px;\n  height: 46px;\n  font-size: 16px;\n  font-family: \"Interstate-Light\";\n  font-style: normal;\n  font-weight: 300;\n  text-align: center;\n  color: #323232;\n}\n\n.thankyou__text_subtitle_error {\n  width: 566px;\n  height: 48px;\n  left: 400px;\n  top: 225px;\n  text-align: center;\n  font-family: \"Interstate-Light\";\n  font-size: 20px;\n  line-height: 24px;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_subtitle_error {\n    width: 280px;\n    height: 66px;\n    left: 20px;\n    top: 209px;\n    text-align: center;\n    font-family: \"Interstate-Light\";\n    font-size: 18px;\n    line-height: 22px;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_subtitle {\n    width: 270px;\n    height: 54px;\n    left: 20px;\n    top: 224px;\n    font-size: 14px;\n  }\n}\n\n.thankyou__text_poliza {\n  width: 579px;\n  height: 47px;\n  left: 402px;\n  top: 307px;\n  font-family: \"Interstate-Light\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  text-align: center;\n  color: #323232;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_poliza {\n    width: 263px;\n    height: 47px;\n    left: 29px;\n    top: 298px;\n    font-size: 16px;\n  }\n}\n\n.thankyou__text_dudas {\n  width: 299px;\n  height: 19px;\n  left: 534px;\n  top: 444px;\n  font-size: 16px;\n  font-family: \"Interstate-Light\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  text-align: center;\n  color: #323232;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_dudas {\n    width: 248px;\n    height: 17px;\n    left: 36px;\n    top: 444px;\n    font-size: 14px;\n  }\n}\n\n.thankyou__text_tel {\n  width: 299px;\n  height: 22px;\n  left: 534px;\n  top: 479px;\n  font-size: 18px;\n  font-family: \"Interstate-Light\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  text-align: center;\n  color: #323232;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou__text_tel {\n    width: 248px;\n    height: 19px;\n    left: 36px;\n    top: 477px;\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou .phone-desk {\n    display: none;\n  }\n}\n\n.thankyou .phone-mob {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .thankyou .phone-mob {\n    display: unset;\n    color: var(--color-border-btn);\n    text-decoration: none;\n  }\n}\n\n.thankyou .btn--primary {\n  height: 48px;\n  width: 260px;\n  left: 0px;\n  top: 0px;\n  border-radius: 8px;\n  font-family: \"Interstate\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  color: #FFFFFF;\n}";

/***/ }),

/***/ 8824:
/*!****************************************************************!*\
  !*** ./src/app/components/shared/banner/banner.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.msg {\n  font-family: \"Interstate\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  text-align: center;\n  color: #323232;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .msg {\n    width: 274px;\n    height: 72px;\n    font-size: 20px;\n    line-height: 24px;\n  }\n}\n\n.carousel .slick-prev {\n  left: 15%;\n}\n\n.carousel .slick-next {\n  left: 15%;\n}\n\n.card_container {\n  width: 344px;\n  height: 370px;\n  background: #FFFFFF;\n  box-shadow: 0px 6px 16px rgba(0, 45, 114, 0.15);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 21px;\n}\n\n.banner {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 500px;\n}\n\n.banner__img {\n  width: 345px;\n  height: 230px;\n  left: 146px;\n  top: 609px;\n}\n\n.banner__subtitle {\n  width: 285px;\n  height: 75px;\n  left: 542px;\n  top: 905px;\n  font-family: \"Interstate-Light\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 26px;\n  padding: auto;\n  color: #323232;\n}\n\n.banner__title {\n  width: 295px;\n  height: 61px;\n  left: 542px;\n  top: 834px;\n  font-family: \"Interstate\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  padding: auto;\n  color: #323232;\n}";

/***/ }),

/***/ 77334:
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/modal-error-v2/modal-error-v2.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n.dialog-error-v2 {\n  width: 100%;\n  font-family: Interstate;\n}\n\n.dialog-error-v2 .title-close {\n  width: 100%;\n  min-height: 1.5rem;\n  text-align: right;\n}\n\n.dialog-error-v2 .title-close img {\n  margin-right: -2rem;\n  margin-top: -2rem;\n  opacity: 0.8;\n}\n\n.dialog-error-v2 .title-close:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.dialog-error-v2 .warning-icon {\n  text-align: center;\n}\n\n.dialog-error-v2 .title-section {\n  text-align: center;\n  font-style: normal;\n  font-size: 2.4rem;\n  line-height: 2.8rem;\n  color: var(--color-black-3);\n}\n\n.dialog-error-v2 .message {\n  text-align: center;\n  font-style: normal;\n  font-size: 1.6rem;\n  font-weight: 300;\n  line-height: 2rem;\n  color: var(--color-gray-dark-5);\n  font-family: Interstate-Light;\n}\n\n.dialog-error-v2 .buttons {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dialog-error-v2 .buttons {\n    flex-wrap: wrap-reverse;\n  }\n}\n\n.dialog-error-v2 .buttons a {\n  color: var(--color-border-btn);\n  font-size: 1.5rem;\n  line-height: 1.9rem;\n  padding-right: 2.5rem;\n  margin-top: 1.5rem;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dialog-error-v2 .buttons a {\n    padding-right: 0;\n    width: 100%;\n    padding-top: 2rem;\n    margin-top: 0;\n  }\n}\n\n.warning-dialog-pane {\n  width: 30%;\n}\n\n@media only screen and (max-width: 75em) {\n  .warning-dialog-pane {\n    width: 40%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .warning-dialog-pane {\n    width: 60%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .warning-dialog-pane {\n    width: 100%;\n  }\n}";

/***/ })

}]);