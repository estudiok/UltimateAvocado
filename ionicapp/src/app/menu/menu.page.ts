import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indexSelect: number = 1;

  pages = [
    {
      title: 'Inicio',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Camara',
      url: '/menu/camera',
      icon: 'camera'
    }
  ]


  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  changeIndexSelected(i){
    this.indexSelect = i;
  }


  logout(){
    
    console.log("Salió");
    localStorage.removeItem("user");
    this.navCtrl.navigateRoot("login");
  }

}
