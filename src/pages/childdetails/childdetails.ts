import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChildinfoPage } from '../childinfo/childinfo';
import { Storage } from '@ionic/storage';
import { ChildinfoeditPage } from '../childinfoedit/childinfoedit';
/*
  Generated class for the ChilddetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-childdetails',
  templateUrl: 'childdetails.html'
})
export class ChilddetailsPage {
  childdetail=[];

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.get('childdetail').then((val) => {
      console.log(" data : "+JSON.stringify(val));
      if(val == null){

      }else{
        var read=val.map(data=>{
          this.childdetail.push({'firstname':data.firstname,'lastname':data.lastname,'phone':data.phone,'email':data.email,'dob':data.dob,'gender':data.gender,'institution':data.institution,'fb':data.fb});
         })
          }
    });
  }

  childinfo(){
    this.navCtrl.push(ChildinfoPage)
  }

  formview(item){
console.log(item)
this.navCtrl.push(ChildinfoeditPage,{param1 : item})


  }

  clear(item){
    console.log(typeof item, item)
    console.log(JSON.stringify(this.childdetail))
    let index = this.childdetail.indexOf(item);
       
      if(index > -1){
          this.childdetail.splice(index, 1); // works
         }
        
        console.log("clear"+JSON.stringify(this.childdetail))
        this.storage.set('childdetail',this.childdetail);
        return this.childdetail
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChilddetailsPagePage');
  }

}
