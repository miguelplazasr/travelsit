"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[493],{

/***/ 27738:
/*!*********************************************************************!*\
  !*** ./src/app/components/cancellations/cancellations.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationsComponent": () => (/* binding */ CancellationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cancellations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cancellations.component.html */ 21945);
/* harmony import */ var _cancellations_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellations.component.scss */ 9031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CancellationsComponent = class CancellationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CancellationsComponent.ctorParameters = () => [];
CancellationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cancellations',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cancellations_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cancellations_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CancellationsComponent);



/***/ }),

/***/ 76720:
/*!******************************************************************!*\
  !*** ./src/app/components/cancellations/cancellations.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationsModule": () => (/* binding */ CancellationsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _cancellations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellations.component */ 27738);
/* harmony import */ var _cancellations_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancellations.routing */ 52456);





let CancellationsModule = class CancellationsModule {
};
CancellationsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _cancellations_component__WEBPACK_IMPORTED_MODULE_0__.CancellationsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _cancellations_routing__WEBPACK_IMPORTED_MODULE_1__.CancellationsRouting
        ]
    })
], CancellationsModule);



/***/ }),

/***/ 52456:
/*!*******************************************************************!*\
  !*** ./src/app/components/cancellations/cancellations.routing.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancellationsRouting": () => (/* binding */ CancellationsRouting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _cancellations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancellations.component */ 27738);




const ROUTES_CANCELLATIONS = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _cancellations_component__WEBPACK_IMPORTED_MODULE_0__.CancellationsComponent
    }
];
let CancellationsRouting = class CancellationsRouting {
};
CancellationsRouting = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(ROUTES_CANCELLATIONS)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: []
    })
], CancellationsRouting);



/***/ }),

/***/ 80697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.component.html */ 69266);
/* harmony import */ var _products_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.scss */ 81152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_selectors_content_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors/content.selectors */ 58903);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _store_actions_quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/quote */ 23712);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/summary */ 86257);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/content */ 15530);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/quote/quote.model */ 30062);
/* harmony import */ var _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/summary/summary.model */ 88981);
/* harmony import */ var _models_content_shared_progress_bar_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/content/shared/progress-bar.model */ 96470);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/location.service */ 87080);















let ProductsComponent = class ProductsComponent {
    constructor(store, router, route, _service) {
        this.store = store;
        this.router = router;
        this.route = route;
        this._service = _service;
        this.dataQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_6__.QuoteModel();
        this.dataProgressBar = new _models_content_shared_progress_bar_model__WEBPACK_IMPORTED_MODULE_8__.ProgressBarModel();
    }
    ngOnInit() {
        this._service.getTest().subscribe();
        this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_5__.set_progress_bar({ dataProgressBar: this.dataProgressBar }));
        this.store.select(_store_selectors_content_selectors__WEBPACK_IMPORTED_MODULE_2__.customLinksFooter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((links) => {
            return links.filter(x => x.name === 'generalConditionsURL');
        }))
            .subscribe((links) => {
            this.linkCondiciones = links[0];
        });
    }
    goToNext(tripType) {
        const dataSummary = new _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_7__.SummaryModel();
        dataSummary.package = tripType;
        if ('casual' === tripType) {
            this.router.navigate(['..', tripType, 'cotizacion'], {
                relativeTo: this.route,
                queryParamsHandling: 'merge',
            });
            const tipo = { isSingleTrip: true };
            this.dataQuote.isSingleTrip = tipo.isSingleTrip;
            //ToDo: Posiblemente el dispatcha de quote salga de aqui
            this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_4__.set_data_summary({ dataSummary }));
            this.store.dispatch(_store_actions_quote__WEBPACK_IMPORTED_MODULE_3__.set_data_quote({ dataQuote: this.dataQuote }));
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_9__.LocationService }
];
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-products',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsComponent);



/***/ }),

/***/ 39493:
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 80697);
/* harmony import */ var _products_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.routing */ 37694);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4065);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _cancellations_cancellations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cancellations/cancellations.module */ 76720);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/pipes.module */ 35503);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_reducers_quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/quote */ 34637);











let ProductsModule = class ProductsModule {
};
ProductsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _products_routing__WEBPACK_IMPORTED_MODULE_1__.ProductsRouting,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forFeature(_store_reducers_quote__WEBPACK_IMPORTED_MODULE_5__.dataQuoteFeatureKey, _store_reducers_quote__WEBPACK_IMPORTED_MODULE_5__.dataQuoteReducer),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _cancellations_cancellations_module__WEBPACK_IMPORTED_MODULE_3__.CancellationsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]
    })
], ProductsModule);



