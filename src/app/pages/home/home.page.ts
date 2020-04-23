import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { TranslateService } from "@ngx-translate/core";
declare let appManager: AppManagerPlugin.AppManager;
declare let titleBarManager: TitleBarPlugin.TitleBarManager;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private testObj={"name":"testtest"};
  constructor(private storageServicer:StorageService,private translate:TranslateService) { }
  ngOnInit() {

  }


  remove(){
    this.storageServicer.remove("test").then((msg)=>{
      alert("sucess");
    }).catch((err)=>{
      alert(JSON.stringify(err));
    });
  }

  set(){
    let strObj = JSON.stringify(this.testObj);
    this.storageServicer.setTest(strObj).then((msg)=>{
            alert(msg);
    }).catch((err)=>{
            alert(JSON.stringify(err));
    });
  }

  get(){
    this.storageServicer.getTest().then((msg)=>{
      alert(msg);
    }).catch((err)=>{
      alert(JSON.stringify(err));
    });
  }

  clear(){
    this.storageServicer.clear().then((msg)=>{
      alert("sucess");
    }).catch((err)=>{
      alert(JSON.stringify(err));
    });
  }

  setLangule(){
     let lang  = this.translate.currentLang;
     switch(lang){
       case 'zh':
        this.translate.setDefaultLang("en");
        // 检索指定的翻译语言，返回Observable
        this.translate.use("en");
        titleBarManager.setTitle(this.translate.instant("homePage.pageTitle"));
         break;
        case 'en':
          this.translate.setDefaultLang("zh");
          // 检索指定的翻译语言，返回Observable
          this.translate.use("zh");
          titleBarManager.setTitle(this.translate.instant("homePage.pageTitle"));
         break;
     }
  }

  ionViewDidEnter(){
    // When the main screen is ready to be displayed, ask the app manager to make the app visible,
    // in case it was started hidden while loading.
    appManager.setVisible("show");
    titleBarManager.setTitle(this.translate.instant("homePage.pageTitle"));
    titleBarManager.setBackgroundColor("#ff9f46");
    titleBarManager.setForegroundMode(TitleBarPlugin.TitleBarForegroundMode.LIGHT);
    titleBarManager.setNavigationMode(TitleBarPlugin.TitleBarNavigationMode.CLOSE);

  }

}
