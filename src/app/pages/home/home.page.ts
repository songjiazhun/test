import { Component, OnInit } from '@angular/core';
//import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  //constructor(private storageServicer:StorageService) { }

  ngOnInit() {
    // this.storageServicer.getTest().then((data)=>{
    //     console.log("==msg=="+JSON.stringify(data));
    //     console.log("==msg=="+JSON.stringify(data));
    // }).catch((err)=>{
    //   alert(JSON.stringify(err));
    // })
  }

}
