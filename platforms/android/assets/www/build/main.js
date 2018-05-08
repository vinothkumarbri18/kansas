webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChilddetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childinfo_childinfo__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__childinfoedit_childinfoedit__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ChilddetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChilddetailsPage = (function () {
    function ChilddetailsPage(storage, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.childdetail = [];
        storage.get('childdetail').then(function (val) {
            console.log(" data : " + JSON.stringify(val));
            if (val == null) {
            }
            else {
                var read = val.map(function (data) {
                    _this.childdetail.push({ 'firstname': data.firstname, 'lastname': data.lastname, 'phone': data.phone, 'email': data.email, 'dob': data.dob, 'gender': data.gender, 'institution': data.institution, 'fb': data.fb });
                });
            }
        });
    }
    ChilddetailsPage.prototype.childinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__childinfo_childinfo__["a" /* ChildinfoPage */]);
    };
    ChilddetailsPage.prototype.formview = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */], { param1: item });
    };
    ChilddetailsPage.prototype.clear = function (item) {
        console.log(typeof item, item);
        console.log(JSON.stringify(this.childdetail));
        var index = this.childdetail.indexOf(item);
        if (index > -1) {
            this.childdetail.splice(index, 1); // works
        }
        console.log("clear" + JSON.stringify(this.childdetail));
        this.storage.set('childdetail', this.childdetail);
        return this.childdetail;
    };
    ChilddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChilddetailsPagePage');
    };
    ChilddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-childdetails',template:/*ion-inline-start:"/home/pinnacle/Documents/kansas/kansas/src/pages/childdetails/childdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="color:white">Children\'s Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color:aliceblue">\n    <ion-fab top right edge>\n        <button ion-fab style="background-color:#FCB92F" (click)="childinfo()" ><ion-icon name="add"></ion-icon>\n    </button>\n      </ion-fab>\n      <ion-card  style="width:100%;margin-right:-2px;margin-left:-1px;box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" *ngFor="let item of childdetail" >\n        <ion-card-header  style="background-color:#d1d8e4;margin-top:-3px;height: 48px;">\n         <ion-row>\n           <ion-col>\n          <p   style="font-size:13px;color:#00276C;margin-left:-4%" ><b>{{item.firstname}} {{item.lastname}}</b></p>\n        </ion-col>\n        <ion-col>\n          <ion-icon  style="color:red;font-size:20px;margin-left: 90%;margin-top: -3%;" (click)="clear(item)" name="remove-circle"></ion-icon>   \n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n       \n        <ion-item (click)=formview(item)  style="background-color:#ffffff;margin-top:-3px">\n          <p style="font-size:13px;color:black" ><b>Phone</b></p>\n          <p   style="font-size:13px;color:black" item-right>{{item.phone}}</p>\n        </ion-item>\n  \n        <ion-item (click)=formview(item) style="margin-top:-8px;background-color:#ffffff">\n          <p style="font-size:13px;color:black"><b>Email</b></p>\n          <p  style="font-size:13px;color:black"  item-right>{{item.email}}</p>\n        </ion-item>\n     \n        <ion-item (click)=formview(item) style="margin-top:-8px;background-color:#ffffff">\n            <p style="font-size:13px;color:black"><b>Institution\'s Name</b></p>\n            <p  style="font-size:13px;color:black"  item-right>{{item.institution}}</p>\n          </ion-item>\n    \n            \n  \n</ion-card>\n  \n</ion-content>\n<ion-footer>\n  <ion-item no-lines style="height:20px;">\n      <ion-row >\n          <ion-col width-50>\n              <p style="font-size:10px;text-align:right;margin-top:5px;">Powered by </p>\n            </ion-col>\n            <ion-col width-50>\n    <img style="width:20px;height:20px;text-align:left"  src="assets/img/logo.png">\n  \n            </ion-col>\n            </ion-row>\n   \n    \n  </ion-item></ion-footer>'/*ion-inline-end:"/home/pinnacle/Documents/kansas/kansas/src/pages/childdetails/childdetails.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChilddetailsPage);
    return ChilddetailsPage;
}());
//# sourceMappingURL=childdetails.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ChildinfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChildinfoPage = (function () {
    function ChildinfoPage(toastCtrl, storage, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firstname = '';
        this.lastname = '';
        this.phone = '';
        this.email = '';
        this.dob = '';
        this.gender = '';
        this.institution = '';
        this.fb = '';
        this.childdetail = [];
        storage.get('childdetail').then(function (val) {
            console.log(" data : " + val);
            if (val == null) {
            }
            else {
                var read = val.map(function (data) {
                    _this.childdetail.push({ 'firstname': data.firstname, 'lastname': data.lastname, 'phone': data.phone, 'email': data.email, 'dob': data.dob, 'gender': data.gender, 'institution': data.institution, 'fb': data.fb });
                });
            }
        });
    }
    ChildinfoPage.prototype.discard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    ChildinfoPage.prototype.submit = function () {
        if (this.firstname == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid First Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.lastname == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Last Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.phone == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Phone!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.email == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Email!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.dob == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid DOB!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.gender == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Gender!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.institution == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Institutions Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.fb == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Facebook Username!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            this.childdetail.push({ 'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'email': this.email, 'dob': this.dob, 'gender': this.gender, 'institution': this.institution, 'fb': this.fb });
            var toast = this.toastCtrl.create({
                message: 'Uploaded successfully!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.storage.set('childdetail', this.childdetail);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
        }
    };
    ChildinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildinfoPagePage');
    };
    ChildinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-childinfo',template:/*ion-inline-start:"/home/pinnacle/Documents/kansas/kansas/src/pages/childinfo/childinfo.html"*/'<!--\n  Generated template for the ChildinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Child Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:aliceblue">\n   \n  <ion-list style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);margin-top:5%;border: 0.6px solid rgb(109, 112, 167)">\n        <ion-item no-lines>\n          <ion-label style="font-size:13px;color:black;width:50%"item-left >First Name</ion-label>\n          <ion-input required style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="firstname" name="firstname" ></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label style="font-size:13px;color:black;width:50%"item-left >Last Name</ion-label>\n            <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="lastname" name="lastname" ></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left >Phone Number</ion-label>\n              <ion-input style="font-size:13px;color:black;width:50%" item-right type="number" [(ngModel)]="phone" name="phone" ></ion-input>\n            </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left >Email Address</ion-label>\n              <ion-input style="font-size:13px;color:black;width:50%" item-right type="email" [(ngModel)]="email" name="email" ></ion-input>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label style="font-size:13px;color:black;width:30%"item-left >DOB</ion-label>\n                <ion-datetime style="font-size:13px;color:black;width:70%" displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="dob" name="dob" ></ion-datetime>\n              </ion-item>\n\n              <ion-item >\n                  <ion-label style="font-size:13px;color:black;width:50%">Gender</ion-label>\n                  <ion-select style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="gender"> \n                      <ion-option >Female</ion-option>\n                      <ion-option>Male</ion-option>\n                      <ion-option>Undefined</ion-option>\n                </ion-select>\n                  </ion-item >\n\n                  <ion-item no-lines>\n                      <ion-label style="font-size:13px;color:black;width:50%"item-left >Institution Name</ion-label>\n                      <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="institution" name="institution" ></ion-input>\n                    </ion-item>\n\n                    <ion-item no-lines>\n                        <ion-label style="font-size:13px;color:black;width:50%"item-left >Facebook Username</ion-label>\n                        <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="fb" name="fb" ></ion-input>\n                      </ion-item>\n     \n    </ion-list>\n   \n</ion-content>\n\n\n<ion-footer >\n  \n  <ion-item  no-lines style="height:20px;">\n\n    <button  style="width:40%;background-color:#00276C" item-left ion-button  (click)="submit()">Save</button>\n    <button  style="width:75%;background-color:	#FCB92F" item-right ion-button color="danger" (click)="discard()">Discard</button>\n          \n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/home/pinnacle/Documents/kansas/kansas/src/pages/childinfo/childinfo.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChildinfoPage);
    return ChildinfoPage;
}());
//# sourceMappingURL=childinfo.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildinfoeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ChildinfoeditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChildinfoeditPage = (function () {
    function ChildinfoeditPage(storage, toastCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firstname = '';
        this.lastname = '';
        this.phone = '';
        this.email = '';
        this.dob = '';
        this.gender = '';
        this.institution = '';
        this.fb = '';
        this.childdetail = [];
        this.isenabled = false;
        this.editbutton = true;
        this.deleteing = [];
        this.data = navParams.get('param1');
        console.log("data", this.data);
        this.firstname = this.data.firstname;
        this.lastname = this.data.lastname;
        this.phone = this.data.phone;
        this.dob = this.data.dob;
        this.gender = this.data.gender;
        this.institution = this.data.institution;
        this.fb = this.data.fb;
        this.email = this.data.email;
        this.storage.get('childdetail').then(function (val) {
            console.log(" data : " + val);
            if (val == null) {
            }
            else {
                var read = val.map(function (data) {
                    _this.childdetail.push({ 'firstname': data.firstname, 'lastname': data.lastname, 'phone': data.phone, 'email': data.email, 'dob': data.dob, 'gender': data.gender, 'institution': data.institution, 'fb': data.fb });
                });
            }
        });
    }
    ChildinfoeditPage.prototype.edit = function (item) {
        this.editbutton = false;
        this.isenabled = true;
        //console.log(typeof this.data , this.data)
    };
    ChildinfoeditPage.prototype.discard = function () {
        this.childdetail.push({ 'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'email': this.email, 'dob': this.dob, 'gender': this.gender, 'institution': this.institution, 'fb': this.fb });
        this.storage.set('childdetail', this.childdetail);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    ChildinfoeditPage.prototype.submit = function () {
        if (this.firstname == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid First Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.lastname == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Last Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.phone == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Phone!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.email == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Email!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.dob == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid DOB!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.gender == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Gender!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.institution == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Institutions Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.fb == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Facebook Username!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var data_1 = this.data.firstname;
            var someArray = this.childdetail.filter(function (el) {
                return el.firstname !== data_1;
            });
            console.log("filter22", someArray);
            this.childdetail = someArray;
            this.childdetail.push({ 'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'email': this.email, 'dob': this.dob, 'gender': this.gender, 'institution': this.institution, 'fb': this.fb });
            var toast = this.toastCtrl.create({
                message: 'Updated successfully!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.storage.set('childdetail', this.childdetail);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
        }
    };
    ChildinfoeditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildinfoeditPagePage');
    };
    ChildinfoeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-childinfoedit',template:/*ion-inline-start:"/home/pinnacle/Documents/kansas/kansas/src/pages/childinfoedit/childinfoedit.html"*/'<!--\n  Generated template for the ChildinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Child Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:aliceblue">\n   \n  <ion-list style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);margin-top:5%;border: 0.6px solid rgb(109, 112, 167)">\n        <ion-item no-lines>\n          <ion-label style="font-size:13px;color:black;width:50%"item-left >First Name</ion-label>\n          <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="firstname" name="firstname" ></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label style="font-size:13px;color:black;width:50%"item-left >Last Name</ion-label>\n            <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="lastname" name="lastname" ></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left >Phone Number</ion-label>\n              <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="number" [(ngModel)]="phone" name="phone" ></ion-input>\n            </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left >Email Address</ion-label>\n              <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="email" [(ngModel)]="email" name="email" ></ion-input>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label style="font-size:13px;color:black;width:30%"item-left >DOB</ion-label>\n                <ion-datetime [disabled]="!isenabled" style="font-size:13px;color:black;width:70%" displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="dob" name="dob" ></ion-datetime>\n              </ion-item>\n\n              <ion-item >\n                  <ion-label style="font-size:13px;color:black;width:50%">Gender</ion-label>\n                  <ion-select [disabled]="!isenabled" style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="gender"> \n                      <ion-option >Female</ion-option>\n                      <ion-option >Male</ion-option>\n                      <ion-option>Undefined</ion-option>\n                </ion-select>\n                  </ion-item >\n\n                  <ion-item no-lines>\n                      <ion-label style="font-size:13px;color:black;width:50%"item-left >Institution Name</ion-label>\n                      <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="institution" name="institution" ></ion-input>\n                    </ion-item>\n\n                    <ion-item no-lines>\n                        <ion-label style="font-size:13px;color:black;width:50%"item-left >Facebook Username</ion-label>\n                        <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="fb" name="fb" ></ion-input>\n                      </ion-item>\n     \n    </ion-list>\n    \n   \n</ion-content>\n\n\n<ion-footer >\n   \n  <ion-item *ngIf="editbutton" style="height:20px;">\n    <button  style="width:100%" item-left ion-button  color="primary" (click)="edit()">Edit</button>\n</ion-item>\n  <ion-item *ngIf="!editbutton" no-lines style="height:20px;">\n\n    <button  style="width:40%;background-color:#00276C" item-left ion-button  (click)="submit()">Save</button>\n    <button  style="width:75%;background-color:	#FCB92F" item-right ion-button color="danger" (click)="discard()">Discard</button>\n          \n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/home/pinnacle/Documents/kansas/kansas/src/pages/childinfoedit/childinfoedit.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChildinfoeditPage);
    return ChildinfoeditPage;
}());
//# sourceMappingURL=childinfoedit.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(551);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_childdetails_childdetails__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_childinfo_childinfo__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_childinfoedit_childinfoedit__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_childdetails_childdetails__["a" /* ChilddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_childinfo_childinfo__["a" /* ChildinfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_childdetails_childdetails__["a" /* ChilddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_childinfo_childinfo__["a" /* ChildinfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }, { provide: __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */], useClass: __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_childdetails_childdetails__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(alertCtrl, platform, storage) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_childdetails_childdetails__["a" /* ChilddetailsPage */];
        this.uname = "";
        this.image = "";
        this.uid = "";
        this.showing = false;
        this.authentication = false;
        this.initializeApp();
        // storage.get('uid').then((val) => {
        //    console.log(" data : "+val);
        //    this.uid = val;
        //  });
    }
    MyApp.prototype.children = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.showing = false;
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else {
            // Since the component is null, this is the logout option
            // ...
            // logout logic
            // ...
            // redirect to home
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_childdetails_childdetails__["a" /* ChilddetailsPage */]);
        }
    };
    //   openPage(page) {
    //     // Reset the content nav to have just this page
    //     // we wouldn't want the back button to show in this scenario
    //     if(page.title != "Logout"){
    //     this.nav.setRoot(page.component);
    //     } else {
    // this.nav.goToRoot(true);
    //   }
    //   }
    MyApp.prototype.goLogin = function () {
        // this.nav.goToRoot(true);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    MyApp.prototype.showError = function () {
        setTimeout(function () {
            // this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Error ',
            subTitle: 'Required Authentication',
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/home/pinnacle/Documents/kansas/kansas/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header style="background-color:black">\n    <ion-toolbar >\n        <div style="background:linear-gradient(to right,white, #00276C)">\n   \n      <img style="width:100px" src="assets/img/kannas.jpg">\n      \n    </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background:linear-gradient(to right,white, #00276C);">\n    <ion-list>\n\n\n                 <ion-item menuClose ion-item style="background:linear-gradient(to right,white, #00276C);">\n        \n                    <ion-icon style="font-size:28px" item-left name="contact"></ion-icon>\n                \n                    <h2 style="font-size:18px;color:black" (click)="children()"><b>Children\'s Details</b></h2>\n                  \n                    </ion-item>\n\n                <!-- <ion-item menuClose ion-item (click)="goLogin()" style="background:linear-gradient(to right,white, #657CAE);;height:40px"> \n                    <ion-icon style="font-size:21px" name="log-out" item-left></ion-icon>\n                    <h2 style="font-size:18px;color:black"> Logout </h2>\n                    </ion-item>  -->\n                \n              </ion-list>\n\n\n\n\n      \n      \n    \n  </ion-content>\n  \n  \n  \n  \n  \n  \n  <ion-footer>\n    <ion-item no-lines style="height:20px;">\n        <ion-row >\n            <ion-col width-50>\n                <p style="font-size:10px;text-align:right;margin-top:5px;">Powered by </p>\n              </ion-col>\n              <ion-col width-50>\n      <img style="width:20px;height:20px;text-align:left"  src="assets/img/logo.png">\n    \n              </ion-col>\n              </ion-row>\n     \n      \n    </ion-item></ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/pinnacle/Documents/kansas/kansas/src/app/app.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* Storage */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[452]);
//# sourceMappingURL=main.js.map