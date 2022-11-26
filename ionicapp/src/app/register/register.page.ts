import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  formRegister: FormGroup;
  bandInsert: boolean = false;
  
  constructor(
      public formBuilder: FormBuilder,
      private user_service: UserService,
      private navController: NavController
    ) { 
    
    this.formRegister = this.formBuilder.group({
      'firstName': new FormControl("", Validators.required),
      'secondName': new FormControl(""),
      'fatherLastName': new FormControl("", Validators.required),
      'motherLastName': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'repeatPassword': new FormControl("", Validators.required)
    })

  }
  
  ngOnInit() {
    console.log("register")
  }
  
  async alertMessage(header, message) {
    return await alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
  }

  async register() {
    let form = this.formRegister.value;

    if (this.formRegister.invalid) {
    
      console.log("datos invalidos");
      const alert = await this.alertMessage(
        "Datos incorrectos",
        "Tienes que llenar todos los datos"
      );
      await alert.present();
    } else {
      if (form.password === form.repeatPassword) {

        let formData = new FormData();
        formData.append("firstName", form.firstName);
        formData.append("secondName", form.secondName);
        formData.append("fatherLastName", form.fatherLastName);
        formData.append("motherLastName", form.motherLastName);
        formData.append("email", form.email);
        formData.append("password", form.password);

        this.bandInsert = true;
        this.user_service.createUser(formData).subscribe(
          async (status) => {
            
            console.log(status);

            if (status) {
              this.bandInsert = false;
              this.navController.navigateRoot("login");
            } else {
              this.bandInsert = false;
              const alertEmail = await this.alertMessage(
                "Email ya existe",
                "Cambie el email"
              );
              await alertEmail.present();
            }
            
          }
        )

      } else {
        console.log("datos invalidos");
        const alertPassword = await this.alertMessage(
          "Datos incorrectos",
          "Las contraseñas no coinciden"
        );
        await alertPassword.present();

      }

    }


  }

}
