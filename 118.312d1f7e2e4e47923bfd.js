"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[118],{

/***/ 3601:
/*!*********************************************************************!*\
  !*** ./src/app/components/quote/edit-quote/edit-quote.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditQuoteComponent": () => (/* binding */ EditQuoteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_quote_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-quote.component.html */ 49450);
/* harmony import */ var _edit_quote_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-quote.component.scss */ 84789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/selectors */ 13654);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_calendar_header_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/calendar-header/calendar-header.component */ 89865);
/* harmony import */ var src_app_models_summary_summary_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/summary/summary.model */ 88981);
/* harmony import */ var _store_actions_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/actions/summary */ 86257);














let EditQuoteComponent = class EditQuoteComponent {
    constructor(parentControl, store, router, route, fb) {
        this.parentControl = parentControl;
        this.store = store;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.filteredOptions = [];
        this.countriesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl([], this.maxLengthArray(5));
        this.countries = [];
        this.selectable = true;
        this.removable = true;
        this.countriesSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
        this.destinations = '';
        this.customHeader = _shared_calendar_header_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        });
        this.startDateMin = new Date();
        this.startDateMax = this.addDays(new Date(), 488);
        this.endDateMin = new Date();
        this.endDateMax = this.addDays(new Date(), 488);
        this.sumAdults = 0;
        this.sumChildren = 0;
        this.totalPeople = 0;
        this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(2000);
        this.errorMsgList = [];
        this.errorMessage = {
            'max': (params) => `No es posible asegurar a la persona porque supera el máximo de edad permitido para se asegurado.`
        };
        this.dataSummary = new src_app_models_summary_summary_model__WEBPACK_IMPORTED_MODULE_5__.SummaryModel();
        this.startDateClass = (cellDate, view) => {
            if (view === 'month') {
                let d = moment__WEBPACK_IMPORTED_MODULE_3__(cellDate);
                if (this.quoteData.controls.returnDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.returnDate.value);
                    if (returned.date() == d.date() && returned.month() == d.month() && returned.year() == d.year())
                        return 'selected-date-class';
                }
                if (this.quoteData.controls.returnDate.value && this.quoteData.controls.departDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.returnDate.value);
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.departDate.value);
                    if ((d.isAfter(start) && d.isBefore(returned)))
                        return 'range-date-class';
                }
            }
            return '';
        };
        this.endDateClass = (cellDate, view) => {
            if (view === 'month') {
                let d = moment__WEBPACK_IMPORTED_MODULE_3__(cellDate);
                if (this.quoteData.controls.departDate.value) {
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.departDate.value);
                    if (start.date() == d.date() && start.month() == d.month() && start.year() == d.year())
                        return 'selected-date-class';
                }
                if (this.quoteData.controls.returnDate.value && this.quoteData.controls.departDate.value) {
                    let returned = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.returnDate.value);
                    let start = moment__WEBPACK_IMPORTED_MODULE_3__(this.quoteData.controls.departDate.value);
                    if ((d.isAfter(start) && d.isBefore(returned)))
                        return 'range-date-class';
                }
            }
            return '';
        };
    }
    ngOnInit() {
        this.quoteData = this.dataQuoteFormData;
        this.userData = this.userInfoDataFormData;
        this.insuredData = this.insuredDataFormData;
        this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_2__.dataQuoteSelect).subscribe(data => {
            var _a, _b;
            this.initialDestination = data.destination;
            this.quoteDataResult = data;
            this.sumAdults = ((_a = data.persons) === null || _a === void 0 ? void 0 : _a.adults) ? data.persons.adults.length : 0;
            this.sumChildren = ((_b = data.persons) === null || _b === void 0 ? void 0 : _b.children) ? data.persons.children.length : 0;
            this.loadData();
        });
        this.countryOptions = this.countriesControl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(value => typeof value === 'string' ? value : value.name), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(name => name ? this._filter(name) : this.countries.slice()));
        this.countriesSub$ = this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_2__.countriesList).subscribe((result) => {
            this.filteredOptions = [];
            this.countries = result;
            this.setCountriesValue();
        });
        this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_2__.summary).subscribe((dataSummary) => {
            this.dataSummary = dataSummary;
            this.destinations = this.dataSummary.destinations;
        });
        this.store.select(src_app_store_selectors__WEBPACK_IMPORTED_MODULE_2__.userInfoSelect).subscribe(data => {
            var _a, _b, _c, _d;
            if (data) {
                (_a = this.userData.get('cellPhone')) === null || _a === void 0 ? void 0 : _a.setValue(data.cellPhone);
                (_b = this.userData.get('email')) === null || _b === void 0 ? void 0 : _b.setValue(data.email);
                (_c = this.userData.get('terms')) === null || _c === void 0 ? void 0 : _c.setValue(true);
                (_d = this.userData.get('insuredData.firstName')) === null || _d === void 0 ? void 0 : _d.setValue(data.insuredData.firstName);
            }
        });
    }
    setDestination(dest) {
        if (this.destinations != dest) {
            const destinationsCtrl = this.quoteData.controls.countries;
            if ('nacional' !== dest) {
                this.filteredOptions.forEach(x => {
                    this.remove(x);
                });
                this.filteredOptions = [];
                destinationsCtrl.setValue([]);
                return;
            }
            destinationsCtrl.setValue([1]);
            this.destinations = dest;
        }
    }
    selectOption(val) {
        let item = val.option.value;
        if (item && item != undefined) {
            /**set value to chips list */
            this.filteredOptions = Object.assign([], this.filteredOptions);
            this.filteredOptions.push(val.option.value);
            /**remove from countries list */
            this.countries = this.countries.filter(option => option.id != item.id);
            this.countriesControl.setValue('');
            this.countriesControl.updateValueAndValidity();
            this.setCountries();
        }
    }
    displayFn(dest) {
        return dest ? dest.description : '';
    }
    remove(dest) {
        this.filteredOptions = this.filteredOptions.filter(option => option.id != dest.id);
        this.countries.push(dest);
        this.countries = this.countries.sort((a, b) => a.description.localeCompare(b.description));
        this.countriesControl.updateValueAndValidity();
        this.setCountries();
    }
    setCountries() {
        var _a;
        (_a = this.quoteData.get('countries')) === null || _a === void 0 ? void 0 : _a.setValue(this.filteredOptions.map(i => i.id));
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
        return this.fb.control([], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(minAge),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(maxAge),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('[0-9]*'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required
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
    validateForm() {
        var _a, _b;
        if (this.quoteData.valid && this.userData.valid) {
            if (this.quoteDataResult.destination == 'internacional' && (this.filteredOptions.length == 0 || this.filteredOptions.length > 5))
                return true;
            this.dataSummary.destinations = this.quoteDataResult.destination;
            this.dataSummary.adults = this.personsAdultsFormData.value;
            this.dataSummary.children = this.personsChildrenFormData.value;
            this.dataSummary.countries = this.filteredOptions;
            this.dataSummary.departDate = (_a = this.quoteData.get('departDate')) === null || _a === void 0 ? void 0 : _a.value;
            this.dataSummary.returnDate = (_b = this.quoteData.get('returnDate')) === null || _b === void 0 ? void 0 : _b.value;
            this.store.dispatch(_store_actions_summary__WEBPACK_IMPORTED_MODULE_6__.set_data_summary({ dataSummary: this.dataSummary }));
            return false;
        }
        return true;
    }
    addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
    maxLengthArray(max) {
        return (c) => {
            if (this.filteredOptions.length > max)
                return { 'minLengthArray': { valid: false } };
            return null;
        };
    }
    setCountriesValue() {
        let values = this.quoteData.controls.countries.value;
        if (values) {
            values.forEach((id) => {
                let result = this.countries.filter((des) => { return des.id == id; });
                if (result.length > 0) {
                    this.countries = this.countries.filter(option => option.id != result[0].id);
                    this.filteredOptions.push(result[0]);
                }
            });
        }
    }
    loadData() {
        var _a, _b, _c, _d, _e, _f, _g;
        (_a = this.quoteData.get('countries')) === null || _a === void 0 ? void 0 : _a.setValue(this.quoteDataResult.countries);
        (_b = this.quoteData.get('departDate')) === null || _b === void 0 ? void 0 : _b.setValue(this.quoteDataResult.departDate);
        (_c = this.quoteData.get('returnDate')) === null || _c === void 0 ? void 0 : _c.setValue(this.quoteDataResult.returnDate);
        if ((_d = this.quoteDataResult.persons) === null || _d === void 0 ? void 0 : _d.adults) {
            this.agesOfAdults = this.dataQuoteFormData.get('persons.adults');
            (_e = this.quoteDataResult.persons) === null || _e === void 0 ? void 0 : _e.adults.forEach(x => {
                let p = this.createAgePerson('adults');
                p.setValue(x);
                this.agesOfAdults.push(p);
            });
        }
        if ((_f = this.quoteDataResult.persons) === null || _f === void 0 ? void 0 : _f.children) {
            this.agesOfChildren = this.dataQuoteFormData.get('persons.children');
            (_g = this.quoteDataResult.persons) === null || _g === void 0 ? void 0 : _g.children.forEach(x => {
                let p = this.createAgePerson('children');
                p.setValue(x);
                this.agesOfChildren.push(p);
            });
        }
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.countries.filter(option => option.description.toLowerCase().indexOf(filterValue) === 0);
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('dataQuote');
    }
    get insuredDataFormData() {
        return this.userData.get('insuredData');
    }
    get userInfoDataFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('userInfo');
    }
    get personsAdultsFormData() {
        const parent = this.dataQuoteFormData;
        return parent.get('persons.adults');
    }
    get personsChildrenFormData() {
        const parent = this.dataQuoteFormData;
        return parent.get('persons.children');
    }
};
EditQuoteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder }
];
EditQuoteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-edit-quote',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_quote_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewEncapsulation.None,
        styles: [_edit_quote_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditQuoteComponent);



