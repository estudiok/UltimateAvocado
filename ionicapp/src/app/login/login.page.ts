import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;



  constructor(
    public formBuilder: FormBuilder,
    private user_service: UserService,
    private navController: NavController
    ) { 
    this.formLogin = this.formBuilder.group({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {  
  }

  async alertMessage(header, message) {
    return await alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
  }

  async getInto() {
    let form = this.formLogin.value;
    if (this.formLogin.invalid) {
      const alert = await this.alertMessage(
        "Datos incorrectos",
        "Tienes que llenar todos los datos"
      );
      await alert.present();

    } else {
      
      let constructForm = new FormData();
      constructForm.append("email", form.email);
      constructForm.append("password", form.password);

      this.user_service.getUser(constructForm).subscribe(
        async (user: User) => {
          if (user.idUser == undefined) {
            const alertUser = await this.alertMessage(
              "No existe",
              "Verifique los datos"
            );
            await alertUser.present();
          } else {
            localStorage.setItem("user", JSON.stringify(user));
            this.navController.navigateRoot("menu/main");

          }
        }

      );
    }
  }



}
