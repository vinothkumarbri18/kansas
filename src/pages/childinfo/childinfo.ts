import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { ChilddetailsPage } from '../childdetails/childdetails';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ChildinfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-childinfo',
  templateUrl: 'childinfo.html'
})
export class ChildinfoPage {

  firstname='';
  lastname='';
  phone='';
  email='';
  dob='';
  gender='';
  institution='';
  fb='';
  childdetail=[];

  constructor(private toastCtrl: ToastController, public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('childdetail').then((val) => {
         console.log(" data : "+val);
         if(val == null){

         }else{
           var read=val.map(data=>{
            this.childdetail.push({'firstname':data.firstname,'lastname':data.lastname,'phone':data.phone,'email':data.email,'dob':data.dob,'gender':data.gender,'institution':data.institution,'fb':data.fb});
           })
         
        }
       });
  }
  discard(){
    this.navCtrl.setRoot(ChilddetailsPage)
  }

  submit(){

    if(this.firstname == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid First Name!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.lastname == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Last Name!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.phone == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Phone!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.email == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Email!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.dob == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid DOB!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.gender == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Gender!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.institution == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Institutions Name!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.fb == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Facebook Username!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else{
   
    this.childdetail.push({'firstname':this.firstname,'lastname':this.lastname,'phone':this.phone,'email':this.email,'dob':this.dob,'gender':this.gender,'institution':this.institution,'fb':this.fb})
    let toast = this.toastCtrl.create({
      message: 'Uploaded successfully!',
      duration: 3000,
      position: 'bottom'
    });
  toast.present();
    this.storage.set('childdetail',this.childdetail);
    this.navCtrl.setRoot(ChilddetailsPage)
  }
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildinfoPagePage');
  }

}
