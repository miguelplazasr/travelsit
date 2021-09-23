"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[204],{

/***/ 90204:
/*!**********************************************************!*\
  !*** ./src/app/components/quote/casual/casual.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasualModule": () => (/* binding */ CasualModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _step1_tipo_viaje_tipo_viaje_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1-tipo-viaje/tipo-viaje.component */ 9568);
/* harmony import */ var _step3_fechas_viaje_fechas_viaje_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step3-fechas-viaje/fechas-viaje.component */ 40045);
/* harmony import */ var _step4_numero_personas_numero_personas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step4-numero-personas/numero-personas.component */ 84403);
/* harmony import */ var _step2_paises_paises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step2-paises/paises.component */ 46829);
/* harmony import */ var _casual_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./casual.routing */ 14722);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 4065);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/directives.module */ 78434);










let CasualModule = class CasualModule {
};
CasualModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _step1_tipo_viaje_tipo_viaje_component__WEBPACK_IMPORTED_MODULE_0__.TipoViajeComponent,
            _step3_fechas_viaje_fechas_viaje_component__WEBPACK_IMPORTED_MODULE_1__.FechasViajeComponent,
            _step4_numero_personas_numero_personas_component__WEBPACK_IMPORTED_MODULE_2__.NumeroPersonasComponent,
            _step2_paises_paises_component__WEBPACK_IMPORTED_MODULE_3__.PaisesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _casual_routing__WEBPACK_IMPORTED_MODULE_4__.CasualRouting,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule
        ],
        providers: [
        // MatDatepickerModule
        ]
    })
], CasualModule);



/***/ }),

/***/ 14722:
/*!***********************************************************!*\
  !*** ./src/app/components/quote/casual/casual.routing.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasualRouting": () => (/* binding */ CasualRouting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _step1_tipo_viaje_tipo_viaje_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1-tipo-viaje/tipo-viaje.component */ 9568);
/* harmony import */ var _step3_fechas_viaje_fechas_viaje_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step3-fechas-viaje/fechas-viaje.component */ 40045);
/* harmony import */ var _step4_numero_personas_numero_personas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step4-numero-personas/numero-personas.component */ 84403);
/* harmony import */ var _step2_paises_paises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step2-paises/paises.component */ 46829);







const ROUTES_CASUAL = [
    {
        path: '',
        redirectTo: 'tipo-destino',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'tipo-destino',
                component: _step1_tipo_viaje_tipo_viaje_component__WEBPACK_IMPORTED_MODULE_0__.TipoViajeComponent,
                data: {
                    currentStep: 1
                }
            },
            {
                path: ':destino/paises',
                component: _step2_paises_paises_component__WEBPACK_IMPORTED_MODULE_3__.PaisesComponent,
                data: {
                    currentStep: 2
                }
            },
            {
                path: ':destino/fechas',
                component: _step3_fechas_viaje_fechas_viaje_component__WEBPACK_IMPORTED_MODULE_1__.FechasViajeComponent,
                data: {
                    currentStep: 3
                }
            },
            {
                path: ':destino/viajeros',
                component: _step4_numero_personas_numero_personas_component__WEBPACK_IMPORTED_MODULE_2__.NumeroPersonasComponent,
                data: {
                    currentStep: 4
                }
            }
        ]
    }
];
let CasualRouting = class CasualRouting {
};
CasualRouting = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(ROUTES_CASUAL)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        providers: []
    })
], CasualRouting);



/***/ }),

/***/ 9568:
/*!**********************************************************************************!*\
  !*** ./src/app/components/quote/casual/step1-tipo-viaje/tipo-viaje.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoViajeComponent": () => (/* binding */ TipoViajeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tipo_viaje_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tipo-viaje.component.html */ 56046);
/* harmony import */ var _tipo_viaje_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipo-viaje.component.scss */ 91775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/quote/quote.model */ 30062);
/* harmony import */ var _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/summary/summary.model */ 88981);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/actions/summary */ 86257);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/actions/content */ 15530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_components_shared_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/modal-error/modal-error.component */ 27487);
/* harmony import */ var _store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/selectors/locations.selectors */ 83929);
















let TipoViajeComponent = class TipoViajeComponent {
    constructor(parentControl, store, router, route, dialog) {
        this.parentControl = parentControl;
        this.store = store;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.dataQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__.QuoteModel();
        this.dataSummary = new _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_3__.SummaryModel();
        this.destinationsSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
        this.canContinue = true;
        this.dataSummary.showSummary = false;
        this.dataSummary.dialog = false;
        this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_5__.set_data_summary({ dataSummary: this.dataSummary }));
    }
    ngOnInit() {
        this.parentForm = this.dataQuoteFormData;
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_4__.summary).subscribe((dataSummary) => { this.dataSummary = dataSummary; });
        this.destinationsSub$ = this.store.select(_store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_8__.countriesListResult).subscribe((resultSet) => {
            if (resultSet.error && !resultSet.loaded) {
                this.openDialog();
                this.canContinue = false;
            }
        });
        this.updateProgressBar();
    }
    ngAfterViewInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_components_shared_modal_error_modal_error_component__WEBPACK_IMPORTED_MODULE_7__.ModalErrorComponent, {
            data: { title: '¡Algo salió mal!', message: 'Por favor intenta nuevamente', buttonText: 'Volver a intentar' }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    goToNext(destination) {
        if (this.canContinue) {
            const nextRoute = (destination == 'internacional') ? 'paises' : 'fechas';
            this.setDestination(destination);
            this.dataSummary.destinations = destination;
            this.dataSummary.showSummary = true;
            this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_5__.set_data_summary({ dataSummary: this.dataSummary }));
            this.router.navigate(['..', destination, nextRoute], {
                relativeTo: this.route,
                queryParamsHandling: 'merge',
            });
        }
    }
    goToBack() {
    }
    setDestination(destination) {
        if ('nacional' !== destination)
            return;
        const destinationsCtrl = this.parentForm.controls.countries;
        destinationsCtrl.setValue([1]);
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataQuote');
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_6__.update_step_progress_bar({ step }));
        });
    }
};
TipoViajeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog }
];
TipoViajeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-tipo-viaje',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tipo_viaje_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewEncapsulation.None,
        styles: [_tipo_viaje_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TipoViajeComponent);