/***/ }),

/***/ 69363:
/*!*****************************************************!*\
  !*** ./src/app/components/quote/quote.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteComponent": () => (/* binding */ QuoteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quote_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quote.component.html */ 51969);
/* harmony import */ var _quote_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.component.scss */ 22745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _store_actions_quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/quote */ 23712);
/* harmony import */ var _store_actions_locations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/locations */ 60642);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/quote/quote.model */ 30062);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors/summary.selectors */ 46285);
/* harmony import */ var _services_citi_validators_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/citi-validators.service */ 47483);
/* harmony import */ var _models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/quote/user-info.model */ 26553);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22238);














let QuoteComponent = class QuoteComponent {
    constructor(store, fb, router, route, citiValidators, dialog) {
        this.store = store;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.citiValidators = citiValidators;
        this.dialog = dialog;
        // dataQuote: Quote = new QuoteModel();
        this.productProgress = {
            items: [],
            totalItemsCount: 8,
        };
        this.showSumm = false;
        this.showMobileSum = false;
        this.showProgressBar = true;
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_locations__WEBPACK_IMPORTED_MODULE_3__.load_countries());
        this.createQuoteForm();
        this.store.select(_store_selectors_summary_selectors__WEBPACK_IMPORTED_MODULE_5__.summary).subscribe((dataSummary) => {
            this.dataSummary = dataSummary;
            this.dataSummary.dialog = false;
            this.dataSummary.mobile = false;
            this.dataSummary.step = 'quote';
        });
    }
    componentAdded(event) {
        if (this.dataSummary)
            this.showSumm = this.dataSummary.showSummary;
        if (event) {
            this.showMobileSum = event.constructor.name == "TipoViajeComponent" || event.constructor.name == "EditQuoteComponent" ? false : true;
            this.showProgressBar = event.constructor.name == "EditQuoteComponent" ? false : true;
        }
    }
    onSubmit() {
        var _a, _b;
        const dataQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_4__.QuoteModel((_a = this.quoteForm) === null || _a === void 0 ? void 0 : _a.controls['dataQuote'].value);
        const userInfo = new _models_quote_user_info_model__WEBPACK_IMPORTED_MODULE_7__.UserInfoModel((_b = this.quoteForm) === null || _b === void 0 ? void 0 : _b.controls['userInfo'].value);
        dataQuote.destination = this.dataSummary.destinations;
        // ToDo: REvisar el caso de viajero habitual, habra que modificar el action para setearlo en el componente de products
        const tipo = { isSingleTrip: true };
        dataQuote.isSingleTrip = tipo.isSingleTrip;
        this.store.dispatch(_store_actions_quote__WEBPACK_IMPORTED_MODULE_2__.set_data_quote({ dataQuote }));
        this.store.dispatch(_store_actions_quote__WEBPACK_IMPORTED_MODULE_2__.load_plans({ quote: dataQuote }));
        this.store.dispatch(_store_actions_quote__WEBPACK_IMPORTED_MODULE_2__.set_user_info({ userInfo }));
        this.store.dispatch(_store_actions_quote__WEBPACK_IMPORTED_MODULE_2__.load_coverages({ destination: this.dataSummary.destinations }));
        this.router.navigate([this.dataSummary.destinations, 'planes'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    createQuoteForm() {
        this.quoteForm = this.fb.group({
            dataQuote: this.fb.group({
                countries: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                departDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                returnDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                // persons: new FormArray([])
                persons: this.fb.group({
                    adults: this.fb.array([]),
                    children: this.fb.array([]),
                })
            }),
            userInfo: this.fb.group({
                insuredData: this.fb.group({
                    firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-ZÀ-ÿ\-\' -]+')
                        ])],
                }),
                cellPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                    ])],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                        this.citiValidators.email
                    ])],
                terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue])]
            })
        });
    }
    resume() {
        this.dataSummary.dialog = false;
        this.dataSummary.mobile = true;
        this.router.navigate(['resumen'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
};
QuoteComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_citi_validators_service__WEBPACK_IMPORTED_MODULE_6__.CitiValidatorsService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog }
];
QuoteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-quote',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quote_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quote_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuoteComponent);



