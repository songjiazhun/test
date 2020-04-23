import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  public setTest(value:any) {
    return this.storage.set("test", JSON.stringify(value));
  }

  public getTest(){
     return this.storage.get("test");

  }

  public clear(){
      return this.storage.clear();
  }

  public remove(key:string){
    let tkey = key || "test";
    return this.storage.remove(tkey);
  }
}