/***/ }),

/***/ 37694:
/*!*********************************************************!*\
  !*** ./src/app/components/products/products.routing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRouting": () => (/* binding */ ProductsRouting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 80697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




const ROUTES_PRODUCTS = [
    {
        path: '',
        redirectTo: 'producto',
        pathMatch: 'full'
    },
    {
        path: 'producto',
        component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
    },
    {
        path: ':producto',
        children: [
            {
                path: 'cotizacion',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(592), __webpack_require__.e(118)]).then(__webpack_require__.bind(__webpack_require__, /*! ../quote/quote.module */ 34118)).then(m => m.QuoteModule)
            },
            {
                path: 'contratacion',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(592), __webpack_require__.e(965)]).then(__webpack_require__.bind(__webpack_require__, /*! ../booking/booking.module */ 59965)).then(m => m.BookingModule)
            }
        ]
    },
    {
        path: 'cancelaciones',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../cancellations/cancellations.module */ 76720)).then(m => m.CancellationsModule)
    }
];
let ProductsRouting = class ProductsRouting {
};
ProductsRouting = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(ROUTES_PRODUCTS)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: []
    })
], ProductsRouting);



/***/ }),

/***/ 21945:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/cancellations/cancellations.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h6>cancellations works!</h6>\n");

/***/ }),

