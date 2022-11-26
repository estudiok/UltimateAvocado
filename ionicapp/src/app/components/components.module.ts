import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvocadosvgComponent } from './avocadosvg/avocadosvg.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [NavbarComponent, AvocadosvgComponent],
  exports: [NavbarComponent, AvocadosvgComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})

export class ComponentsModule {}
