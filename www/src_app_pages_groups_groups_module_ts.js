"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_groups_groups_module_ts"],{

/***/ 9812:
/*!**********************************************************!*\
  !*** ./src/app/pages/groups/groups.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  display: flex;\n  flex-direction: column;\n  height: 95% !important;\n  margin-bottom: 5px !important;\n}\n\nimg {\n  border-radius: 5px;\n}\n\np {\n  color: #666666;\n}\n\n.data-show {\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.progress-indicator {\n  float: right;\n}\n\n.data-progress-indicator-up {\n  font-size: 15px;\n  color: var(--ion-color-secondary);\n}\n\n.data-progress-indicator-down {\n  font-size: 15px;\n  color: var(--ion-color-danger);\n}\n\n.cynch-logo-top {\n  max-width: 150px;\n}\n\n.cynch-logo-top-print {\n  width: 120px;\n}\n\n.card-header-values {\n  font-size: 2.5rem;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  text-transform: capitalize;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 150px;\n  background-color: #F2F2F2;\n  color: #000000;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  font-size: 12px !important;\n  line-height: 1.2rem;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\nion-icon {\n  pointer-events: none;\n}\n\n@media print {\n  .printer-icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksb0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4uZGF0YS1zaG93IHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1pbmRpY2F0b3Ige1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZGF0YS1wcm9ncmVzcy1pbmRpY2F0b3ItdXAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZGF0YS1wcm9ncmVzcy1pbmRpY2F0b3ItZG93biB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuXHJcbi5jeW5jaC1sb2dvLXRvcCB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY3luY2gtbG9nby10b3AtcHJpbnQge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItdmFsdWVzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4vLyBUb29sdGlwIEJlZ2luXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIFxyXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4vLyBUb29sdGlwIEVuZFxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5wcmludGVyLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 6361:
/*!**********************************************************!*\
  !*** ./src/app/pages/groups/groups.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"global-header-hide\" [translucent]=\"true\">\r\n\t<ion-toolbar class=\"global-menu-toolbar\">\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t\t<img tappable (click)=\"setRoot('home')\" class=\"global-home-cynch-logo-icon\" src=\"../../assets/imgs/cynch_logo_icon.png\" alt=\"Cynch Security\"/>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid fixed=\"true\" class=\"ion-text-wrap\">\r\n    <h1><ion-icon name=\"albums-outline\"></ion-icon> Groups</h1>\r\n    <ion-row *ngIf=\"groupData\">\r\n      <ion-col *ngFor=\"let group of groupData\" size=\"12\" size-md=\"6\" size-lg=\"4\">\r\n        <ion-card tappable (click)=\"groupSummary(group.$key)\">\r\n\r\n          <ion-card-header>\r\n            <ion-card-subtitle><span class=\"tooltip\">{{group.name}} <ion-icon name=\"help-circle-outline\"></ion-icon>\r\n              <span class=\"tooltiptext\">Cyber Fitness of {{group.name}} businesses.</span>\r\n            </span>\r\n              <span class=\"progress-indicator\">\r\n                {{group.current_status.businesses}} businesses\r\n              </span>\r\n            </ion-card-subtitle>\r\n            <ion-card-title class=\"card-header-values\" *ngIf=\"group?.current_status?.overall\">{{(group.current_status.overall*100) | number: '1.0-0'}}%</ion-card-title>\r\n            <ion-card-title *ngIf=\"group?.current_status?.overall.length === 0\">0%</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-progress-bar color=\"secondary\" [value]=\"(group?.current_status?.overall)?group.current_status.overall:0\" [type]=\"group?.current_status?.overall?'determinate':'indeterminate'\"></ion-progress-bar>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"groupData&&groupData.length===0\">\r\n        <p> No groups available</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!groupData\">\r\n      <ion-col *ngFor=\"let i of [].constructor(3)\">\r\n        <ion-card>\r\n          <ion-item class=\"ion-margin-end\">\r\n            <ion-thumbnail slot=\"start\" class=\"ion-margin-end\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-thumbnail>\r\n            <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\r\n          </ion-item>\r\n          <ion-card-content>\r\n            <ion-skeleton-text animated style=\"width: 100%;\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 90%;\"></ion-skeleton-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6916:
/*!*******************************************************!*\
  !*** ./src/app/pages/groups/groups-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsPageRoutingModule": () => (/* binding */ GroupsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.page */ 8049);




const routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_0__.GroupsPage
    }
];
let GroupsPageRoutingModule = class GroupsPageRoutingModule {
};
GroupsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GroupsPageRoutingModule);



/***/ }),

/***/ 6188:
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsPageModule": () => (/* binding */ GroupsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups-routing.module */ 6916);
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.page */ 8049);







let GroupsPageModule = class GroupsPageModule {
};
GroupsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.GroupsPageRoutingModule
        ],
        declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_1__.GroupsPage]
    })
], GroupsPageModule);



/***/ }),

/***/ 8049:
/*!*********************************************!*\
  !*** ./src/app/pages/groups/groups.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsPage": () => (/* binding */ GroupsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _groups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.page.html?ngResource */ 6361);
/* harmony import */ var _groups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.page.scss?ngResource */ 9812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_partner_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/partner/partner.service */ 4961);







let GroupsPage = class GroupsPage {
    constructor(partnerService, menuCtrl, navCtrl) {
        this.partnerService = partnerService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.isAuthenticated = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        if (this.isAuthenticated) {
            this.menuCtrl.enable(true, 'mainSideMenu');
            this.getGroupsData();
        }
    }
    getGroupsData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const arr = [];
            const groupData = yield this.partnerService.getGroupsCollection();
            //console.log(groupData);
            this.groupData = groupData;
        });
    }
    groupSummary(groupId) {
        this.navCtrl.navigateForward(`/group-profile/${groupId}`);
    }
    setRoot(page) {
        this.navCtrl.navigateRoot(`/${page}`);
    }
};
GroupsPage.ctorParameters = () => [
    { type: _services_partner_partner_service__WEBPACK_IMPORTED_MODULE_2__.PartnerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
GroupsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-groups',
        template: _groups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_groups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GroupsPage);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_groups_groups_module_ts.js.map