/***/ }),

/***/ 34118:
/*!**************************************************!*\
  !*** ./src/app/components/quote/quote.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteModule": () => (/* binding */ QuoteModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.component */ 69363);
/* harmony import */ var _quote_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.routing */ 53213);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4065);
/* harmony import */ var _tus_datos_tus_datos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tus-datos/tus-datos.component */ 79735);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_reducers_quote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/quote */ 34637);
/* harmony import */ var _store_reducers_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/locations */ 52513);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/directives.module */ 78434);
/* harmony import */ var _store_effects_locations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/effects/locations */ 69796);
/* harmony import */ var _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-quote/edit-quote.component */ 3601);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);















let QuoteModule = class QuoteModule {
};
QuoteModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _quote_component__WEBPACK_IMPORTED_MODULE_0__.QuoteComponent,
            _tus_datos_tus_datos_component__WEBPACK_IMPORTED_MODULE_3__.TusDatosComponent,
            _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_8__.EditQuoteComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forFeature([_store_effects_locations__WEBPACK_IMPORTED_MODULE_7__.CountriesEffects]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forFeature(_store_reducers_locations__WEBPACK_IMPORTED_MODULE_5__.countriesFeatureKey, _store_reducers_locations__WEBPACK_IMPORTED_MODULE_5__.countriesReducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forFeature(_store_reducers_quote__WEBPACK_IMPORTED_MODULE_4__.dataQuoteFeatureKey, _store_reducers_quote__WEBPACK_IMPORTED_MODULE_4__.dataQuoteReducer),
            _quote_routing__WEBPACK_IMPORTED_MODULE_1__.QuoteRouting,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule
        ],
        providers: []
    })
], QuoteModule);



/***/ }),

/***/ 53213:
/*!***************************************************!*\
  !*** ./src/app/components/quote/quote.routing.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteRouting": () => (/* binding */ QuoteRouting)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.component */ 69363);
/* harmony import */ var _tus_datos_tus_datos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tus-datos/tus-datos.component */ 79735);
/* harmony import */ var _shared_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/summary/summary.component */ 28567);
/* harmony import */ var _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-quote/edit-quote.component */ 3601);







const ROUTES_QUOTE = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _quote_component__WEBPACK_IMPORTED_MODULE_0__.QuoteComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(592), __webpack_require__.e(204)]).then(__webpack_require__.bind(__webpack_require__, /*! ./casual/casual.module */ 90204)).then(m => m.CasualModule)
            },
            // {
            //   path: '',
            //   loadChildren: () => import('./casual/habitual.module').then( m => m.CasualModule)
            // },
            {
                path: ':destino/informacion-personal',
                component: _tus_datos_tus_datos_component__WEBPACK_IMPORTED_MODULE_1__.TusDatosComponent,
                data: {
                    currentStep: 5
                }
            },
            {
                path: ':destino/editar-cotizacion',
                component: _edit_quote_edit_quote_component__WEBPACK_IMPORTED_MODULE_3__.EditQuoteComponent,
                data: {}
            },
            {
                path: 'resumen',
                component: _shared_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent
            }
        ]
    },
    {
        path: ':destino/planes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(592), __webpack_require__.e(408)]).then(__webpack_require__.bind(__webpack_require__, /*! ../plans/plans.module */ 20408)).then(m => m.PlansModule)
    }
];
let QuoteRouting = class QuoteRouting {
};
QuoteRouting = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(ROUTES_QUOTE)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        providers: []
    })
], QuoteRouting);



/***/ }),

/***/ 79735:
/*!*******************************************************************!*\
  !*** ./src/app/components/quote/tus-datos/tus-datos.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TusDatosComponent": () => (/* binding */ TusDatosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tus_datos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tus-datos.component.html */ 50458);
/* harmony import */ var _tus_datos_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tus-datos.component.scss */ 94795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/quote/quote.model */ 30062);
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/content */ 15530);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _directives_mask_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/mask.utils */ 85460);