/***/ }),

/***/ 46829:
/*!**************************************************************************!*\
  !*** ./src/app/components/quote/casual/step2-paises/paises.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaisesComponent": () => (/* binding */ PaisesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paises_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./paises.component.html */ 97079);
/* harmony import */ var _paises_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paises.component.scss */ 59117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var _store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/selectors/quote.selector */ 36229);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/quote/quote.model */ 30062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 36461);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/actions/summary */ 86257);
/* harmony import */ var _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/summary/summary.model */ 88981);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions/content */ 15530);
/* harmony import */ var _store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/selectors/locations.selectors */ 83929);

















let PaisesComponent = class PaisesComponent {
    constructor(parentControl, store, router, route) {
        this.parentControl = parentControl;
        this.store = store;
        this.router = router;
        this.route = route;
        this.filteredOptions = [];
        this.countriesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl([], this.maxLengthArray(5));
        this.countriesSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
        this.countries = [];
        this.removable = true;
        this.selectable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ENTER];
        this.dataSummary = new _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_5__.SummaryModel();
    }
    ngOnInit() {
        this.countryOptions = this.countriesControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(value => typeof value === 'string' ? value : value.name), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(name => name ? this._filter(name) : this.countries.slice()));
        this.parentForm = this.dataQuoteFormData;
        this.countriesSub$ = this.store.select(_store_selectors_locations_selectors__WEBPACK_IMPORTED_MODULE_8__.countriesList).subscribe((result) => {
            this.countries = result;
            this.setDestinationsValue();
        });
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_6__.summary).subscribe((dataSummary) => { this.dataSummary = dataSummary; });
        this.store.select(_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_2__.dataQuoteSelect).subscribe((dataQuote) => { this.dataQuote = dataQuote; });
        this.updateProgressBar();
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.countries.filter(option => option.description.toLowerCase().indexOf(filterValue) === 0);
    }
    remove(dest) {
        this.filteredOptions = this.filteredOptions.filter(option => option.id != dest.id);
        this.countries.push(dest);
        this.countries = this.countries.sort((a, b) => a.description.localeCompare(b.description));
        this.countriesControl.updateValueAndValidity();
    }
    selectOption(val) {
        let item = val.option.value;
        if (item && item != undefined) {
            /**set value to chips list */
            this.filteredOptions.push(val.option.value);
            /**remove from countries list */
            this.countries = this.countries.filter(option => option.id != item.id);
            this.countriesControl.setValue('');
        }
    }
    displayFn(dest) {
        return dest ? dest.description : '';
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataQuote');
    }
    goToBack() {
        this.setDestinations();
        this.router.navigate(['../..'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        this.setDestinations();
        this.router.navigate(['..', 'fechas'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    setDestinations() {
        let countriesCtrl = this.parentForm.controls.countries;
        countriesCtrl.setValue(this.filteredOptions.map(i => i.id));
        const otraQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_3__.QuoteModel(this.dataQuote);
        this.dataQuote = this.parentForm.value;
        // this.store.dispatch(fromQuote.set_data_quote({ dataQuote: this.dataQuote }));
        //countriesCtrl.setValue(this.filteredOptions);
        this.dataSummary.countries = this.filteredOptions;
        this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_4__.set_data_summary({ dataSummary: this.dataSummary }));
        // console.log(this.filteredOptions);
    }
    setDestinationsValue() {
        let values = this.parentForm.controls.countries.value;
        if (values) {
            values.forEach((id) => {
                let index = 0;
                let result = this.countries.filter((des, i) => { index = i; return des.id == id; });
                if (result.length > 0) {
                    this.countries = this.countries.filter(option => option.id != result[0].id);
                    this.filteredOptions.push(result[0]);
                }
            });
        }
    }
    maxLengthArray(max) {
        return (c) => {
            if (this.filteredOptions.length > max)
                return { 'minLengthArray': { valid: false } };
            return null;
        };
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_7__.update_step_progress_bar({ step }));
        });
    }
};
PaisesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute }
];
PaisesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-paises',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paises_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewEncapsulation.None,
        styles: [_paises_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaisesComponent);



/***/ }),

/***/ 40045:
/*!**************************************************************************************!*\
  !*** ./src/app/components/quote/casual/step3-fechas-viaje/fechas-viaje.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FechasViajeComponent": () => (/* binding */ FechasViajeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fechas_viaje_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fechas-viaje.component.html */ 15129);
/* harmony import */ var _fechas_viaje_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fechas-viaje.component.scss */ 24378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_components_shared_calendar_header_calendar_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared/calendar-header/calendar-header.component */ 89865);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/summary/summary.model */ 88981);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/actions/summary */ 86257);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/actions/content */ 15530);
/* harmony import */ var _store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/selectors/quote.selector */ 36229);














