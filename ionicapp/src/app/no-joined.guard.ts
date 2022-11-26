import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoJoinedGuard implements CanActivate {

  constructor(public navController: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (localStorage.getItem("user")){
        this.navController.navigateRoot("menu/main")
        return false;
      } else {
        return true;
      }
    
  }
  
}
