import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ChilddetailsPage } from '../pages/childdetails/childdetails';
import { Storage } from '@ionic/storage';



 


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChilddetailsPage;
  uname = "";
  image = "";
  uid = "";
  showing:boolean=false;
  authentication:boolean=false;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private alertCtrl: AlertController, public platform: Platform, public storage:Storage) {
    this.initializeApp();


    // storage.get('uid').then((val) => {
    //    console.log(" data : "+val);
    //    this.uid = val;
    //  });
    
  }

 
children(){
  this.nav.setRoot(ChilddetailsPage)
}


  initializeApp() {
    this.platform.ready().then(() => {
      
      this.showing=false;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

if(page.component) {
        this.nav.setRoot(page.component);
    } else {
        // Since the component is null, this is the logout option
        // ...

        // logout logic
        // ...

        // redirect to home
      
        this.nav.setRoot(ChilddetailsPage);
    }
}


//   openPage(page) {
//     // Reset the content nav to have just this page
//     // we wouldn't want the back button to show in this scenario
//     if(page.title != "Logout"){
//     this.nav.setRoot(page.component);
//     } else {
// this.nav.goToRoot(true);
//   }
//   }

  goLogin(){
    // this.nav.goToRoot(true);
    this.nav.setRoot(ChilddetailsPage);
  }

  showError() {
    setTimeout(() => {
      // this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Error ',
      subTitle: 'Required Authentication',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