let FechasViajeComponent = class FechasViajeComponent {
    constructor(parentControl, router, route, store) {
        this.parentControl = parentControl;
        this.router = router;
        this.route = route;
        this.store = store;
        this.customHeader = src_app_components_shared_calendar_header_calendar_header_component__WEBPACK_IMPORTED_MODULE_2__.CalendarHeaderComponent;
        this.dataSummary = new _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__.SummaryModel();
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
        });
        this.startDateMin = new Date();
        this.startDateMax = this.addDays(new Date(), 488);
        this.endDateMin = new Date();
        this.endDateMax = this.addDays(new Date(), 488);
        this.startDateClass = (cellDate, view) => {
            if (view === 'month') {
                let d = moment__WEBPACK_IMPORTED_MODULE_3__(cellDate);
                if (this.parentForm.controls.returnDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.returnDate.value);
                    if (returned.date() == d.date() && returned.month() == d.month() && returned.year() == d.year())
                        return 'selected-date-class';
                }
                if (this.parentForm.controls.returnDate.value && this.parentForm.controls.departDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.returnDate.value);
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.departDate.value);
                    if ((d.isAfter(start) && d.isBefore(returned)))
                        return 'range-date-class';
                }
            }
            return '';
        };
        this.endDateClass = (cellDate, view) => {
            if (view === 'month') {
                let d = moment__WEBPACK_IMPORTED_MODULE_3__(cellDate);
                if (this.parentForm.controls.departDate.value) {
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.departDate.value);
                    if (start.date() == d.date() && start.month() == d.month() && start.year() == d.year())
                        return 'selected-date-class';
                }
                if (this.parentForm.controls.returnDate.value && this.parentForm.controls.departDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.returnDate.value);
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.parentForm.controls.departDate.value);
                    if ((d.isAfter(start) && d.isBefore(returned)))
                        return 'range-date-class';
                }
            }
            return '';
        };
    }
    ngOnInit() {
        this.parentForm = this.dataQuoteFormData;
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__.summary).subscribe((dataSummary) => { this.dataSummary = dataSummary; });
        this.store.select(_store_selectors_quote_selector__WEBPACK_IMPORTED_MODULE_8__.dataQuoteSelect).subscribe((dataQuote) => { this.dataQuote = dataQuote; });
        this.updateProgressBar();
    }
    update() {
        this.startDate = this.parentForm.controls.departDate.value;
        this.endDate = this.parentForm.controls.returnDate.value;
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataQuote');
    }
    goToBack() {
        this.route.paramMap
            .subscribe(param => {
            const destination = param.get('destino');
            const prevRoute = (destination == 'internacional') ? '../paises' : '../..';
            this.router.navigate([prevRoute], {
                relativeTo: this.route,
                queryParamsHandling: 'merge',
            });
        });
    }
    goToNext() {
        this.dataQuote = this.parentForm.value;
        // this.store.dispatch(fromQuote.set_data_quote({dataQuote: this.dataQuote}));
        this.router.navigate(['../viajeros'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
        this.dataSummary.departDate = this.dataQuote.departDate;
        this.dataSummary.returnDate = this.dataQuote.returnDate;
        this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_6__.set_data_summary({ dataSummary: this.dataSummary }));
    }
    startDateChange(event) {
        if (event.value != null) {
            this.endDateMin = event.value;
        }
        if (event.value == null) {
            this.endDateMin = new Date();
        }
    }
    endDateChange(event) {
        if (event.value != null) {
            this.startDateMax = event.value;
        }
        if (event.value == null) {
            this.startDateMax = this.addDays(new Date(), 488);
        }
    }
    addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_7__.update_step_progress_bar({ step }));
        });
    }
};
FechasViajeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ControlContainer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store }
];
FechasViajeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-fechas-viaje',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fechas_viaje_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewEncapsulation.None,
        styles: [_fechas_viaje_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FechasViajeComponent);



/***/ }),

/***/ 84403:
/*!********************************************************************************************!*\
  !*** ./src/app/components/quote/casual/step4-numero-personas/numero-personas.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumeroPersonasComponent": () => (/* binding */ NumeroPersonasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_numero_personas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./numero-personas.component.html */ 36501);
/* harmony import */ var _numero_personas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numero-personas.component.scss */ 53348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/quote/quote.model */ 30062);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/summary/summary.model */ 88981);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/actions/summary */ 86257);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/actions/content */ 15530);













let NumeroPersonasComponent = class NumeroPersonasComponent {
    constructor(parentControl, store, router, route, fb) {
        this.parentControl = parentControl;
        this.store = store;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.sumAdults = 0;
        this.sumChildren = 0;
        this.totalPeople = 0;
        this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(2000);
        this.dataQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__.QuoteModel();
        this.errorMsgList = [];
        this.errorMessage = {
            'max': (params) => `No es posible asegurar a la persona porque supera el máximo de edad permitido para se asegurado.`,
        };
        this.dataSummary = new _models_summary_summary_model__WEBPACK_IMPORTED_MODULE_4__.SummaryModel();
    }
    ngOnInit() {
        this.parentForm = this.dataQuoteFormData;
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.summary).subscribe((dataSummary) => {
            this.dataSummary = dataSummary;
            this.sumAdults = dataSummary.adults ? dataSummary.adults.length : 0;
            this.sumChildren = dataSummary.children ? dataSummary.children.length : 0;
        });
        this.updateProgressBar();
        this.checkTotalPeople();
    }
    goToBack() {
        this.router.navigate(['../fechas'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
        this.router.navigate(['..', 'informacion-personal'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
        this.dataSummary.adults = this.personsAdultsFormData.value;
        this.dataSummary.children = this.personsChildrenFormData.value;
        this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_5__.set_data_summary({ dataSummary: this.dataSummary }));
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataQuote');
    }
    get personsAdultsFormData() {
        const parent = this.dataQuoteFormData;
        return parent.get('persons.adults');
    }
    get personsChildrenFormData() {
        const parent = this.dataQuoteFormData;
        return parent.get('persons.children');
    }
    /**
     * Adiciona un nuevo campo para colocar una nueva edad para un adulto
     */
    addNewAdult() {
        if (!this.evalMaxOfPeople()) {
            this.agesOfAdults = this.dataQuoteFormData.get('persons.adults');
            this.sumAdults = this.agesOfAdults.length + 1;
            this.agesOfAdults.push(this.createAgePerson('adults'));
            this.checkTotalPeople();
        }
        else {
            this.showWarningMsg('adults');
        }
    }
    /**
     * Elimina un campo de edad para un adulto
     */
    delAdult() {
        const ageCtrl = this.dataQuoteFormData.get('persons.adults');
        this.sumAdults = (this.agesOfAdults.length > 0) ? this.agesOfAdults.length - 1 : this.agesOfAdults.length;
        ageCtrl.removeAt(this.sumAdults);
        this.checkTotalPeople();
    }
    /**
     * Adiciona un nuevo campo para colocar una nueva edad para un menor
     */
    addNewChild() {
        if (!this.evalMaxOfPeople()) {
            this.agesOfChildren = this.dataQuoteFormData.get('persons.children');
            this.sumChildren = this.agesOfChildren.length + 1;
            this.agesOfChildren.push(this.createAgePerson('children'));
            this.checkTotalPeople();
        }
        else {
            this.showWarningMsg('children');
        }
    }
    /**
     * Elimina un campo de edad para un menor
     */
    delChild() {
        const ageCtrl = this.dataQuoteFormData.get('persons.children');
        this.sumChildren = (this.agesOfChildren.length > 0) ? this.agesOfChildren.length - 1 : this.agesOfChildren.length;
        ageCtrl.removeAt(this.sumChildren);
        this.checkTotalPeople();
    }
    /**
     * Crea un formControl para adicionar un campo para la edad recibiendo el tipo de persona
     *
     * @param person
     */
    createAgePerson(person) {
        let minAge = 0;
        let maxAge = 0;
        switch (person) {
            case "adults":
                minAge = 18;
                maxAge = 79;
                break;
            case "children":
                minAge = 0;
                maxAge = 17;
                break;
        }
        return this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(minAge),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(maxAge),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('[0-9]*'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
        ]));
    }
    /**
     * Funcion que evalua el maximo para la edad de un adulto,
     * es posible usarla para evaluar mas errores con base en errorMessage
     * @param i
     */
    showMaxError(i) {
        const ageCtrl = this.personsAdultsFormData.get([i]);
        if (!ageCtrl)
            return [];
        if (ageCtrl.errors) {
            Object.keys(ageCtrl.errors).map((error) => {
                if ('max' === error) {
                    this.showGenericMaxError = !this.showGenericMaxError;
                    this.timer$.subscribe(() => this.showGenericMaxError = !this.showGenericMaxError);
                    ageCtrl.touched || ageCtrl.dirty ?
                        this.errorMsgList.push(this.errorMessage[error](ageCtrl.getError(error))) : '';
                }
            });
            return this.errorMsgList;
        }
        else {
            return [];
        }
    }
    /**
     * Evalua la cantidad de personas ingresadas
     *
     * El maximo de personas para ingresar es 14
     */
    evalMaxOfPeople() {
        return ((this.totalPeople) === 14);
    }
    /**
     * Cuenta el total de personas ingresadas
     */
    checkTotalPeople() {
        this.totalPeople = this.sumAdults + this.sumChildren;
    }
    /**
     * Muestra el mensaje de advertencia informando que no es posible agregar mas personas al grupo
     * @param personType
     */
    showWarningMsg(personType) {
        if ((this.totalPeople) === 14) {
            switch (personType) {
                case 'adults':
                    this.isMaxAdults = !this.isMaxAdults;
                    this.timer$.subscribe(() => this.isMaxAdults = !this.isMaxAdults);
                    break;
                case 'children':
                    this.isMaxChildren = !this.isMaxChildren;
                    this.timer$.subscribe(() => this.isMaxChildren = !this.isMaxChildren);
                    break;
            }
        }
    }
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_6__.update_step_progress_bar({ step }));
        });
    }
};
NumeroPersonasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
NumeroPersonasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-numero-personas',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_numero_personas_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_numero_personas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NumeroPersonasComponent);