let TusDatosComponent = class TusDatosComponent {
    constructor(parentControl, store, router, route) {
        this.parentControl = parentControl;
        this.store = store;
        this.router = router;
        this.route = route;
        this.dataQuote = new _models_quote_quote_model__WEBPACK_IMPORTED_MODULE_2__.QuoteModel();
        this.phoneMask = _directives_mask_utils__WEBPACK_IMPORTED_MODULE_4__.phoneMask;
    }
    ngOnInit() {
        this.parentForm = this.dataQuoteFormData;
        this.updateProgressBar();
    }
    goToBack() {
        this.router.navigate(['../viajeros'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    goToNext() {
    }
    get dataQuoteFormData() {
        var _a, _b;
        return (_b = (_a = this.parentControl) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.get('userInfo');
    }
    get insuredDataFormData() {
        const parentForm = this.dataQuoteFormData;
        return parentForm.get('insuredData');
    }
    autocompleteEmail(event) {
        var _a;
        const value = (_a = this.dataQuoteFormData.get('email')) === null || _a === void 0 ? void 0 : _a.value;
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
    updateProgressBar() {
        this.route.data.subscribe(data => {
            const step = data.currentStep;
            this.store.dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_3__.update_step_progress_bar({ step }));
        });
    }
    getPhoneHint(phone) {
        const value = phone.replace(/\D+/g, '');
        return `${value.length || 0}/10`;
    }
};
TusDatosComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ControlContainer },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
TusDatosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tus-datos',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tus_datos_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tus_datos_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TusDatosComponent);



/***/ }),

/***/ 49450:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/edit-quote/edit-quote.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"edit-quote\">\n  <div class=\"edit-quote__title\">\n    COTIZADOR VIAJE PROTEGIDO CBNX\n  </div>\n  <div class=\"edit-quote__subtitle pt-3\">\n    Edita tus datos para cotizar nuevamente\n  </div>\n\n  <div class=\"edit-quote__box mt-4\" *ngIf=\"initialDestination != 'internacional'\">\n    <div class=\"edit-quote__box__title\">\n      <span>¿Qué tipo de viaje harás?</span>\n    </div>\n    <div class=\"edit-quote__box__controls\">\n      <div class=\"edit-quote__box__controls__trip\">\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"quoteDataResult.destination\">\n          <mat-radio-button (click)=\"setDestination('nacional')\" [value]=\"'nacional'\"><div class=\"edit-quote__box__controls__trip--mask mask national\"></div><div class=\"radio-text\">Nacional</div></mat-radio-button>\n          <mat-radio-button (click)=\"setDestination('internacional')\" [value]=\"'internacional'\"><div class=\"edit-quote__box__controls__trip--mask mask international\"></div><div class=\"radio-text\">Internacional</div></mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <hr class=\"edit-quote__box__line mt-4\" />\n    </div>\n  </div>\n\n  <div class=\"edit-quote__box mt-4\" *ngIf=\"quoteDataResult.destination == 'internacional'\">\n    <div class=\"edit-quote__box__title\">\n      <span>¿A qué países viajarás?</span>\n    </div>\n    <div class=\"edit-quote__box__controls\">\n      <div class=\"edit-quote__box__controls__destinations\">\n        <mat-form-field class=\"edit-quote__box__controls__destinations__select\">\n          <mat-label>Ingresa los destinos</mat-label>\n          <input type=\"text\"\n                 aria-label=\"Ingresa los destinos\"\n                 matInput\n                 [formControl]=\"countriesControl\"\n                 [matAutocomplete]=\"auto\">\n          <img class=\"dropdown-icon\" src=\"assets/images/chevron-down.svg\" />\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" [displayWith]=\"displayFn\" (optionSelected)='selectOption($event)'>\n            <mat-option *ngFor=\"let option of countryOptions | async\" [value]=\"option\">\n              {{option.description}}\n            </mat-option>\n          </mat-autocomplete>\n          <mat-error *ngIf=\"filteredOptions.length > 5\">Elige hasta 5 países</mat-error>\n        </mat-form-field>\n        <mat-chip-list #chipList aria-label=\"Destination selection\" class=\"edit-quote__box__controls__destinations__chips\">\n          <mat-chip *ngFor=\"let dest of filteredOptions\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"remove(dest)\">\n            {{dest.description}}\n            <mat-icon matChipRemove class=\"close-icon\" *ngIf=\"removable\">close</mat-icon>\n          </mat-chip>\n        </mat-chip-list>\n      </div>\n\n      <hr class=\"edit-quote__box__line mt-4\" />\n    </div>\n  </div>\n\n  <div class=\"edit-quote__box mt-4\">\n    <div class=\"edit-quote__box__title\">\n      <span>¿Cuándo inicia y acaba tu viaje?</span>\n    </div>\n    <div class=\"edit-quote__box__controls\">\n      <form [formGroup]=\"quoteData\">\n        <mat-form-field class=\"edit-quote__box__controls__dates edit-quote__box__controls__pr dates\">\n          <mat-label>Inicio</mat-label>\n          <input matInput class=\"date\"\n            [matDatepicker]=\"startDate\"\n            formControlName=\"departDate\"\n            [min]=\"startDateMin\"\n            [max]=\"startDateMax\"\n            (dateChange)=\"startDateChange($event)\"\n            (click)=\"startDate.open()\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDate\">\n            <mat-icon matDatepickerToggleIcon><img alt=\"edit\" class=\"calendar-icon\" src=\"assets/images/calendar-2-icon.svg\" /></mat-icon>\n          </mat-datepicker-toggle>\n          <mat-datepicker #startDate [dateClass]=\"startDateClass\" [calendarHeaderComponent]=\"customHeader\"></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"edit-quote__box__controls__dates edit-quote__box__controls__pl dates\">\n          <mat-label>Regreso</mat-label>\n          <input matInput class=\"date\"\n            [matDatepicker]=\"endDate\"\n            formControlName=\"returnDate\"\n            [min]=\"endDateMin\"\n            [max]=\"endDateMax\"\n            (dateChange)=\"endDateChange($event)\"\n            (click)=\"endDate.open()\">\n          <mat-datepicker-toggle matSuffix [for]=\"endDate\">\n            <mat-icon matDatepickerToggleIcon><img alt=\"edit\" class=\"calendar-icon\" src=\"assets/images/calendar-2-icon.svg\" /></mat-icon>\n          </mat-datepicker-toggle>\n          <mat-datepicker #endDate [dateClass]=\"endDateClass\" [calendarHeaderComponent]=\"customHeader\"></mat-datepicker>\n        </mat-form-field>\n      </form>\n\n      <hr class=\"edit-quote__box__line mt-4\" />\n    </div>\n  </div>\n\n  <div class=\"edit-quote__box mt-4\">\n    <div class=\"edit-quote__box__title\">\n      <span>¿Cuántas personas viajan?</span>\n    </div>\n    <div class=\"edit-quote__box__controls\">\n      <form [formGroup]=\"quoteData\">\n        <!-- Adults Section-->\n        <div class=\"edit-quote__box__controls__dates edit-quote__box__controls__pr\">\n          <div class=\"edit-quote__box__controls__persons__header\">\n            <div class=\"edit-quote__box__controls__persons__header__title\">\n              Adultos\n            </div>\n\n            <div class=\"edit-quote__box__controls__persons__header__buttons\">\n              <button class=\"btn-amount\" (click)=\"delAdult()\">\n                <div class=\"btn-amount btn-amount--minus btn-amount--mask\"></div>\n              </button>\n              <div class=\"edit-quote__box__controls__persons__header__buttons__text\">\n                {{sumAdults}}\n              </div>\n              <button class=\"btn-amount\" (click)=\"addNewAdult()\">\n                <div class=\"btn-amount btn-amount--plus btn-amount--mask\"></div>\n              </button>\n            </div>\n          </div>\n          <div formGroupName=\"persons\" class=\"edit-quote__box__controls__persons__content\">\n            <p class=\"paragraph paragraph--tiny edit-quote__box__controls__persons__content--max\" [hidden]=\"!isMaxAdults\">Ya ingresaste el máximo de personas </p>\n\n            <p class=\"paragraph paragraph--tiny edit-quote__box__controls__persons__content--max\" [hidden]=\"!showGenericMaxError\">\n              No es posible asegurar a la persona porque supera el máximo de edad permitido para se asegurado.\n            </p>\n\n            <div class=\"edit-quote__box__controls__persons__content__inputs\" formArrayName=\"adults\" *ngFor=\"let ages of personsAdultsFormData.controls; let i = index\">\n              <ng-container>\n                <label class=\"edit-quote__box__controls__persons__content__input--title\">Adulto <span class=\"edit-quote__box__controls__persons__content__input--index\">{{ i + 1}}</span></label>\n                <mat-form-field class=\"edit-quote__box__controls__persons__content__input--field\">\n                  <mat-label>Edad</mat-label>\n                  <input matInput numeric type=\"text\" placeholder=\"Edad\" maxlength=\"2\" inputmode=\"numeric\" pattern=\"[0-9]*\" [formControlName]=\"i\" (ngModelChange)=\"showMaxError(i)\" >\n                </mat-form-field>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n        <!-- ./adults_cection-->\n        <!-- Children Section-->\n        <div class=\"edit-quote__box__controls__dates edit-quote__box__controls__pr\">\n          <div class=\"edit-quote__box__controls__persons__header\">\n            <div class=\"edit-quote__box__controls__persons__header__title\">\n              Menores <span class=\"paragraph--light\">(0 - 17 años)</span>\n            </div>\n\n            <div class=\"edit-quote__box__controls__persons__header__buttons\">\n              <button class=\"btn-amount\" (click)=\"delChild()\">\n                <div class=\"btn-amount btn-amount--minus btn-amount--mask\"></div>\n              </button>\n              <div class=\"edit-quote__box__controls__persons__header__buttons__text\">\n                {{sumChildren}}\n              </div>\n              <button class=\"btn-amount\" (click)=\"addNewChild()\">\n                <div class=\"btn-amount btn-amount--plus btn-amount--mask\"></div>\n              </button>\n            </div>\n          </div>\n          <div formGroupName=\"persons\" class=\"edit-quote__box__controls__persons__content\">\n            <p class=\"paragraph paragraph--tiny edit-quote__box__controls__persons__content--max\" [hidden]=\"!isMaxChildren\">Ya ingresaste el máximo de personas </p>\n\n            <div class=\"edit-quote__box__controls__persons__content__inputs\" formArrayName=\"children\" *ngFor=\"let ages of personsChildrenFormData.controls; let i = index\">\n              <ng-container>\n                <label class=\"edit-quote__box__controls__persons__content__input--title\">Menor <span class=\"edit-quote__box__controls__persons__content__input--index\">{{ i + 1}}</span></label>\n                <mat-form-field class=\"edit-quote__box__controls__persons__content__input--field\">\n                  <mat-label>Edad</mat-label>\n                  <input matInput numeric type=\"text\" placeholder=\"Edad\" maxlength=\"2\" inputmode=\"numeric\" pattern=\"[0-9]*\" [formControlName]=\"i\" (ngModelChange)=\"showMaxError(i)\" >\n                </mat-form-field>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n        <!-- ./children_section -->\n      </form>\n    </div>\n  </div>\n\n  <div class=\"edit-quote__button mt-5 text-center\">\n    <button type=\"submit\" [disabled]=\"validateForm()\" class=\"btn btn-text btn--primary\">\n      Volver a cotizar\n    </button>\n  </div>\n</section>\n\n");

