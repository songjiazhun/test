import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
declare let appManager: AppManagerPlugin.AppManager;
@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class MyApp {

  constructor(private translate:TranslateService,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, router: Router) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initTranslateConfig();
      statusBar.styleDefault();
      splashScreen.hide();
      // Make sure to wait for platform to be ready before navigating to the first screen. Otherwise
      // plugins such as AppManager or TitleBarManager are not ready.
      router.navigate(["home"]);
    });
  }

  initTranslateConfig() {
    // 参数类型为数组，数组元素为本地语言json配置文件名
    this.translate.addLangs(["zh", "en"]);
    // 设置默认语言
    appManager.getLocale((defaultLang: string, currentLang: string, systemLang: string)=>{
            this.translate.setDefaultLang(currentLang);
            // 检索指定的翻译语言，返回Observable
            this.translate.use(currentLang);

            this.translate.instant
    });

}
}