/***/ }),

/***/ 56046:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/casual/step1-tipo-viaje/tipo-viaje.component.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tipo-viaje column wrap\">\n\n  <h1 class=\"title--bigger\">¿Qué tipo de viaje harás?</h1>\n\n  <p class=\"paragraph paragraph__normal tipo-viaje__remember\">\n    <img class=\"align-img\" src=\"assets/images/idea.png\" />\n    Recuerda que el origen de tu viaje siempre deberá ser México.</p>\n\n  <div class=\"tipo-viaje__buttons\">\n    <button type=\"button\" (click)=\"goToNext('nacional')\" class=\"btn-big-square \">\n    <div class=\"btn-big-square__img btn-big-square__img--nacional mask\">\n    </div>\n      <span>Nacional</span>\n      <!--      Nacional-->\n    </button>\n\n    <button type=\"button\" (click)=\"goToNext('internacional')\" class=\"btn-big-square \">\n      <div class=\"btn-big-square btn-big-square__img btn-big-square__img--internacional mask\">\n      </div>\n      <span>Internacional</span>    </button>\n  </div>\n\n  <div class=\"btn-container\">\n    <!--  -->\n    <a [routerLink]=\"['/']\" class=\"link link__citi__nav link__citi__nav--back\">\n      Regresar\n    </a>\n  </div>\n\n  <div class=\"tipo-viaje__leyend mt-4\">\n    <p>La cobertura nacional inicia a partir de los 150 km de distancia a partir de tu lugar de residencia.</p>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ 97079:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/casual/step2-paises/paises.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"paises column wrap\">\n  <div class=\"row wrap paises__container\">\n    <div class=\"content-section\">\n      <h1 class=\"title--bigger\">¿A qué países viajarás?</h1>\n\n      <p class=\"paragraph paragraph__normal paises__remember\">\n        <img class=\"align-img\" src=\"assets/images/idea.png\" />\n        Ingresa todos los países que vas a visitar para calcular tu cotización.\n      </p>\n\n      <div class=\"paises__content mt-4\">\n        <form [formGroup]=\"parentForm\" class=\"\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Ingresa los destinos</mat-label>\n            <input type=\"text\"\n                   aria-label=\"Ingresa los destinos\"\n                   matInput\n                   [formControl]=\"countriesControl\"\n                   [matAutocomplete]=\"auto\"> <!--[matAutocompleteDisabled]=\"filteredOptions.length >= 5\"-->\n            <img class=\"dropdown-icon\" src=\"assets/images/chevron-down.svg\" />\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)='selectOption($event)'>\n              <mat-option *ngFor=\"let option of countryOptions | async\" [value]=\"option\">\n                {{option.description}}\n              </mat-option>\n            </mat-autocomplete>\n            <mat-error *ngIf=\"filteredOptions.length > 5\">Elige hasta 5 países</mat-error>\n          </mat-form-field>\n          <mat-chip-list #chipList aria-label=\"Destination selection\">\n            <mat-chip *ngFor=\"let dest of filteredOptions\"\n              [selectable]=\"selectable\"\n              [removable]=\"removable\"\n              (removed)=\"remove(dest)\">\n              {{dest.description}}\n              <mat-icon matChipRemove class=\"close-icon\" *ngIf=\"removable\">close</mat-icon>\n            </mat-chip>\n          </mat-chip-list>\n        </form>\n      </div>\n\n      <div class=\"navigation row wrap paises__navigation pt-5\">\n        <p class=\"coverages-mov pt-3\">No ofrecemos cobertura para los siguientes destinos: Cuba, Sudán, Irak, Irán, Corea del Norte, Siria, República Democrática del Congo, Región de Crimea o Sebastopol y Afganistán.</p>\n\n        <!-- Bottom page buttons -->\n        <div class=\"btn-container pt-3\">\n          <!-- Return to Cotizar Online page -->\n          <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n            Regresar\n          </a>\n        </div>\n\n        <!-- Continue To Brands -->\n        <div class=\"btn-container\">\n          <button id=\"continue2\" type=\"button\" (click)=\"goToNext()\" [disabled]=\"filteredOptions.length == 0 || filteredOptions.length > 5\" class=\"btn btn-text btn--primary\">\n            Continuar\n          </button>\n        </div>\n\n        <p class=\"coverages pt-5\">No ofrecemos cobertura para los siguientes destinos: Cuba, Sudán, Irak, Irán, Corea del Norte, Siria, República Democrática del Congo, Región de Crimea o Sebastopol y Afganistán.</p>\n      </div>\n\n    </div>\n<!--    <div class=\"resume-section\">-->\n<!--      &lt;!&ndash;resume section&ndash;&gt;-->\n<!--&lt;!&ndash;      <app-summary></app-summary>&ndash;&gt;-->\n<!--    </div>-->\n  </div>\n</div>\n");