/***/ }),

/***/ 51969:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/quote.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container class=\"quote\">\n\n  <div class=\"quote__row row-max column\">\n\n    <section class=\"quote__progress-bar\" *ngIf=\"!dataSummary?.mobile && showProgressBar\">\n      <app-progress-bar></app-progress-bar>\n    </section>\n\n    <div class=\"summary-detail-mobile\" *ngIf=\"!dataSummary?.mobile && showMobileSum\">\n      <a (click)=\"resume()\" class=\"link link__citi__nav link__citi__nav--forward\">Resumen </a>\n    </div>\n\n    <section class=\"quote__content\" [ngStyle]=\"{ 'display': showSumm ? 'flex': 'inline-block' }\">\n\n      <form class=\"quote__form\" novalidate  [style.flex]=\"showSumm ? '2 0': ''\" [formGroup]=\"quoteForm\" (ngSubmit)=\"onSubmit()\">\n        <router-outlet (activate)=\"componentAdded($event)\" [formGroup]=\"quoteForm\"></router-outlet>\n      </form>\n<!--      <div>-->\n<!--        {{ quoteForm?.value | json }}-->\n<!--      </div>-->\n\n\n      <!-- Test Summary -->\n      <ng-container *ngIf=\"showSumm\">\n<!--        <span>component</span>-->\n        <div class=\"summary-container\">\n          <app-summary [style.flex]=\"showSumm ? '1 0': ''\" ></app-summary>\n        </div>\n\n      </ng-container>\n\n    </section>\n\n    <section *ngIf=\"!dataSummary?.mobile\">\n      <app-footer-dubs></app-footer-dubs>\n    </section>\n  </div>\n\n</ng-container>\n");

/***/ }),

/***/ 50458:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/quote/tus-datos/tus-datos.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"customer\">\n\n  <section class=\"customer__wrapper column wrap\">\n    <div class=\"customer__content\">\n\n\n      <h1 class=\"title--bigger\">¿Cuáles son tus datos?</h1>\n\n      <p class=\"paragraph paragraph__normal\">\n        <img class=\"align-img\" src=\"assets/images/idea.png\"/>\n        Información exclusiva para tu cotización.\n      </p>\n\n      <div class=\"customer__content\">\n\n        <form [formGroup]=\"parentForm\" class=\"customer__form\">\n\n          <ng-container class=\"\" [formGroup]=\"insuredDataFormData\">\n            <mat-form-field class=\"customer__input__field\" >\n              <mat-label>Nombre</mat-label>\n              <input matInput formControlName=\"firstName\">\n              <mat-error *ngIf=\"insuredDataFormData.controls['firstName']?.errors?.pattern && insuredDataFormData.controls['firstName']?.touched\">\n                No se permiten números u otros caracteres especiales\n              </mat-error>\n            </mat-form-field>\n          </ng-container>\n\n          <!-- phone Field -->\n          <mat-form-field class=\"customer__input__field customer__input__field--phone\">\n            <mat-label>Teléfono</mat-label>\n\n            <input type=\"tel\" matInput #phoneInput [textMask]=\"{mask: phoneMask}\" placeholder='Teléfono celular'\n                   formControlName='cellPhone'  data-cy=\"cel\">\n            <mat-hint align=\"start\" class=\"phone-hint\">{{getPhoneHint(phoneInput.value)}}</mat-hint>\n          </mat-form-field>\n          <!-- ./phone_field -->\n\n          <!-- Email Field -->\n          <mat-form-field class=\"customer__input__field\">\n            <mat-label>Correo Electrónico</mat-label>\n\n            <input type=\"email\" matInput maxlength=\"40\" placeholder=\"Correo electrónico\" formControlName=\"email\"\n                   (ngModelChange)=\"autocompleteEmail($event)\" [matAutocomplete]=\"auto\" data-cy=\"email\" />\n            <mat-autocomplete class=\"custom-shadow-autocomplete\" #auto=\"matAutocomplete\" >\n              <mat-option *ngFor=\"let item of emailList\" [value]=\"item\" appAutocompleteEmail [emailValue]=\"item\">\n                {{ item }}\n              </mat-option>\n            </mat-autocomplete>\n            <mat-error *ngIf=\"dataQuoteFormData.controls['email']?.errors?.email && dataQuoteFormData.controls['email']?.touched\">\n              Por favor ingresa un correo electrónico válido\n            </mat-error>\n          </mat-form-field>\n          <!-- ./email_field -->\n\n\n          <!-- Agree Field -->\n          <mat-checkbox class=\"customer__input__checkbox\" formControlName=\"terms\">\n<!--            <div class=\"customer__input__checkbox&#45;&#45;text\">-->\n<!--            <p class=\"paragraph paragraph__normal\">-->\n            Acepto\n            el <a class=\"link link__citi link__citi--blue\"  target=\"_blank\" > Aviso de Privacidad </a> y los\n            <a class=\"link link__citi link__citi--blue\"\n               target=\"_blank\" > T&eacute;rminos, Exclusiones y Condiciones Generales </a>.\n<!--            </p>-->\n<!--            </div>-->\n          </mat-checkbox>\n          <!-- ./agree_field -->\n\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"navigation customer__navigation pt-5\">\n\n      <!-- Bottom page buttons -->\n      <div class=\"btn-container pt-3\">\n        <!-- Return to Cotizar Online page -->\n\n        <a routerLink=\"\" (click)=\"goToBack()\" class=\"link link__citi__nav link__citi__nav--back\">\n          Regresar\n        </a>\n\n      </div>\n\n      <!-- Continue To Brands -->\n      <div class=\"btn-container\">\n        <button type=\"submit\" class=\"btn btn-text btn--primary\" [disabled]=\"!parentForm.valid\">\n          Cotizar\n        </button>\n      </div>\n    </div>\n\n    <div class=\"customer__leyend mt-5\">\n      <p>Tus datos personales son recabados y protegidos por CHUBB, consulta su aviso de privacidad</p>\n    </div>\n\n  </section>\n\n<!--  <section class=\"summary\">-->\n<!--    <app-summary></app-summary>-->\n<!--  </section>-->\n\n</section>\n\n");

