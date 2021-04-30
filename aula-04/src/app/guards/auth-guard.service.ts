import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLoginService } from 'src/app/services/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authLogin: AuthLoginService, private rota: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authLogin.isAutenticado()) {
      return true;
    }

    this.rota.navigate(['/login']);
    return false;
  }

}