/***/ }),

/***/ 15129:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/casual/step3-fechas-viaje/fechas-viaje.component.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dates column wrap\">\n  <div class=\"row wrap dates__container\">\n    <div class=\"content-section\">\n      <h1 class=\"title--bigger\">¿Cuándo inicia y acaba tu viaje?</h1>\n\n      <p class=\"paragraph paragraph__normal dates__remember\">\n        <img class=\"align-img\" src=\"assets/images/idea.png\" />\n        Recuerda que el seguro cubre hasta un máximo de 90 días.\n      </p>\n\n      <div class=\"dates__content mt-4\">\n        <form [formGroup]=\"parentForm\">\n          <mat-form-field class=\"dates__width-50 dates__pr pt-3\">\n            <mat-label>Inicio</mat-label>\n            <input matInput class=\"date\"\n              [matDatepicker]=\"startDate\"\n              formControlName=\"departDate\"\n              [min]=\"startDateMin\"\n              [max]=\"startDateMax\"\n              (dateChange)=\"startDateChange($event)\"\n              (click)=\"startDate.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\">\n              <mat-icon matDatepickerToggleIcon><img alt=\"edit\" class=\"calendar-icon\" src=\"assets/images/calendar-icon.svg\" /></mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #startDate [dateClass]=\"startDateClass\" [calendarHeaderComponent]=\"customHeader\"></mat-datepicker>\n          </mat-form-field>\n\n          <mat-form-field class=\"dates__width-50 dates__pl pt-3\">\n            <mat-label>Regreso</mat-label>\n            <input matInput class=\"date\"\n              [matDatepicker]=\"endDate\"\n              formControlName=\"returnDate\"\n              [min]=\"endDateMin\"\n              [max]=\"endDateMax\"\n              (dateChange)=\"endDateChange($event)\"\n              (click)=\"endDate.open()\">\n            <mat-datepicker-toggle matSuffix [for]=\"endDate\">\n              <mat-icon matDatepickerToggleIcon><img alt=\"edit\" class=\"calendar-icon\" src=\"assets/images/calendar-icon.svg\" /></mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #endDate [dateClass]=\"endDateClass\" [calendarHeaderComponent]=\"customHeader\"></mat-datepicker>\n          </mat-form-field>\n        </form>\n      </div>\n\n      <div class=\"navigation row wrap dates__navigation pt-5\">\n        <!-- Bottom page buttons -->\n        <div class=\"btn-container pt-3\">\n          <!-- Return to Cotizar Online page -->\n          <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n            Regresar\n          </a>\n        </div>\n        <!-- Continue To Brands -->\n        <div class=\"btn-container\">\n          <button id=\"continue2\" type=\"button\" [disabled]=\"this.parentForm.controls.departDate.status == 'INVALID' || this.parentForm.controls.returnDate.status == 'INVALID'\" (click)=\"goToNext()\" class=\"btn btn-text btn--primary\">\n            Continuar\n          </button>\n        </div>\n      </div>\n    </div>\n\n\n<!--    <div class=\"resume-section\">-->\n<!--      &lt;!&ndash;resume section&ndash;&gt;-->\n<!--      <app-summary></app-summary>-->\n<!--    </div>-->\n  </div>\n</div>\n");

/***/ }),