/***/ }),

/***/ 84789:
/*!***********************************************************************!*\
  !*** ./src/app/components/quote/edit-quote/edit-quote.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n.edit-quote__title {\n  font-size: 2rem;\n  line-height: 2.2rem;\n  text-align: center;\n  letter-spacing: 0.5rem;\n  color: var(--color-text-gray-h2);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__title {\n    font-size: 1.6rem;\n    line-height: 1.8rem;\n    letter-spacing: 0.4rem;\n  }\n}\n\n.edit-quote__subtitle {\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  text-align: center;\n  color: var(--color-text-gray-h1);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__subtitle {\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__subtitle {\n    font-size: 2rem;\n    line-height: 2.4rem;\n  }\n}\n\n.edit-quote__box {\n  border: solid 0.2rem var(--color-gray-light-4);\n  box-sizing: border-box;\n  border-radius: 0.8rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box {\n    border-radius: 0.4rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box {\n    border: none;\n    margin-top: 1rem;\n  }\n}\n\n.edit-quote__box__title {\n  width: 30%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__title {\n    width: 100%;\n  }\n}\n\n.edit-quote__box__title span {\n  font-size: 1.8rem;\n  line-height: 2.2rem;\n  color: var(--color-text-gray-h1);\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  height: 100%;\n  align-items: center;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__title span {\n    margin-top: 1rem;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__title span {\n    font-size: 2rem;\n  }\n}\n\n.edit-quote__box__controls {\n  width: 70%;\n  padding: 2rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls {\n    width: 100%;\n    padding-top: 1rem;\n  }\n}\n\n.edit-quote__box__controls form {\n  display: flex;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls form {\n    flex-wrap: wrap;\n    padding-top: 2rem;\n  }\n}\n\n.edit-quote__box__controls__destinations {\n  width: 100%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls__destinations {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__destinations {\n    width: 100%;\n  }\n}\n\n.edit-quote__box__controls__destinations__select {\n  width: 75%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls__destinations__select {\n    width: 60%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__destinations__select {\n    width: 100%;\n  }\n}\n\n.edit-quote__box__controls__destinations__chips {\n  width: 100%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls__destinations__chips {\n    width: 60%;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__destinations__chips {\n    width: 100%;\n  }\n}\n\n.edit-quote__box__controls__destinations__chips .mat-chip-list-wrapper {\n  padding-top: 1.5rem;\n}\n\n.edit-quote__box__controls__dates {\n  width: 50%;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__dates {\n    width: 100%;\n  }\n}\n\n.edit-quote__box__controls__pr {\n  padding-right: 0.8rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__pr {\n    padding-right: 0;\n  }\n}\n\n.edit-quote__box__controls__pl {\n  padding-left: 0.8rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__controls__pl {\n    padding-left: 0;\n  }\n}\n\n.edit-quote__box__controls__persons__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5rem;\n  padding: 0 1rem 0 2rem;\n  background-color: var(--color-gray-light);\n  border-radius: 4px;\n}\n\n.edit-quote__box__controls__persons__header__title {\n  flex: 2;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls__persons__header__title span {\n    display: block;\n  }\n}\n\n.edit-quote__box__controls__persons__header__buttons {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.edit-quote__box__controls__persons__header__text {\n  color: var(--color-text-gray-h1);\n  font-size: 2.2rem;\n  font-family: Interstate-Light;\n}\n\n.edit-quote__box__controls__persons__content {\n  display: flex;\n  flex-direction: column;\n  padding-top: 1.9rem;\n}\n\n.edit-quote__box__controls__persons__content--max {\n  font-family: Interstate-Light;\n  align-self: flex-end;\n}\n\n.edit-quote__box__controls__persons__content--max:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.7rem;\n  width: 1.7rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-red);\n  -webkit-mask-image: url('/seguro-de-viaje/exclamation-o.6da4662cc7029b651e17.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/exclamation-o.6da4662cc7029b651e17.svg');\n  mask-size: cover;\n}\n\n.edit-quote__box__controls__persons__content__inputs {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.edit-quote__box__controls__persons__content__input--title {\n  font-family: Interstate-Light;\n  font-size: 1.8rem;\n  padding-right: 2.3rem;\n}\n\n.edit-quote__box__controls__persons__content__input--field {\n  width: 5.5rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .edit-quote__box__controls__trip {\n    display: flex;\n    justify-content: center;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n\n.edit-quote__box__controls__trip--mask {\n  height: 3.285rem;\n  width: 4.4rem;\n  background-color: var(--color-text-gray-h1);\n  -webkit-mask-size: cover;\n          mask-size: cover;\n  -webkit-mask-position: center;\n          mask-position: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.edit-quote__box__controls__trip--mask:hover {\n  background-color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .national {\n  -webkit-mask-image: url('/seguro-de-viaje/mexico.6cdd5d5da092e3c697f5.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/mexico.6cdd5d5da092e3c697f5.svg');\n}\n\n.edit-quote__box__controls__trip .international {\n  height: 4.26rem;\n  width: 4.26rem;\n  -webkit-mask-image: url('/seguro-de-viaje/extranjero.c3601c83b7064e8f3008.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/extranjero.c3601c83b7064e8f3008.svg');\n}\n\n.edit-quote__box__controls__trip .mat-radio-container {\n  display: none;\n}\n\n.edit-quote__box__controls__trip .mat-radio-button {\n  margin-right: 2rem;\n  background: var(--color-white);\n  box-shadow: 0px 3px 6px rgba(130, 167, 217, 0.32);\n  border-radius: 0.4rem;\n}\n\n.edit-quote__box__controls__trip .mat-radio-button .opt-selected {\n  display: none;\n}\n\n.edit-quote__box__controls__trip .mat-radio-label {\n  width: 12.5rem;\n  height: 11.4rem;\n  display: table-cell;\n  text-align: center;\n  font-size: 1.4rem;\n  line-height: 1.6rem;\n  color: var(--color-gray-dark-5);\n}\n\n.edit-quote__box__controls__trip .radio-text {\n  font-size: 1.6rem;\n  line-height: 1.9rem;\n  color: var(--color-black-1);\n  padding-top: 1rem;\n}\n\n.edit-quote__box__controls__trip .mat-radio-button.mat-radio-checked,\n.edit-quote__box__controls__trip .mat-radio-button:focus {\n  border: solid 0.15rem var(--color-border-btn);\n  box-sizing: border-box;\n  color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button.mat-radio-checked .radio-text,\n.edit-quote__box__controls__trip .mat-radio-button:focus .radio-text {\n  color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button.mat-radio-checked .mask,\n.edit-quote__box__controls__trip .mat-radio-button:focus .mask {\n  background-color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button:hover {\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button:hover .radio-text {\n  color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button:hover .mask {\n  background-color: var(--color-border-btn);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button:active {\n  background: var(--color-light-blue);\n}\n\n.edit-quote__box__controls__trip .mat-radio-button:active .mask {\n  background-color: var(--color-border-btn);\n}\n\n.edit-quote__box__line {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote__box__line {\n    display: block;\n    border: none;\n    border-bottom: 0.2rem solid var(--color-gray-light);\n  }\n}\n\n.edit-quote .dropdown-icon {\n  position: absolute;\n  right: 0.1rem;\n  bottom: 0.8rem;\n  color: var(--color-btn-blue);\n  font-size: 3rem;\n  width: 2rem;\n  height: 1rem;\n  cursor: pointer;\n}\n\n.edit-quote .close-icon {\n  color: var(--color-btn-blue) !important;\n  font-size: 2rem !important;\n  opacity: 0.7 !important;\n}\n\n.edit-quote .close-icon:hover {\n  opacity: 1 !important;\n}\n\n.edit-quote .date {\n  text-transform: capitalize;\n}\n\n.edit-quote .mat-button-wrapper {\n  color: var(--color-btn-blue);\n  font-size: 2.2rem !important;\n}\n\n.edit-quote .mat-button-wrapper .calendar-icon {\n  width: 2.1rem;\n  height: 2.1rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote .mat-button-wrapper .calendar-icon {\n    width: 2.6rem;\n    height: 2.6rem;\n  }\n}\n\n.edit-quote .mat-form-field-suffix {\n  position: absolute;\n  bottom: 2.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote .mat-form-field-suffix {\n    bottom: 3rem;\n  }\n}\n\n.edit-quote .dates.mat-form-field-appearance-legacy .mat-form-field-infix {\n  margin-left: 4.5rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .edit-quote .dates.mat-form-field-appearance-legacy .mat-form-field-infix {\n    margin-left: 4rem;\n  }\n}";

/***/ }),

