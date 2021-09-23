"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[592],{

/***/ 27487:
/*!************************************************************************!*\
  !*** ./src/app/components/shared/modal-error/modal-error.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalErrorComponent": () => (/* binding */ ModalErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-error.component.html */ 84525);
/* harmony import */ var _modal_error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-error.component.scss */ 96258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_models_content_shared_dialog_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/content/shared/dialog-error.model */ 75066);






let ModalErrorComponent = class ModalErrorComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    finish() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
    }
};
ModalErrorComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef },
    { type: src_app_models_content_shared_dialog_error_model__WEBPACK_IMPORTED_MODULE_2__.DialogErrorModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA,] }] }
];
ModalErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-error',
        template: _data_jenkins_workspace_workspace_latam_digital_citibanamex_web_citibanamex_travel_sit_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_error_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        styles: [_modal_error_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalErrorComponent);



/***/ }),

/***/ 85460:
/*!******************************************!*\
  !*** ./src/app/directives/mask.utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "zipCodeMask": () => (/* binding */ zipCodeMask),
/* harmony export */   "idExecutive": () => (/* binding */ idExecutive),
/* harmony export */   "homoKeyMask": () => (/* binding */ homoKeyMask)
/* harmony export */ });
const phoneMask = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
const zipCodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
const idExecutive = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
const homoKeyMask = [/\w/, /\w/, /\w/];


/***/ }),

/***/ 75066:
/*!*************************************************************!*\
  !*** ./src/app/models/content/shared/dialog-error.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogErrorModel": () => (/* binding */ DialogErrorModel)
/* harmony export */ });
class DialogErrorModel {
    constructor(obj) {
        // Object.assign(this, obj);
        this.title = obj && obj.title || '';
        this.message = obj && obj.message || '';
        this.buttonText = obj && obj.buttonText || '';
        this.linkText = obj && obj.linkText || '';
    }
}


/***/ }),

/***/ 47483:
/*!*****************************************************!*\
  !*** ./src/app/services/citi-validators.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiValidatorsService": () => (/* binding */ CitiValidatorsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);



let CitiValidatorsService = class CitiValidatorsService {
    constructor() { }
    /**
     *
     * @param control
     */
    email(control) {
        if (control.value === '') {
            return null;
        }
        const isValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(control.value.toString().toLowerCase());
        return isValid ? null : { email: true };
    }
    /**
     *
     * @param control
     */
    zipCode(control) {
        if (control.value === '') {
            return null;
        }
        const isValid = /^[0-9][0-9]{3}[0-9]$/.test(control.value.toString());
        return isValid ? null : { zipCode: true };
    }
    /**
     *
     * @param control
     */
    lettersWithHyphensAccentsAndSpaces(control) {
        if (control.value === '') {
            return null;
        }
        const isValid = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1-]*$/.test(control.value.toString());
        return isValid ? null : { letters: true };
    }
    /**
     *
     * @param control
     */
    cellPhone(control) {
        if (control.value === '') {
            return null;
        }
        const mobileNumberValue = control.value.replace(/ /g, '');
        let isIncOrDecConsecutiveDigits = false;
        let isConsecutiveSameDigits = false;
        isIncOrDecConsecutiveDigits = /01234|12345|23456|34567|45678|56789/.test(mobileNumberValue);
        isConsecutiveSameDigits = /(\d)\1{4}/.test(mobileNumberValue);
        return isConsecutiveSameDigits || isIncOrDecConsecutiveDigits
            ? { invalidCellPhone: true }
            : null;
    }
    /**
     *
     * @param control
     */
    alphanumeric(control) {
        if (control.value === '') {
            return null;
        }
        const isValid = /^[0-9a-zA-z]*$/.test(control.value.toString());
        return isValid ? null : { alphanumeric: true };
    }
    /**
     *
     * @param control
     */
    alphanumericWithSpace(control) {
        if (control.value === '') {
            return null;
        }
        const isValid = /^[ 0-9a-zA-ZÀ-ÿ\u00f1\u00d1-]*$/.test(control.value.toString());
        return isValid ? null : { alphanumericSpace: true };
    }
    minimumAge(age) {
        return (fg) => {
            var _a, _b, _c;
            let result = {};
            if (!((_a = fg.get('birthDateYear')) === null || _a === void 0 ? void 0 : _a.errors) && !((_b = fg.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.errors) && !((_c = fg.get('birthDateDay')) === null || _c === void 0 ? void 0 : _c.errors)) {
                // carefull, moment months range is from 0 to 11
                const value = fg.value;
                const date = moment__WEBPACK_IMPORTED_MODULE_0__({ year: +value.birthDateYear, month: (+value.birthDateMonth) - 1, day: +value.birthDateDay }).startOf('day');
                if (date.isValid()) {
                    const now = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day');
                    const yearsDiff = date.diff(now, 'years');
                    if (yearsDiff > -age) {
                        result = {
                            minimumAge: true
                        };
                    }
                }
                else {
                    result = {
                        birthDate: true
                    };
                }
            }
            return result;
        };
    }
    maxAge(age) {
        return (fg) => {
            var _a, _b, _c;
            let result = {};
            if (!((_a = fg.get('birthDateYear')) === null || _a === void 0 ? void 0 : _a.errors) && !((_b = fg.get('birthDateMonth')) === null || _b === void 0 ? void 0 : _b.errors) && !((_c = fg.get('birthDateDay')) === null || _c === void 0 ? void 0 : _c.errors)) {
                const value = fg.value;
                const date = moment__WEBPACK_IMPORTED_MODULE_0__({ year: +value.birthDateYear, month: (+value.birthDateMonth) - 1, day: +value.birthDateDay }).startOf('day');
                if (date.isValid()) {
                    const now = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day');
                    const yearsDiff = date.diff(now, 'years');
                    if (yearsDiff < -age) {
                        result = {
                            maxAge: true
                        };
                    }
                }
                else {
                    result = {
                        birthDate: true
                    };
                }
            }
            return result;
        };
    }
};
CitiValidatorsService.ctorParameters = () => [];
CitiValidatorsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CitiValidatorsService);



