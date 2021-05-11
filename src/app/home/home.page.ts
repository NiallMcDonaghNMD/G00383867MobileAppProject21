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
//On initialisation get the status from the other page for use in this page.
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