/***/ 36501:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/casual/step4-numero-personas/numero-personas.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"persons\">\n\n\n  <!-- Persons section -->\n  <section class=\"persons__wrapper column wrap\">\n\n    <!-- Persons Content -->\n    <div class=\"persons__content\">\n\n      <h1 class=\"title--bigger\">¿Cuántas personas viajan?</h1>\n\n      <p class=\"paragraph paragraph__normal persons__remember\">\n        <img class=\"align-img\" src=\"assets/images/idea.png\"/>\n        Recuerda que puedes asegurar máximo a 14 personas y que se generan pólizas individuales.\n\n      </p>\n\n      <!-- People Form-->\n      <form [formGroup]=\"parentForm\">\n\n        <!-- Adults Section-->\n        <div class=\"persons__form\">\n          <div class=\"persons__form__header\">\n\n            <div class=\"persons__form--title\">\n              Adultos\n            </div>\n\n            <div class=\"persons__form--buttons\">\n\n              <button class=\"btn-amount\" (click)=\"delAdult()\">\n                <div class=\"btn-amount btn-amount--minus btn-amount--mask\"></div>\n              </button>\n\n              <div class=\"persons__form--text\">\n                {{sumAdults}}\n              </div>\n\n              <button class=\"btn-amount\" (click)=\"addNewAdult()\">\n                <div class=\"btn-amount btn-amount--plus btn-amount--mask\"></div>\n              </button>\n            </div>\n\n\n          </div>\n          <div formGroupName=\"persons\" class=\"persons__form__content\">\n            <p class=\"paragraph paragraph--tiny persons__form__content--max\" [hidden]=\"!isMaxAdults\">\n              Ya ingresaste el máximo de personas </p>\n\n            <p class=\"paragraph paragraph--tiny persons__form__content--max\" [hidden]=\"!showGenericMaxError\">\n              No es posible asegurar a la persona porque supera el máximo de edad permitido para se asegurado. </p>\n\n\n            <!--            ToDo: Test de mensajes de error personalizados para las validaciones. -->\n\n            <!--              <p class=\"paragraph paragraph&#45;&#45;tiny persons__form__content&#45;&#45;max\" *ngFor=\"let item of errorMsgList\">-->\n            <!--                {{ item }}-->\n            <!--              </p>-->\n\n\n            <div class=\"persons__form__inputs\" formArrayName=\"adults\"\n                 *ngFor=\"let ages of personsAdultsFormData.controls; let i = index\">\n\n\n              <ng-container>\n                <label class=\"persons__input--title\">Adulto <span\n                  class=\"persons__input--index\">{{ i + 1}}</span></label>\n                <mat-form-field class=\"persons__input--field\">\n                  <mat-label>Edad</mat-label>\n                  <input matInput numeric type=\"text\" placeholder=\"Edad\" maxlength=\"2\" inputmode=\"numeric\" pattern=\"[0-9]*\" [formControlName]=\"i\" (ngModelChange)=\"showMaxError(i)\" >\n                </mat-form-field>\n              </ng-container>\n\n            </div>\n          </div>\n        </div>\n        <!-- ./adults_cection-->\n\n        <!-- Children Section -->\n        <div class=\"persons__form\">\n          <div class=\"persons__form__header\">\n\n            <div class=\"persons__form--title\">\n              Menores <span class=\"paragraph--light\">(0 - 17 años)</span>\n            </div>\n\n            <div class=\"persons__form--buttons\">\n\n              <button class=\"btn-amount\" (click)=\"delChild()\">\n                <div class=\"btn-amount btn-amount--minus btn-amount--mask\"></div>\n              </button>\n\n              <div class=\"persons__form--text\">\n                {{sumChildren}}\n              </div>\n\n              <button class=\"btn-amount\" (click)=\"addNewChild()\">\n                <div class=\"btn-amount btn-amount--plus btn-amount--mask\"></div>\n              </button>\n            </div>\n\n\n          </div>\n          <div formGroupName=\"persons\" class=\"persons__form__content\">\n            <p class=\"paragraph paragraph--tiny persons__form__content--max\" [hidden]=\"!isMaxChildren\">Ya ingresaste el\n              máximo de personas </p>\n\n            <div class=\"persons__form__inputs\" formArrayName=\"children\"\n                 *ngFor=\"let ages of personsChildrenFormData.controls; let i = index\">\n\n\n              <ng-container>\n\n                <label class=\"persons__input--title\">Menor <span\n                  class=\"persons__input--index\">{{ i + 1 }}</span></label>\n\n                <mat-form-field class=\"persons__input--field\">\n                  <mat-label>Edad</mat-label>\n                  <input matInput numeric type=\"text\" placeholder=\"Edad\" maxlength=\"2\" inputmode=\"numeric\" pattern=\"[0-9]*\" [formControlName]=\"i\">\n                </mat-form-field>\n              </ng-container>\n\n            </div>\n          </div>\n        </div>\n        <!-- ./children_section -->\n      </form>\n      <!--./people_form-->\n    </div>\n    <!-- ./persons_content -->\n\n\n    <!--  Navigation Section-->\n    <div class=\"navigation persons__navigation pt-5\">\n      <!-- Bottom page buttons -->\n      <div class=\"btn-container pt-3\">\n        <!-- Return to Cotizar Online page -->\n        <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n          Regresar\n        </a>\n      </div>\n\n      <!-- Continue To Brands -->\n      <div class=\"btn-container\">\n        <button id=\"continue2\" type=\"button\" (click)=\"goToNext()\" class=\"btn btn-text btn--primary\"\n                [disabled]=\" totalPeople == 0 || dataQuoteFormData.invalid \">\n          Continuar\n        </button>\n      </div>\n<!--      dataQuoteFormData.invalid &&-->\n    </div>\n    <!--./navigation_section-->\n\n  </section>\n  <!-- ./persons_section -->\n\n  <!-- Summary Section -->\n<!--  <section class=\"summary\">-->\n<!--    <app-summary></app-summary>-->\n<!--  </section>-->\n  <!-- ./summary-section -->\n\n</section>\n");

/***/ }),

/***/ 91775:
/*!************************************************************************************!*\
  !*** ./src/app/components/quote/casual/step1-tipo-viaje/tipo-viaje.component.scss ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.tipo-viaje {\n  padding: 0 7rem;\n}\n\n.tipo-viaje .paragraph-img {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  color: var(--color-text-gray-h1);\n}\n\n.tipo-viaje .paragraph-img::before {\n  content: \"\";\n  display: inline-block;\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-left: -3rem;\n  vertical-align: center;\n  text-align: center;\n  margin-right: 1rem;\n  background-color: var(--color-text-gray-h1);\n  -webkit-mask-image: url('/seguro-de-viaje/idea.735bb102731eabe34810.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/idea.735bb102731eabe34810.svg');\n  mask-size: cover;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .tipo-viaje {\n    padding: 0;\n  }\n}\n\n.tipo-viaje__buttons {\n  display: flex;\n  justify-content: center;\n  grid-gap: 5rem;\n  gap: 5rem;\n  padding: 6rem 0;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .tipo-viaje__buttons {\n    grid-gap: 1.5rem;\n    gap: 1.5rem;\n  }\n}\n\n.tipo-viaje__remember {\n  display: flex;\n}\n\n.tipo-viaje__remember img {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 1rem;\n}\n\n.tipo-viaje .btn-big-square {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.tipo-viaje .btn-big-square:hover {\n  color: var(--color-border-btn);\n  cursor: pointer;\n}\n\n.tipo-viaje .btn-big-square:hover .mask {\n  background-color: var(--color-border-btn);\n}\n\n.tipo-viaje .btn-big-square__img {\n  margin-bottom: 1.7rem;\n}\n\n.tipo-viaje .btn-big-square__img--nacional {\n  height: 3.285rem;\n  width: 4.4rem;\n  background-color: var(--color-text-gray-h1);\n  -webkit-mask-image: url('/seguro-de-viaje/mexico.6cdd5d5da092e3c697f5.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/mexico.6cdd5d5da092e3c697f5.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.tipo-viaje .btn-big-square__img--nacional:hover {\n  background-color: var(--color-border-btn);\n}\n\n.tipo-viaje .btn-big-square__img--internacional {\n  height: 4.26rem;\n  width: 4.26rem;\n  background-color: var(--color-text-gray-h1);\n  -webkit-mask-image: url('/seguro-de-viaje/extranjero.c3601c83b7064e8f3008.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/extranjero.c3601c83b7064e8f3008.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.tipo-viaje .btn-big-square__img--internacional:hover {\n  background-color: var(--color-border-btn);\n}\n\n.tipo-viaje__leyend {\n  font-weight: 300;\n  font-size: 1.4rem;\n  line-height: 1.8rem;\n  color: var(--color-black);\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .tipo-viaje .btn-container {\n    justify-content: left;\n  }\n}\n\na {\n  color: var(--color-white);\n  text-decoration: none;\n}";

/***/ }),

