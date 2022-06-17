"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_team-profile_team-profile_module_ts"],{

/***/ 7511:
/*!**********************************************************************!*\
  !*** ./src/app/pages/team-profile/team-profile.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".dough-graph-heading {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.partner-details-card h1, .partner-details-card h3 {\n  font-weight: 600;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n  height: 95% !important;\n  margin-bottom: 5px !important;\n}\n\n.vertical-align-set {\n  vertical-align: middle;\n}\n\n.teams-icon {\n  font-size: 23px;\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBQ0oiLCJmaWxlIjoidGVhbS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3VnaC1ncmFwaC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wYXJ0bmVyLWRldGFpbHMtY2FyZCBoMSwucGFydG5lci1kZXRhaWxzLWNhcmQgaDN7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduLXNldCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udGVhbXMtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59Il19 */";

/***/ }),

/***/ 5938:
/*!**********************************************************************!*\
  !*** ./src/app/pages/team-profile/team-profile.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"global-header-hide\" [translucent]=\"true\">\r\n\t<ion-toolbar class=\"global-menu-toolbar\">\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-menu-button></ion-menu-button>\r\n\t\t\t<img tappable (click)=\"setRoot('home')\" class=\"global-home-cynch-logo-icon\" src=\"../../assets/imgs/cynch_logo_icon.png\" alt=\"Cynch Security\"/>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid fixed=\"true\" class=\"ion-text-wrap\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"partner-details-card ion-padding\">\r\n          \r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <ion-text>\r\n                <h1>{{partnerDetails?.name}}</h1>\r\n                <h1 *ngIf=\"!partnerDetails && !partnerDetails?.name\">\r\n                  <ion-skeleton-text animated style=\"width: 50%; height: 27px;\"></ion-skeleton-text>\r\n                </h1>\r\n              </ion-text>\r\n            </ion-label>\r\n            <ion-thumbnail slot=\"end\">\r\n              <img class=\"global-img-radius-icons\" [src]=\"partnerDetails?.image?partnerDetails?.image:'../../assets/imgs/image_placeholder_32x32.jpg'\">\r\n            </ion-thumbnail>\r\n          </ion-item>\r\n          \r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <ion-text class=\"ion-padding\">\r\n                <h3>Membership</h3>\r\n              </ion-text>\r\n              <p *ngIf=\"partnerDetails?.membership\"><ion-badge color=\"primary\" class=\"ion-text-capitalize\">{{partnerDetails?.membership}}</ion-badge></p>\r\n              <p *ngIf=\"!partnerDetails && !partnerDetails?.membership\">\r\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\r\n              </p>\r\n              <ion-text class=\"ion-padding\">\r\n                <h3>Businesses</h3>\r\n              </ion-text>\r\n              <p *ngIf=\"partnerDetails\">{{businessesCount??'-'}} / {{businessesCount??'-'}}</p>\r\n              <p *ngIf=\"!partnerDetails && !partnerDetails?.number\">\r\n                <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-card class=\"ion-padding\">\r\n          <ion-card-header>\r\n            <ion-card-title><ion-icon class=\"teams-icon\" name=\"people-outline\"></ion-icon> Your Team</ion-card-title>\r\n            <ion-card-subtitle>The people who give a crap</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-list *ngIf=\"team\">\r\n            <ion-item *ngFor=\"let user of team\">\r\n              <!-- <ion-avatar slot=\"start\">\r\n                <img src=\"../../../assets/imgs/image_placeholder_32x32.jpg\">\r\n              </ion-avatar> -->\r\n              <ion-icon slot=\"start\" color=\"primary\" name=\"id-card-outline\"></ion-icon>\r\n              <ion-label>\r\n                <h4>{{user.firstName}}</h4>\r\n              </ion-label>\r\n              <p>{{user.email}}</p>\r\n              <ion-badge class=\"vertical-align-set ion-margin-start\" color=\"light\">{{user.role}}</ion-badge>\r\n            </ion-item>\r\n\r\n            <!-- <ion-card-header>\r\n              <ion-card-title>Add Team Members</ion-card-title>\r\n            </ion-card-header> -->\r\n          </ion-list>\r\n\r\n          <ion-list *ngIf=!team>\r\n            <ion-item *ngFor=\"let i of [].constructor(3)\">\r\n              <!-- <ion-avatar slot=\"start\">\r\n                <img src=\"../../../assets/imgs/image_placeholder_32x32.jpg\">\r\n              </ion-avatar> -->\r\n              <ion-icon slot=\"start\" name=\"id-card-outline\"></ion-icon>\r\n              <ion-label>\r\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n              </ion-label>\r\n              <ion-label slot=\"end\">\r\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 9572:
/*!*******************************************************************!*\
  !*** ./src/app/pages/team-profile/team-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamProfilePageRoutingModule": () => (/* binding */ TeamProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _team_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-profile.page */ 9743);




