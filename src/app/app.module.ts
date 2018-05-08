import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

import {ChilddetailsPage} from '../pages/childdetails/childdetails'
import {ChildinfoPage} from '../pages/childinfo/childinfo'
import {ChildinfoeditPage} from '../pages/childinfoedit/childinfoedit'

@NgModule({
  declarations: [
    MyApp,
    ChilddetailsPage,
    ChildinfoPage,
    ChildinfoeditPage
   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChilddetailsPage,
    ChildinfoPage,
    ChildinfoeditPage
    
   
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},{provide:Storage, useClass : Storage}]
})
export class AppModule {}