/***/ 59117:
/*!****************************************************************************!*\
  !*** ./src/app/components/quote/casual/step2-paises/paises.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n.paises__content {\n  min-height: 30rem;\n  width: 70%;\n}\n\n.paises__navigation {\n  width: 80%;\n}\n\n.paises__remember {\n  display: flex;\n}\n\n.paises__remember img {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 1rem;\n}\n\n.paises .coverages {\n  font-size: 1.2rem;\n  color: var(--color-text-gray-h1);\n  line-height: 1.4rem;\n}\n\n.paises .coverages-mov {\n  display: none;\n}\n\n.paises .resume-section {\n  flex: 1 0;\n}\n\n.paises .content-section {\n  flex: 2 0;\n}\n\n.paises .dropdown-icon {\n  position: absolute;\n  right: 0.1rem;\n  bottom: 0.8rem;\n  color: var(--color-btn-blue);\n  font-size: 3rem;\n  width: 2rem;\n  height: 1rem;\n  cursor: pointer;\n}\n\n.paises .close-icon {\n  color: var(--color-btn-blue) !important;\n  font-size: 2rem !important;\n  opacity: 0.7 !important;\n}\n\n.paises .close-icon:hover {\n  opacity: 1 !important;\n}\n\n.paises .mat-chip-list-wrapper {\n  padding-top: 1.6rem;\n}\n\n@media only screen and (max-width: 75em) {\n  .paises .resume-section {\n    flex: 1 0;\n  }\n  .paises .content-section {\n    flex: 2 0;\n  }\n  .paises__content {\n    min-height: 30rem;\n    width: 70%;\n  }\n  .paises__navigation {\n    width: 80%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .paises .resume-section {\n    flex: 1 0;\n    display: none;\n  }\n  .paises .content-section {\n    flex: 1 0 100%;\n  }\n  .paises__content {\n    min-height: 30rem;\n    width: 90%;\n  }\n  .paises__navigation {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .paises .resume-section {\n    flex: 1 0;\n    display: none;\n  }\n  .paises .content-section {\n    flex: 1 0 100%;\n  }\n  .paises .coverages-mov {\n    display: flex;\n  }\n  .paises .coverages {\n    display: none;\n  }\n  .paises__content {\n    min-height: 25rem;\n    width: 100%;\n  }\n  .paises__navigation {\n    width: 100%;\n  }\n}\n\n.mat-option.mat-active,\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n  background-color: var(--color-gray-light);\n}\n\n.mat-autocomplete-panel.mat-autocomplete-visible {\n  max-height: 20rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .mat-autocomplete-panel.mat-autocomplete-visible {\n    max-height: 24rem;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .mat-autocomplete-panel.mat-autocomplete-visible {\n    max-height: 24rem;\n  }\n}";

/***/ }),

