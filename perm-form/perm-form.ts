import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
// import { OdooRPCService } from 'angular2-odoo-jsonrpc';
import { Storage } from '@ionic/storage';
import { OdooRPCService } from '../odoo-rpc/odoo-rpc';
// import { DatePipe } from '@angular/common/src/pipes';
import { Permission } from '../permission/permission';
import { TodayPermission } from '../today-permission/today-permission';
import { TomoPermission } from '../tomo-permission/tomo-permission';

/*
  Generated class for the PermForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perm-form',
  templateUrl: 'perm-form.html',
  animations: [
    trigger('flyInBottomSlow1', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('1000ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow2', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('1200ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow3', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('1400ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow4', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('1600ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow5', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('1800ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow6', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('2000ms ease-in-out')
        ])
    ]),
    trigger('flyInBottomSlow7', [
        state('in', style({
          transform: 'translate3d(0,0,0)'
        })),
        transition('void => *', [
          style({transform: 'translate3d(0,2000px,0'}),
          animate('2500ms ease-in-out')
        ])
    ]),
  trigger('flyInBottomSlow8', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2700ms ease-in-out')
      ])
  ])
  ]
})

export class PermFormPage implements OnInit{
public permissionObject;
 isReadonly:boolean=false;
 permissionHead:string="Create";
	loading : Loading;
	perm = {
		time_from : '',
		time_to: '',
    duration : 0,
    state: "save"
	};
  id = 0;
  private date;
  uname = "";
  image = "";
  uid = "";
  user = "";
  serverDet=this.odooRPC.serverDetails();
  constructor(public navCtrl: NavController, public navParams: NavParams, private odooRPC: OdooRPCService, private alertCtrl: AlertController, private loadingCtrl: LoadingController,public storage:Storage,private toastCtrl: ToastController) {
    if(navParams.get("permissionObject")){
      this.isReadonly = true;
      this.permissionObject= navParams.get("permissionObject");
      this.perm = this.permissionObject;
      console.log(">>>this.permissionObject>>",JSON.stringify(this.permissionObject));
      // this.perm.state="draft";
      // // if(this.perm.state="draft"){
      // //   this.isReadonly = true;
      // // }
      this.user=this.permissionObject.id;
      console.log("mcmmcmcmm"+this.user);
      // this.perm.time_from =this.datePipe.transform(this.permissionObject.time_from, 'HH:mm:ss');
      // this.perm.time_to =this.datePipe.transform(this.permissionObject.time_to, 'HH:mm:ss');
      // this.permissionHead="Update Status";
    

      storage.get('uid').then((val) => {
        console.log(" data 2: "+val);
        this.uid = val.uid;
      });
      
      storage.get('uname').then((val1) => {
        console.log(" data1 : "+val1);
        this.uname = val1;
      });

      this.odooRPC.searchRead('res.groups', [],['users'],0,0,'')
      .then(function (res) {
        console.log(">>>current>>>>>>>>>>>>>>>>>",JSON.stringify(res));
          let li = res.records[0];
          console.log(">>>>>>>>"+JSON.stringify(li));
          // this.storage.set('username',res.name);
        //  this.uname = res.name;
          // this.storage.set('partnerid',res.partner_id[0]);
          // this.storage.set('partnername',res.partner_id[1]);
          // this.storage.set('image',res.image);
          this.image = res.image;
        //  this.loading.dismiss();
           }).catch( err => { 
       })

    };
   
   
    this.odooRPC.init({
      odoo_server: this.serverDet.serverName,
      // odoo_server: "http://erp.pinnacleseven.com",
            // http_auth: "admin:admin@123" // optional
        });

    if(this.perm.duration == NaN){
      this.perm.duration = 0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PermFormPage');
  }

ngOnInit(){
    // this.showLoading();
    //   this.odooRPC.searchRead('hr.holidays.status',[],['name','id'],0,20,'')
    //     .then(res => {
    //       this.types = res.records;
    //       this.loading.dismiss();
    //       }).catch( err => {
    //         console.error('login failed', err);
    //         this.loading.dismiss();
    //         this.showError(err.message);
    //     });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }  

  calculateTime() {
  
  console.log(this.perm.time_from);
  	console.log(this.perm.time_to);
    let time3 = this.perm.time_from[11];
    let time4=this.perm.time_from[12];
    let time1= time3+time4;
    let time5 = this.perm.time_to[11];
    let time6 = this.perm.time_to[12];
    let time2 =time5+time6;
    console.log(time1);
    console.log(time2);
    console.log(parseInt(time2) - parseInt(time1));
    this.perm.duration = parseInt(time2) - parseInt(time1) ;
    if(this.perm.duration == NaN){
      this.perm.duration = 0;
    }
  }

  applyPermission(form) {
    // this.date = new Date();
    this.storage.get('emp_id').then((val) => {
       console.log(" data : "+val);     

    console.log("permission : ",form.value);
     this.showLoading();
     let d2 = form.value.time_from.replace(/[^0-9\-\:]/g,' ');
     let d3 = form.value.time_to.replace(/[^0-9\-\:]/g,' ');
     let d4 = form.value.start_date;
     let d5 = form.value.stop_date;
      
      let st= d2;
      let strr= d3;
      if (st != null && st.length > 0 && st.charAt(st.length - 1) == ' ') {
        st = st.substring(0, st.length - 1);
    }
      console.log("strrrrrrr"+st);
      if (strr != null && strr.length > 0 && strr.charAt(strr.length - 1) == ' ') {
        strr = strr.substring(0, strr.length - 1);
    }
      console.log("strrrrse"+strr);
    //  let d2 = form.value.start_date;
    //  let d3 = form.value.stop_date;
    //  let d4 = form.value.time_from;
    //  let d5 = form.value.time_to;
    //  
    //
    //  let d1 = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    //  let d2 = d1+" "+form.value.time_from;
    //  let d3 = d1+" "+form.value.time_to;
    //  form.value.time_from = this.datePipe.transform(d2, 'yyyy-MM-dd hh:mm:ss');
    //  form.value.time_to =  this.datePipe.transform(d3, 'yyyy-MM-dd hh:mm:ss');
    form.value.time_from = st;
    form.value.time_to =  strr;
     form.value.duration = parseFloat(form.value.duration);
console.log("form..",form)
     let kwargs = JSON.parse(localStorage.getItem("user_context")) || {"lang": "en_US"};
      this.odooRPC.call('hr.permission','create',[form.value],{})
        .then(res => {
        	console.log("permission req : ",res);
          this.id = res;
          this.perm.state = "draft";
          	this.loading.dismiss();
            let toast = this.toastCtrl.create({
              message: 'Permission Created!',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
// console.log(res)
//             this.odooRPC.call('hr.permission','submit_but',[[res],{'active_id':this.id, 'active_ids':[this.id]}],{})
//               .then(res => {
//                }).catch( err => {
//                  });
          }).catch( err => {
            console.error('login failed', err);
            this.loading.dismiss();
            this.showError(err.message);
        });

          
          });
  }
  backPage(){
    this.navCtrl.push(Permission);
  }
  submitPermission() {
    console.log(this.id);
    this.showLoading();
    this.odooRPC.call('hr.permission','submit_but',[[this.id],{'active_id':this.id, 'active_ids':[this.id]}],{})
          .then(res => {
           console.log("res : "+res);
           this.loading.dismiss();
           let toast = this.toastCtrl.create({
              message: 'Permission Submitted!',
              duration: 3000,
              position: 'bottom'
            });
           toast.present();
           this.navCtrl.setRoot(TodayPermission);
          }).catch( err => {
            console.error('Failed', err);
            this.loading.dismiss();
            this.showError(err.message);
        });

  }

  toApprove() {

    this.showLoading();
    let kwargs = JSON.parse(localStorage.getItem("user_context")) || {"lang": "en_US"};
    this.odooRPC.call('hr.permission','get_approve',[[this.user]],{})
          .then(res => {
           console.log("res : "+res);
           this.loading.dismiss();
           let toast = this.toastCtrl.create({
              message: 'To Approved!',
              duration: 3000,
              position: 'bottom'
            });
           toast.present();
           this.backPage()
          }).catch( err => {
            console.error('Failed', err);
            this.loading.dismiss();
            this.showError(err.message);
        });

  }

  secondApprove() {
    console.log(this.id);
    this.showLoading();
    let kwargs = JSON.parse(localStorage.getItem("user_context")) || {"lang": "en_US"};
    this.odooRPC.call('hr.permission','done_approve',[[this.user]],{})
          .then(res => {
           console.log("res : "+res);
           this.loading.dismiss();
           let toast = this.toastCtrl.create({
              message: 'Second Approved',
              duration: 3000,
              position: 'bottom'
            });
           toast.present();
           this.backPage()
          }).catch( err => {
            console.error('Failed', err);
            this.loading.dismiss();
            this.showError(err.message);
        });

  }
 
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
