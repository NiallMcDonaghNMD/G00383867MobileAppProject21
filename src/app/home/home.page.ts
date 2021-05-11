import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Flashlight} from '@ionic-native/flashlight/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
myStatus: string;
  constructor(private storage:Storage, private flashlight: Flashlight) {}

  ngOnInit(){

    this.storage.get('status')
    .then((data)=>{
      this.myStatus = data;
    })
    .catch();
  }

  Flashlight()
  {
    this.flashlight.toggle();
  }
}