/***/ 69266:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/products/products.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--Products Section-->\n<section class=\"products\">\n  <div class=\"products__row\">\n    <section class=\"products__content \">\n      <div class=\"products__content__title\">\n        <span>Elige uno de nuestros paquetes</span>\n      </div>\n      <div class=\"products__cards \">\n\n        <!-- Casual Trip -->\n        <div class=\"card\">\n          <div class=\"card__item\">\n            <div class=\"card__header\">\n              <img src=\"assets/images/661144084.png\" alt=\"\" class=\"card__header__photo\">\n              <p class=\"card__item__title\">Viajero Casual </p>\n            </div>\n            <div>\n              <ul class=\"list card__list\">\n                <li class=\"card__list__item\"><span class=\"paragraph paragraph__normal card__list__item--text\">Si <span class=\"paragraph\"> viajas ocasionalmente, </span> este plan te cubre un solo viaje por póliza contratada.</span>\n                </li>\n                <li class=\"card__list__item\"><span class=\"paragraph paragraph__normal card__list__item--text\">Tu seguro puede cubrirte hasta un máximo de <span class=\"paragraph\">90 días.</span></span></li>\n                <li class=\"card__list__item\">\n                  <span class=\"paragraph paragraph__normal card__list__item--text\">Asegura hasta <span class=\"paragraph\">14</span> personas. Pueden ser <span class=\"paragraph\">familiares, amigos o conocidos.</span></span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"nav__box\">\n              <button type=\"button\" data-cy=\"viajero_casual\" (click)=\"goToNext('casual')\" class=\"nav__box__btn btn btn-text btn--primary \">\n                Cotizar\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- ./casual_trip -->\n\n        <!-- Habitual Trip -->\n        <div class=\"card\">\n          <div class=\"card__item\">\n            <div class=\"card__header\">\n              <img src=\"assets/images/1070510148.png\" alt=\"\" class=\"card__header__photo\">\n              <p class=\"card__item__title\">Viajero Habitual </p>\n            </div>\n            <div>\n              <ul class=\"card__list\">\n                <li class=\"card__list__item\">\n                  <span class=\"paragraph paragraph__normal card__list__item--text\">Si <span class=\"paragraph\">viajas mucho,</span> este plan te cubre todos los viajes que realices al año.</span>\n                </li>\n                <li class=\"card__list__item\">\n                  <span class=\"paragraph paragraph__normal card__list__item--text\">Tu seguro puede cubrirte hasta un máximo de <span class=\"paragraph\">45 días.</span></span>\n                </li>\n                <li class=\"card__list__item\">\n                  <span class=\"paragraph paragraph__normal card__list__item--text\">Asegura hasta <span class=\"paragraph\">5</span> miembros de tu <span class=\"paragraph\">familia directa.</span></span><sub class=\"sup\">(1)</sub>\n                </li>\n              </ul>\n            </div>\n            <div class=\"nav__box\">\n              <a href=\"tel:5550623252\">\n                <button type=\"button\" (click)=\"goToNext('habitual')\" class=\"nav__box__btn btn btn-text btn--primary\">\n                  Cotizar\n                </button>\n\n              </a>\n            </div>\n          </div>\n        </div>\n        <!-- ./habitual_trip -->\n\n      </div>\n      <div class=\"products__content__subtitle\">\n        <!--        <img src=\"assets/images/idea.svg\" class=\"products__content__subtitle__image\">-->\n        <img class=\"align-img pr-2 products__content__subtitle__image\" src=\"assets/images/idea.png\"/>\n        <p class=\"products__content__subtitle__text\">\n          Consulta nuestras coberturas y exclusiones en <a *ngIf=\"linkCondiciones !== undefined\"\n                                                           [href]=\"linkCondiciones.url | safe: 'url'\" target=\"_blank\"\n                                                           class=\"link link__citi link__citi--blue\">Condiciones\n          Generales.</a>\n        </p>\n      </div>\n    </section>\n  </div>\n</section>\n<!--./products_section-->\n\n<!--Legal Section-->\n<section class=\"legal\">\n  <div class=\"legal__row\">\n    <div class=\"legal__header\">\n      <p class=\"paragraph paragraph--tiny\">No ofrecemos cobertura para los siguientes destinos: Cuba, Sudán, Irak, Irán,\n        Corea del Norte, Siria,\n        República Democrática del Congo, Región de Crimea o Sebastopol y Afganistán.\n      </p>\n      <p class=\"paragraph paragraph--tiny paragraph--light\">(1) Disponible solo para miembros del núcleo familiar:\n        cónyuge y hasta 3 hijos menores de 21 años.</p>\n    </div>\n  </div>\n\n  <div class=\"products__accordions row wrap pt-3 pb-3\">\n    <mat-accordion class=\"products__accordions__container\" multi>\n      <mat-expansion-panel expanded>\n        <mat-expansion-panel-header class=\"products__accordions__container__header\">\n          <mat-panel-title class=\"products__accordions__container__title\">\n            Conoce los criterios de cancelación\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class=\"pt-3 products__accordions__container__text\">\n          <p>\n            Para cancelar deberás llenar un formulario y enviarlo junto con la identificación oficial escaneada del contratante a través de esta página. Conoce los detalles del <a routerLink=\"/cancelaciones\" target=\"_blank\">proceso de cancelación</a>.\n            <br/><br/>\n            Esta Póliza se cancelará automáticamente al ocurrir cualquiera de los siguientes eventos:<br/>\n            <b>a)</b> En el aniversario de la Póliza inmediato posterior a la fecha en que el Asegurado cumpla la edad máxima de Viaje Protegido CBNX 48 renovación estipulada en la carátula de la Póliza.<br/>\n            <b>b)</b> Por el fallecimiento del Asegurado.<br/>\n            <b>c)</b> Si el Asegurado cambia su lugar de residencia fuera de los Estados Unidos Mexicanos.<br/>\n            <b>d)</b> Por falta de pago de las primas.<br/>\n            <b>e)</b> Cuando el Contratante solicite la cancelación de la Póliza por escrito a la Compañía. La cancelación causará efecto a partir de la fecha en que sea recibida la solicitud en las oficinas de la Compañía, o a partir de la fecha solicitada en el documento respectivo, la que sea posterior.<br/>\n            <b>f)</b> Cuando a petición de cualquiera de las partes, la Póliza no sea renovada.\n            <br/><br/>\n            Si el Asegurado desea darlo por terminado, deberá dar aviso por escrito a la Compañía. En este caso, la terminación anticipada surtirá efectos el día y hora en que se presente por escrito el aviso a la Compañía. La Compañía tendrá derecho a retener la parte de la prima que corresponda al tiempo durante el cual la Póliza hubiere estado en vigor de acuerdo a la siguiente tabla:\n            <br/><br/>\n            <b>1. Para seguros con cobertura menor a 365 días (Casual):</b><br/>\n            1.1 Previo al inicio de la vigencia de la Póliza (menos de 48 hrs): 20% de la prima neta<br/>\n            1.2 Dentro de las 48 hrs a partir del inicio de vigencia la Póliza: 35% de la prima neta<br/>\n            1.3 Posterior a 48 hrs del inicio de la vigencia de la Póliza: 100% de la prima Solo para el caso de que el Asegurado haya contratado este seguro a través de operaciones telefónicas voz a voz (Telemarketing) y solicite la terminación anticipada de este contrato de seguro, dentro de las 48 horas posteriores a su contratación, la Compañía devolverá el 100% de la prima, por lo que posterior a 48 hrs del inicio de vigencia de la Póliza, la retención de la prima será al 100%.\n            <br/><br/>\n            <b>2. Para seguros con cobertura de 365 días (un año calendario) (Habitual):</b><br/>\n            · Dentro de las 48 hrs. previas al inicio de vigencia de la Póliza: 20% de la prima neta.<br/>\n            · Dentro de las 48 hrs a partir del inicio de vigencia la Póliza: 35% de la prima neta.<br/>\n            · Hasta tres meses de vigencia devengada: 40% de la prima neta.<br/>\n            · Hasta seis meses de vigencia devengada: 70% de la prima neta.<br/>\n            · Hasta nueve meses de vigencia devengada: 90% de la prima neta.<br/>\n            · Más de nueve meses de vigencia devengada: 100% de la prima neta.\n            <br/><br/>\n            En caso de que la Compañía requiera dar por terminado anticipadamente este contrato, deberá notificar por escrito al Asegurado, enviando un aviso por correo certificado con cuando menos siete días naturales de anticipación a la fecha en que se deseé su terminación, debiendo además devolver la parte de la prima no devengada correspondiente según corresponda a la tabla anterior. Esta terminación anticipada por parte de la Compañía no aplicará para las coberturas Muerte Accidental, Gastos Médicos por Accidente y/o Enfermedad, Gastos por Emergencia Odontológica, Gastos Funerarios o Traslado de Restos Mortales y Estabilización de Padecimientos Preexistentes, siempre que el Asegurado las tenga contratadas en su Póliza.\n            <br/><br/>\n            Posterior a 48 hrs. del inicio de vigencia de la Póliza, seguirá la siguiente escala:<br/>\n            · Hasta tres meses de vigencia devengada 40% de la prima neta.<br/>\n            · Hasta seis meses de vigencia devengada 70% de la prima neta.<br/>\n            · Hasta nueve meses de vigencia devengada 90% de la prima neta.<br/>\n            · Más de nueve meses de vigencia devengada 100% de la prima neta.\n            <br/><br/>\n            Cuando se dé por terminado anticipadamente el contrato, se devolverá la prima, de conformidad a lo estipulado Viaje Protegido CBNX 49 en esta cláusula dentro de los treinta (30) días hábiles siguientes a la solicitud de terminación, mediante cheque o transferencia bancaria, de acuerdo a lo solicitado por el Contratante.\n            <br/><br/>\n            En caso de requerir apoyo para cancelar tu poliza, comunicate al <span class=\"phone-desk\"><b>800 900 2880</b></span><a class=\"phone-mob\" href=\"tel:8009002880\">800 900 2880</a>.\n          </p>\n        </div>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel expanded>\n        <mat-expansion-panel-header class=\"products__accordions__container__header\">\n          <mat-panel-title class=\"products__accordions__container__title\">\n            Conoce algunas de nuestras principales exclusiones\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class=\"pt-3 pl-3 products__accordions__container__text\">\n          <ul>\n            <li class=\"pb-2\">\n              Para pérdida o robo de documentos de viaje no se cubrirá en caso de destrucción de documentos de viaje por parte de autoridades migratorias.\n            </li>\n            <li class=\"pt-2 pb-2\">\n              Para la cobertura de Gastos Médicos por Accidente y/o Enfermedad no se cubrirá cualquier gasto incurrido después de que el Asegurado haya vuelto al lugar de residencia.\n            </li>\n            <li class=\"pt-2 pb-2\">\n              Si el traslado médico de emergencia no es médicamente justificable según la evaluación efectuada por la Compañía.\n            </li>\n            <li class=\"pt-2 pb-2\">\n              Responsabilidad civil del asegurado ocasionada por dolo o por su participación en algún delito.\n            </li>\n            <li class=\"pt-2 pb-2\">\n              Gastos posteriores a la estabilización del asegurado por enfermedad preexistente, tales como medicamentos.\n            </li>\n            <li class=\"pt-2\">\n              Para la cobertura de gastos médicos por accidente y/o enfermedad no serán cubiertos accidentes o enfermedades ocurridos a causa de una enfermedad preexistente, salvo en el caso de la cobertura de estabilización de padecimientos preexistentes donde sólo se cubre la estabilización del paciente.\n            </li>\n          </ul>\n        </div>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel expanded>\n        <mat-expansion-panel-header class=\"products__accordions__container__header\">\n          <mat-panel-title class=\"products__accordions__container__title\">\n            Conoce qué hacer en caso de siniestro\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class=\"pt-3 products__accordions__container__text\">\n          <p>\n            Comunícate de inmediato al <b class=\"phone-desk\">800 900 2880</b><a class=\"phone-mob\" href=\"tel:8009002880\"><b>800 900 2880</b></a>.\n          </p>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</section>\n<!--./legal_section-->\n");

