"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_not-found_not-found_module_ts"],{

/***/ 963:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8062:
/*!****************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"global-header-unhide\" [translucent]=\"true\">\r\n\t<ion-toolbar class=\"global-menu-toolbar\">\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 5847:
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageRoutingModule": () => (/* binding */ NotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page */ 8456);




const routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_0__.NotFoundPage
    }
];
let NotFoundPageRoutingModule = class NotFoundPageRoutingModule {
};
NotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFoundPageRoutingModule);



/***/ }),

/***/ 6470:
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageModule": () => (/* binding */ NotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 5847);
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page */ 8456);







let NotFoundPageModule = class NotFoundPageModule {
};
NotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageRoutingModule
        ],
        declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_1__.NotFoundPage]
    })
], NotFoundPageModule);



/***/ }),

/***/ 8456:
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPage": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.page.html?ngResource */ 8062);
/* harmony import */ var _not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.page.scss?ngResource */ 963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let NotFoundPage = class NotFoundPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        this.menuCtrl.enable(false, 'mainSideMenu');
    }
};
NotFoundPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
NotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-not-found',
        template: _not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundPage);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_not-found_module_ts.js.map