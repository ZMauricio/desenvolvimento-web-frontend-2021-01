import { Injectable } from '@angular/core';
import { CanActivate,
        ActivatedRouteSnapshot,
        Router,
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private rota: Router,
              private auth: AuthService) { }

  canActivate(router: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.auth.isUsuarioAutenticado()) {
      return true;
    }

    this.rota.navigate(['/login']);
    return false;
  }

}