/***/ 24378:
/*!****************************************************************************************!*\
  !*** ./src/app/components/quote/casual/step3-fechas-viaje/fechas-viaje.component.scss ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*margin*/\n\n.m-1 {\n  margin: 0.4rem;\n}\n\n.m-2 {\n  margin: 0.8rem;\n}\n\n.m-3 {\n  margin: 1.6rem;\n}\n\n.m-4 {\n  margin: 2.4rem;\n}\n\n.m-5 {\n  margin: 4.8rem;\n}\n\n.mt-1 {\n  margin-top: 0.4rem;\n}\n\n.mt-2 {\n  margin-top: 0.8rem;\n}\n\n.mt-3 {\n  margin-top: 1.6rem;\n}\n\n.mt-4 {\n  margin-top: 2.4rem;\n}\n\n.mt-5 {\n  margin-top: 4.8rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.8rem;\n}\n\n.mb-3 {\n  margin-bottom: 1.6rem;\n}\n\n.mb-4 {\n  margin-bottom: 2.4rem;\n}\n\n.mb-5 {\n  margin-bottom: 4.8rem;\n}\n\n.ml-1 {\n  margin-left: 0.4rem;\n}\n\n.ml-2 {\n  margin-left: 0.8rem;\n}\n\n.ml-3 {\n  margin-left: 1.6rem;\n}\n\n.ml-4 {\n  margin-left: 2.4rem;\n}\n\n.ml-5 {\n  margin-left: 4.8rem;\n}\n\n.mr-1 {\n  margin-right: 0.4rem;\n}\n\n.mr-2 {\n  margin-right: 0.8rem;\n}\n\n.mr-3 {\n  margin-right: 1.6rem;\n}\n\n.mr-4 {\n  margin-right: 2.4rem;\n}\n\n.mr-5 {\n  margin-right: 4.8rem;\n}\n\n/*padding*/\n\n.p-1 {\n  padding: 0.4rem;\n}\n\n.p-2 {\n  padding: 0.8rem;\n}\n\n.p-3 {\n  padding: 1.6rem;\n}\n\n.p-4 {\n  padding: 2.4rem;\n}\n\n.p-5 {\n  padding: 4.8rem;\n}\n\n.pt-1 {\n  padding-top: 0.4rem;\n}\n\n.pt-2 {\n  padding-top: 0.8rem;\n}\n\n.pt-3 {\n  padding-top: 1.6rem;\n}\n\n.pt-4 {\n  padding-top: 2.4rem;\n}\n\n.pt-5 {\n  padding-top: 4.8rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.8rem;\n}\n\n.pb-3 {\n  padding-bottom: 1.6rem;\n}\n\n.pb-4 {\n  padding-bottom: 2.4rem;\n}\n\n.pb-5 {\n  padding-bottom: 4.8rem;\n}\n\n.pl-1 {\n  padding-left: 0.4rem;\n}\n\n.pl-2 {\n  padding-left: 0.8rem;\n}\n\n.pl-3 {\n  padding-left: 1.6rem;\n}\n\n.pl-4 {\n  padding-left: 2.4rem;\n}\n\n.pl-5 {\n  padding-left: 4.8rem;\n}\n\n.pr-1 {\n  padding-right: 0.4rem;\n}\n\n.pr-2 {\n  padding-right: 0.8rem;\n}\n\n.pr-3 {\n  padding-right: 1.6rem;\n}\n\n.pr-4 {\n  padding-right: 2.4rem;\n}\n\n.pr-5 {\n  padding-right: 4.8rem;\n}\n\n.dates__container {\n  justify-content: space-evenly;\n}\n\n.dates__content {\n  min-height: 42rem;\n  width: 70%;\n}\n\n.dates__navigation {\n  width: 80%;\n}\n\n.dates__width-50 {\n  width: 50%;\n}\n\n.dates__pr {\n  padding-right: 0.8rem;\n}\n\n.dates__pl {\n  padding-left: 0.8rem;\n}\n\n.dates__remember {\n  display: flex;\n}\n\n.dates__remember img {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 1rem;\n}\n\n.dates .resume-section {\n  flex: 1 0;\n}\n\n.dates .content-section {\n  flex: 2 0;\n}\n\n.dates .mat-form-field-suffix {\n  position: absolute;\n  bottom: 2.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dates .mat-form-field-suffix {\n    bottom: 3rem;\n  }\n}\n\n.dates .mat-form-field-appearance-legacy .mat-form-field-infix {\n  margin-left: 3.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dates .mat-form-field-appearance-legacy .mat-form-field-infix {\n    margin-left: 4rem;\n  }\n}\n\n.dates .mat-button-wrapper {\n  color: var(--color-btn-blue);\n  font-size: 2.2rem !important;\n}\n\n.dates .mat-button-wrapper .calendar-icon {\n  width: 2.1rem;\n  height: 2.1rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dates .mat-button-wrapper .calendar-icon {\n    width: 2.6rem;\n    height: 2.6rem;\n  }\n}\n\n.dates .mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.8em;\n}\n\n.dates .date {\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 75em) {\n  .dates .resume-section {\n    flex: 1 0;\n  }\n  .dates .content-section {\n    flex: 2 0;\n  }\n  .dates__content {\n    min-height: 41rem;\n    width: 70%;\n  }\n  .dates__navigation {\n    width: 80%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .dates .resume-section {\n    flex: 1 0;\n    display: none;\n  }\n  .dates .content-section {\n    flex: 1 0 100%;\n  }\n  .dates__content {\n    min-height: 45rem;\n    width: 90%;\n  }\n  .dates__navigation {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dates .resume-section {\n    flex: 1 0;\n    display: none;\n  }\n  .dates .content-section {\n    flex: 1 0 100%;\n  }\n  .dates__content {\n    min-height: 15rem;\n    width: 100%;\n  }\n  .dates__navigation {\n    width: 100%;\n  }\n  .dates__width-50 {\n    width: 100%;\n  }\n  .dates__pr {\n    padding-right: 0;\n  }\n  .dates__pl {\n    padding-left: 0;\n  }\n}\n\n.mat-datepicker-content .mat-calendar {\n  height: 32.2rem !important;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .mat-datepicker-content .mat-calendar {\n    height: inherit !important;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  .mat-datepicker-content .mat-calendar {\n    height: inherit !important;\n  }\n}\n\n@media only screen and (max-width: 75em) {\n  .mat-datepicker-content .mat-calendar {\n    height: 39rem !important;\n  }\n}";

/***/ }),

/***/ 53348:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/quote/casual/step4-numero-personas/numero-personas.component.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n.persons {\n  display: flex;\n}\n\n.persons__wrapper {\n  flex: 2 0;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .persons__wrapper {\n    flex: 1 0;\n  }\n}\n\n.persons__content {\n  width: 43.8rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .persons__content {\n    width: 100%;\n  }\n}\n\n.persons__navigation {\n  width: 80%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .persons__navigation {\n    width: 90%;\n  }\n}\n\n.persons .summary {\n  flex: 1 0;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .persons .summary {\n    display: none;\n  }\n}\n\n.persons__form {\n  margin: 2rem 0 1rem 0;\n}\n\n.persons__form__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5rem;\n  padding: 0 1rem 0 2rem;\n  background-color: var(--color-gray-light);\n  border-radius: 4px;\n}\n\n.persons__form__content {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1.9rem;\n}\n\n.persons__form__content--max {\n  font-family: Interstate-Light;\n  align-self: flex-end;\n}\n\n.persons__form__content--max:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.7rem;\n  width: 1.7rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-red);\n  -webkit-mask-image: url('/seguro-de-viaje/exclamation-o.6da4662cc7029b651e17.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/exclamation-o.6da4662cc7029b651e17.svg');\n  mask-size: cover;\n}\n\n.persons__form--title {\n  flex: 2;\n}\n\n.persons__form--text {\n  color: var(--color-text-gray-h1);\n  font-size: 2.2rem;\n  font-family: Interstate-Light;\n}\n\n.persons__form--buttons {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.persons__form__inputs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.persons__input--title {\n  font-family: Interstate-Light;\n  font-size: 1.8rem;\n  padding-right: 2.3rem;\n}\n\n.persons__input--field {\n  width: 5.5rem;\n}\n\n.persons__remember {\n  display: flex;\n}\n\n.persons__remember img {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 1rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .summary {\n    display: none;\n    visibility: hidden;\n  }\n}";

/***/ })

}]);