/***/ }),

/***/ 9031:
/*!***********************************************************************!*\
  !*** ./src/app/components/cancellations/cancellations.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 81152:
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.products {\n  background-color: var(--color-gray-light);\n}\n\n.products__content {\n  padding: 5rem 0 2rem 0;\n}\n\n.products__content__title {\n  color: var(--color-text-gray-h1);\n  font-size: 3.6rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .products__content__title {\n    padding: 0 1rem;\n  }\n}\n\n.products__content__subtitle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .products__content__subtitle {\n    margin: 3rem 2rem 0 2rem;\n  }\n}\n\n.products__content__subtitle__image {\n  height: 2.6rem;\n}\n\n.products__content__subtitle__text {\n  font-weight: 300;\n  font-family: \"Interstate-Light\";\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  color: var(--color-black-1);\n}\n\n.products__content__subtitle__text a {\n  font-family: Interstate;\n}\n\n.products__cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.products__cards .card__item {\n  border-radius: 4px;\n}\n\n.products__accordions__container__header {\n  background-color: var(--color-gray-light);\n}\n\n.products__accordions__container__title {\n  font-size: 1.2rem;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 1.3rem;\n  color: var(--color-black-1);\n}\n\n.products__accordions__container__text {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  color: var(--color-black-1);\n}\n\n.products__accordions__container__text a {\n  text-decoration: none;\n  color: var(--color-border-btn);\n  font-family: Interstate;\n}\n\n.products__accordions__container__text a:hover {\n  text-decoration: underline;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .products__accordions__container__text .phone-desk {\n    display: none;\n  }\n}\n\n.products__accordions__container__text .phone-mob {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .products__accordions__container__text .phone-mob {\n    display: unset;\n    color: var(--color-border-btn);\n    text-decoration: none;\n  }\n}\n\n.card {\n  padding: 0.9rem;\n  display: flex;\n}\n\n.card__header__photo {\n  width: 100%;\n  display: block;\n}\n\n.card__item {\n  width: 35.3rem;\n  background-color: var(--color-white);\n  box-shadow: var(--shadow-card-light);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .card__item {\n    width: 100%;\n    margin: 0 1rem;\n  }\n}\n\n.card__item__photo {\n  width: 35.3rem;\n}\n\n.card__item__title {\n  text-align: center;\n  font-size: 1.8rem;\n  margin: 0.9rem 0 2rem;\n}\n\n.card__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  list-style-type: none;\n  list-style-position: outside;\n  margin: 2rem;\n  border-top: var(--line);\n  padding-left: 1rem;\n  height: 20.6rem;\n}\n\n.card__list__item {\n  font-family: Interstate-Light;\n  font-size: 1.6rem;\n  margin: 1rem 1rem 0 2rem;\n}\n\n.card__list__item--text {\n  margin-left: 1rem;\n}\n\n.card__list__item::before {\n  content: \"\";\n  display: inline-block;\n  height: 0.8rem;\n  width: 1.2rem;\n  margin-left: -2.3rem;\n  background-color: var(--color-btn-blue);\n  -webkit-mask-image: url('/seguro-de-viaje/validate.7f45610d62bb0ec27989.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/validate.7f45610d62bb0ec27989.svg');\n  mask-size: cover;\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  align-items: flex-end;\n}\n\n.nav__box {\n  text-align: center;\n  padding: 0 0 2rem 0;\n}\n\n.nav__box__btn {\n  width: 26rem;\n  height: 4.8rem;\n  border-radius: 8px;\n}\n\n.legal {\n  background-color: var(--color-white);\n  font-size: 1.2rem;\n}\n\n.legal {\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .legal {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .legal__row {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 75em) {\n  .legal__row {\n    margin-right: 1rem;\n    margin-left: 1rem;\n  }\n}\n\n.legal__header {\n  font-family: Interstate-Bold;\n  padding: 4rem 0 2rem 0;\n}\n\n.list {\n  margin-left: 1.5rem;\n}\n\n.list__item {\n  margin: 1rem 1rem 0 0;\n  line-height: 1.6rem;\n}\n\n.paragraph-img {\n  font-family: Interstate-Light;\n  color: var(--color-text-gray-h1);\n  text-align: center;\n}\n\n.paragraph-img::before {\n  content: \"\";\n  display: inline-block;\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-left: -3rem;\n  vertical-align: center;\n  text-align: center;\n  margin-right: 1rem;\n  background-color: var(--color-text-gray-h1);\n  -webkit-mask-image: url('/seguro-de-viaje/idea.735bb102731eabe34810.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/idea.735bb102731eabe34810.svg');\n  mask-size: cover;\n}";

/***/ })

}]);