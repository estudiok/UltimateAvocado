import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  user: User;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("user")) as User;
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    
    // console.log(user);
    // console.log(localStorage.getItem("user") as User);
  }


}