const routes = [
    {
        path: '',
        component: _team_profile_page__WEBPACK_IMPORTED_MODULE_0__.TeamProfilePage
    }
];
let TeamProfilePageRoutingModule = class TeamProfilePageRoutingModule {
};
TeamProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeamProfilePageRoutingModule);



/***/ }),

/***/ 1290:
/*!***********************************************************!*\
  !*** ./src/app/pages/team-profile/team-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamProfilePageModule": () => (/* binding */ TeamProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _team_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-profile-routing.module */ 9572);
/* harmony import */ var _team_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-profile.page */ 9743);







let TeamProfilePageModule = class TeamProfilePageModule {
};
TeamProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _team_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeamProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_team_profile_page__WEBPACK_IMPORTED_MODULE_1__.TeamProfilePage]
    })
], TeamProfilePageModule);



/***/ }),

/***/ 9743:
/*!*********************************************************!*\
  !*** ./src/app/pages/team-profile/team-profile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamProfilePage": () => (/* binding */ TeamProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _team_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-profile.page.html?ngResource */ 5938);
/* harmony import */ var _team_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-profile.page.scss?ngResource */ 7511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_partner_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/partner/partner.service */ 4961);






let TeamProfilePage = class TeamProfilePage {
    constructor(navCtrl, partnerService, alertController, loadCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.partnerService = partnerService;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.modalCtrl = modalCtrl;
        this.isAuthenticated = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.getpartnerDetails();
        });
    }
    ionViewWillEnter() {
    }
    getpartnerDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const partner = yield this.partnerService.getPartnerDetail();
            if (partner && this.isAuthenticated) {
                this.partnerDetails = partner;
                this.getTeamDetails(partner.users);
                this.getBusinessesCount();
            }
            else {
                this.alertTryagain();
            }
        });
    }
    getTeamDetails(users) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const teamData = this.partnerDetails.partnerTeam;
            this.team = teamData;
            //console.log(this.team);
        });
    }
    getBusinessesCount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.partnerService.getBusinesses();
            //console.log(data);
            if (data) {
                this.businessesCount = data.length;
            }
        });
    }
    alertTryagain() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'tryagain-alert',
                header: 'Oh snap!',
                message: 'An error occurred while retrieving data.',
                buttons: [
                    {
                        text: 'Okay',
                        role: 'cancel',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            this.navCtrl.navigateRoot(`home`);
                        })
                    },
                    {
                        text: 'Try again',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            yield alert.dismiss();
                            this.getpartnerDetails();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    setRoot(page) {
        this.navCtrl.navigateRoot(`/${page}`);
    }
    addMember() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    addedMemberAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const addedMember = yield this.loadCtrl.create({
                spinner: null,
                cssClass: 'my-custom-class',
                message: 'Member Added',
                duration: 3000
            });
            yield addedMember.present();
            addedMember.onDidDismiss().then(() => {
                this.team = [];
                this.getpartnerDetails();
                return false;
            });
        });
    }
    updateMemberDataError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const updateError = yield this.loadCtrl.create({
                spinner: null,
                cssClass: 'my-custom-class',
                message: 'Sorry, Could not update at this time.',
                duration: 3000
            });
            yield updateError.present();
        });
    }
    updateMemberAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const update = yield this.loadCtrl.create({
                spinner: null,
                cssClass: 'my-custom-class',
                message: 'Member updated<br>Please wait...',
                duration: 3000
            });
            yield update.present();
            update.onDidDismiss().then(() => {
                this.getpartnerDetails();
                return false;
            });
        });
    }
    deleteMemberAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const deleteMember = yield this.loadCtrl.create({
                spinner: null,
                cssClass: 'my-custom-class',
                message: 'Member deleted<br>Please wait...',
                duration: 3000
            });
            yield deleteMember.present();
            deleteMember.onDidDismiss().then(() => {
                this.getpartnerDetails();
                return false;
            });
        });
    }
    deleteMember(uid, fName, lName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
TeamProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_partner_partner_service__WEBPACK_IMPORTED_MODULE_2__.PartnerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
TeamProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-team-profile',
        template: _team_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_team_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamProfilePage);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_team-profile_team-profile_module_ts.js.map