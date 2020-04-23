import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
declare let appManager: AppManagerPlugin.AppManager;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //constructor() { }
  constructor(private storageServicer:StorageService) { }

  ngOnInit() {
     this.storageServicer.getTest().then((data)=>{
         console.log("==msg=="+JSON.stringify(data));
         console.log("==msg=="+JSON.stringify(data));
         if(data === null){

         }
     }).catch((err)=>{
       alert(JSON.stringify(err));
     })
  }

  ionViewDidEnter(){
    // When the main screen is ready to be displayed, ask the app manager to make the app visible,
    // in case it was started hidden while loading.
    appManager.setVisible("show");

  }

}