/***/ }),

/***/ 84525:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shared/modal-error/modal-error.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dialog-error flex-container\">\n  <div class=\"title-close\">\n    <img alt=\"close\" src=\"assets/images/error-close-icon.svg\" class=\"close\" (click)=\"finish()\" />\n  </div>\n  <div mat-dialog-content>\n    <div class=\"warning-icon\">\n      <img alt=\"warning\" src=\"assets/images/error-warning-icon.svg\" />\n    </div>\n    <div class=\"title-section\">\n      {{data.title}}\n    </div>\n    <div class=\"message p-2\">\n      {{data.message}}\n    </div>\n    <div class=\"text-center p-3\">\n      <button type=\"button\" (click)=\"finish()\" class=\"btn btn-text btn--primary\">\n        {{data.buttonText}}\n      </button>\n    </div>\n\n    <hr class=\"separator\" />\n    <div class=\"help-section p-2\">\n      <div class=\"normal-section\">\n        <p>¿Necesitas ayuda? <span>55 5062 3252</span></p>\n      </div>\n      <div class=\"mobile-section\">\n        <p>¿Necesitas ayuda? <a class=\"link\" href=\"tel:5550623252\"><span>55 5062 3252</span></a></p>\n      </div>\n    </div>\n  </div>\n  <div mat-dialog-actions>\n  </div>\n</div>\n");

/***/ }),

/***/ 96258:
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/modal-error/modal-error.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n/*\n0 - 600px:      Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n\n$breakpoint arguement choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n1em = 16px\n*/\n\n:root {\n  --color-main-blue: #014885;\n  --color-main-blue-light-links: #076DAE;\n  --color-main-blue-light-1: #00bcf2;\n  --color-main-blue-light-2: #3abaed;\n  --color-white: #ffffff;\n  --color-whitest-gray: #f1f1f1;\n  --color-gray-dark-1: #3e3f43;\n  --color-gray-dark-2: #454649;\n  --color-gray-light: #F2F4F8;\n  --color-border-btn: #056DAE;\n  --color-text-gray-h1: #323232;\n  --color-text-gray-h2: #8A8F99;\n  --color-btn-blue: #056dae;\n  --color-btn-active: #0062cc;\n  --color-blue-shadow: rgba(38, 143, 255, 0.5);\n  --color-light-green-1: #009933;\n  --color-light-gray-two: #ACB3BF;\n  --color-red: #D0021B;\n  --color-discount: #c6007e;\n  --color-dark-blue: #1A2E52;\n  --color-blue-opacity-30: #056DAE30;\n  --color-blue-opacity-80: #056DAEAF;\n  --color-gray-dark-3: #97999B;\n  --color-gray-dark-4: #E5E5E5;\n  --color-gray-dark-5: #5C5F66;\n  --color-gray-1: #EEEEEE;\n  --color-black-1: #292C33;\n  --color-black-2: #393939;\n  --color-black-3: #333333;\n  --color-gray-light-2: #E2E2E2;\n  --color-gray-dark-6: #53565A;\n  --color-main-blue-light-3: #00B0B9;\n  --color-gray-dark-7: #666666;\n  --color-gray-light-3: #CCCCCC;\n  --color-black: #000000;\n  --color-gray-light-4: #F5F7FC;\n  --color-light-blue: #E6F7FF;\n  --color-blue-light: #E1F4FF;\n  --shadow-1: rgba(0, 45, 114, 0.15);\n  --shadow-card-light: 0 .6rem 1.6rem var(--shadow-1);\n  --shadow-btn: 0 .3rem .8rem var(--shadow-1);\n  --line: 1px solid var(--color-gray-light);\n}\n\n.dialog-error {\n  width: 100%;\n  font-family: Interstate;\n}\n\n.dialog-error .title-close {\n  width: 100%;\n  min-height: 1.5rem;\n  text-align: right;\n}\n\n.dialog-error .title-close img {\n  margin-right: -2rem;\n  margin-top: -2rem;\n  opacity: 0.8;\n}\n\n.dialog-error .title-close:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.dialog-error .warning-icon {\n  text-align: center;\n}\n\n.dialog-error .title-section {\n  text-align: center;\n  font-style: normal;\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  color: var(--color-black-1);\n}\n\n.dialog-error .message {\n  text-align: center;\n  font-style: normal;\n  font-size: 1.6rem;\n  font-weight: 300;\n  line-height: 2.4rem;\n  color: var(--color-gray-dark-5);\n  font-family: Interstate-Light;\n}\n\n.dialog-error .separator {\n  border: none;\n  height: 0.1rem;\n  background-color: var(--color-gray-1);\n}\n\n.dialog-error .help-section .normal-section {\n  display: flex;\n}\n\n.dialog-error .help-section .mobile-section {\n  display: none;\n}\n\n.dialog-error .help-section p {\n  font-size: 1.6rem;\n  font-weight: normal;\n  line-height: 2.4rem;\n  color: var(--color-black-2);\n}\n\n.dialog-error .help-section p span {\n  font-weight: 300;\n}\n\n.dialog-error .help-section p .link {\n  text-decoration: none;\n  color: var(--color-btn-blue);\n}\n\n@media only screen and (max-width: 37.5em) {\n  .dialog-error .help-section .normal-section {\n    display: none;\n  }\n  .dialog-error .help-section .mobile-section {\n    display: flex;\n  }\n}";

/***/ })

}]);