/***/ 22745:
/*!*******************************************************!*\
  !*** ./src/app/components/quote/quote.component.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n@media only screen and (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n\n@media only screen and (max-width: 56.25em) {\n  html {\n    font-size: 50%;\n  }\n}\n\n@media only screen and (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n\nbody {\n  font-family: Interstate;\n  font-size: 1.6rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  body {\n    padding: 0;\n  }\n}\n\n.row {\n  display: flex;\n}\n\n.row-max {\n  display: flex;\n  max-width: 120rem;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .row-max {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n  }\n}\n\n.center {\n  justify-content: center;\n}\n\n.right {\n  justify-content: flex-end;\n}\n\n.between {\n  justify-content: space-between;\n}\n\n.around {\n  justify-content: space-around;\n}\n\n.middle {\n  align-items: center;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.top {\n  align-items: flex-start;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .navigation {\n    flex-direction: column-reverse;\n  }\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n  }\n}\n\n.link {\n  text-decoration: none;\n}\n\n.link__citi:hover {\n  text-decoration: underline;\n}\n\n.link__citi--blue {\n  color: var(--color-border-btn);\n}\n\n.link__citi--white {\n  color: var(--color-white);\n}\n\n.link__citi--black {\n  color: var(--color-black);\n}\n\n.link__citi--multi {\n  color: var(--color-black);\n}\n\n@media only screen and (max-width: 56.25em) {\n  .link__citi--multi {\n    color: var(--color-border-btn);\n  }\n}\n\n.link__citi__nav {\n  color: var(--color-main-blue-light-links);\n  font-size: 1.4rem;\n}\n\n.link__citi__nav:hover {\n  text-decoration: underline;\n}\n\n.link__citi__nav--back:before {\n  content: \"\";\n  display: inline-block;\n  height: 1.8rem;\n  width: 1.8rem;\n  vertical-align: middle;\n  text-align: center;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-left.535e33c392b6d5f169ad.svg');\n  mask-size: cover;\n}\n\n.link__citi__nav--forward:after {\n  content: \"\";\n  display: inline-block;\n  height: 1.425rem;\n  width: 0.77rem;\n  vertical-align: middle;\n  text-align: center;\n  margin-right: 1.5rem;\n  background-color: var(--color-main-blue-light-links);\n  -webkit-mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  -webkit-mask-size: cover;\n  mask-image: url('/seguro-de-viaje/chevron-right.cbe7b0bbf5f4edd6555d.svg');\n  mask-size: cover;\n}\n\n.sup,\n.sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.8em;\n  font-size: 1rem;\n}\n\n.sub {\n  top: 0.4em;\n  font-size: 1rem;\n}\n\n.align-img {\n  vertical-align: text-bottom;\n}\n\n.paragraph {\n  font-family: Interstate;\n}\n\n.paragraph__normal {\n  font-size: 1.6rem;\n  font-family: Interstate-Light;\n  line-height: 2rem;\n}\n\n.paragraph__normal--gray-dark {\n  color: var(--color-text-gray-h1);\n}\n\n.paragraph__normal--gray-light {\n  color: var(--color-text-gray-h2);\n}\n\n.paragraph--big {\n  font-size: 1.8rem;\n  font-family: Interstate-Light;\n}\n\n.paragraph--tiny {\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n}\n\n.paragraph--light {\n  font-family: Interstate-Light;\n}\n\n.paragraph--bold {\n  font-family: Interstate-Bold;\n}\n\n.title--bigger {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-family: Interstate-Light;\n}\n\n.title__sub {\n  font-family: Interstate-400;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n}\n\n.title--gray {\n  color: var(--color-text-gray-h2);\n}\n\n.full-width {\n  width: 100%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.capitalize-text {\n  text-transform: capitalize;\n}\n\n.btn, .btn:link, .btn:visited {\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  height: 4.8rem;\n  line-height: 4.8rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  color: var(--color-white);\n}\n\n.btn:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n}\n\n.btn:active, .btn:focus {\n  outline: none;\n  box-shadow: 0 0.2rem var(--color-blue-shadow);\n  background-color: var(--color-btn-active);\n}\n\n.btn--white {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n}\n\n.btn--white::after {\n  background-color: var(--color-discount);\n}\n\n.btn--primary {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  width: 26rem;\n  font-size: 1.6rem;\n  font-family: \"Interstate-Light\";\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--primary {\n    width: 100%;\n  }\n}\n\n.btn--primary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--primary:hover {\n  background-color: var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--primary:focus {\n  border: double;\n  box-shadow: none;\n}\n\n.btn--primary:disabled {\n  background-color: var(--color-light-gray-two);\n  color: var(--color-white);\n}\n\n.btn--primary:disabled:hover {\n  background-color: var(--color-light-gray-two) !important;\n  color: var(--color-white) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary {\n  background-color: var(--color-white);\n  color: var(--color-btn-blue);\n  border: 1.5px solid;\n  border-color: var(--color-btn-blue);\n  width: 26rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn--secondary {\n    width: 100%;\n  }\n}\n\n.btn--secondary::after {\n  background-color: var(--color-primary);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-dark-blue) !important;\n  border: 1.5px solid var(--color-dark-blue) !important;\n  opacity: 1 !important;\n  box-shadow: none !important;\n}\n\n.btn--secondary:focus {\n  background-color: var(--color-btn-blue);\n  color: var(--color-white);\n  border: double;\n  box-shadow: none;\n}\n\n.btn--secondary:disabled {\n  background-color: var(--color-white);\n  color: var(--color-light-gray-two);\n  border: 1.5px solid var(--color-light-gray-two) !important;\n}\n\n.btn--secondary:disabled:hover {\n  background-color: var(--color-white) !important;\n  color: var(--color-light-gray-two) !important;\n  opacity: 0.8 !important;\n  box-shadow: none !important;\n}\n\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn--animated {\n  animation: moveInBottom 0.5s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  font-family: Interstate;\n  border-color: var(--color-btn-blue);\n  color: var(--color-white);\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid var(--color-primary);\n  padding: 3px;\n}\n\n.btn-text:hover {\n  background-color: var(--color-main-blue-light-1);\n  border-color: var(--color-main-blue-light-1);\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);\n}\n\n.btn-text:active {\n  box-shadow: 0 0.5rem 1rem rgba(var(--color-discount), 0.15);\n  transform: translateY(0);\n}\n\n/**\nEstilos para los botones grandes de citi con imagenes\n */\n\n.btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n  text-decoration: none;\n  border: none;\n  background-color: var(--color-white);\n  height: 15rem;\n  width: 16.7rem;\n  left: 0;\n  top: 0;\n  border-radius: 4px;\n  box-shadow: 0px 12px 24px rgba(130, 167, 217, 0.32);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .btn-big-square, .btn-big-square:link, .btn-big-square:visited {\n    height: 15.4rem;\n    width: 14.5rem;\n  }\n}\n\n.btn-big-square:hover, .btn-big-square:link:hover, .btn-big-square:visited:hover {\n  border: 1.5px solid var(--color-border-btn);\n}\n\n/**\nEstilos botones redondos de seleccion\n */\n\n.btn-amount, .btn-amount:link, .btn-amount:visited {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 50%;\n  box-shadow: var(--shadow-btn);\n  border: none;\n  background-color: var(--color-white);\n}\n\n.btn-amount:hover {\n  background-color: var(--color-dark-blue);\n}\n\n.btn-amount:active {\n  background-color: var(--color-btn-blue);\n  border: solid 0.2rem var(--color-btn-blue);\n  box-shadow: inset 0 0 0 0.15rem var(--color-white);\n}\n\n.btn-amount:disabled {\n  background-color: var(--color-light-gray-two);\n}\n\n.btn-amount:active .btn-amount--mask, .btn-amount:disabled .btn-amount--mask, .btn-amount:hover .btn-amount--mask {\n  background-color: var(--color-white);\n}\n\n.btn-amount--plus {\n  background-color: var(--color-btn-blue);\n  width: 1.125rem;\n  height: 1.125rem;\n  -webkit-mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/plus.3847c2860cc6c4a47829.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n.btn-amount--minus {\n  background-color: var(--color-btn-blue);\n  width: 0.675rem;\n  height: 0.225rem;\n  -webkit-mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  -webkit-mask-size: cover;\n  -webkit-mask-position: center;\n  mask-image: url('/seguro-de-viaje/minus.3f58a9803c7643036f33.svg');\n  mask-size: cover;\n  mask-position: center;\n}\n\n/**\nEstilos de los anchor de Edicion\n */\n\n.edit {\n  float: right;\n  font-size: 1.4rem;\n  line-height: 3.2rem;\n  font-style: normal;\n  color: var(--color-btn-blue);\n  text-decoration: none;\n}\n\n.edit img {\n  text-align: right;\n  width: 1.3rem;\n}\n\n.edit:hover {\n  text-decoration: underline;\n}\n\n.quote {\n  background-color: var(--color-white);\n}\n\n.quote__progress-bar {\n  padding: 0 10rem;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .quote__progress-bar {\n    padding: 0;\n  }\n}\n\n.quote__content {\n  display: inline-block;\n  padding: 3rem 3rem 0rem 3rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .quote__content {\n    padding: 3rem 0;\n  }\n}\n\n.quote__content__form {\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .quote__content__form {\n    padding: 2rem;\n  }\n}\n\n.quote__content .summary-container {\n  flex: 1 0;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .quote__content .summary-container {\n    display: none;\n  }\n}\n\n.summary-detail-mobile {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .summary-detail-mobile {\n    display: flex;\n    justify-content: flex-end;\n    padding-top: 2.8rem;\n  }\n}\n\n.display-flex {\n  display: flex;\n}\n\n.display-line {\n  display: inline-block;\n}";

/***/ }),

/***/ 94795:
/*!*********************************************************************!*\
  !*** ./src/app/components/quote/tus-datos/tus-datos.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n.customer {\n  display: flex;\n}\n\n.customer__wrapper {\n  flex: 2 0;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .customer__wrapper {\n    flex: 1 0;\n  }\n}\n\n.customer__content {\n  width: 43.8rem;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .customer__content {\n    width: 100%;\n  }\n}\n\n.customer__navigation {\n  width: 80%;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .customer__navigation {\n    width: 90%;\n  }\n}\n\n.customer__leyend {\n  font-weight: 300;\n  font-size: 1.2rem;\n  line-height: 1.4rem;\n  color: var(--color-black);\n  font-family: \"Interstate-Light\";\n}\n\n.customer .summary {\n  flex: 1 0;\n}\n\n@media only screen and (max-width: 56.25em) {\n  .customer .summary {\n    display: none;\n  }\n}\n\n.customer__form {\n  display: flex;\n  flex-direction: column;\n  padding: 4.1rem 0 5rem 0;\n}\n\n.customer__input__field--phone {\n  width: 15.89rem;\n}\n\n.customer__input__field:not(:first-child) {\n  padding-top: 4rem;\n}\n\n.customer__input__checkbox {\n  padding-top: 6.5rem;\n  width: 35rem;\n  height: 2rem;\n}";

/***/ })

}]);