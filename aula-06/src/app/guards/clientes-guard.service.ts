import { Injectable } from '@angular/core';
import { CanActivateChild,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class ClientesGuardService implements CanActivateChild {

  constructor(private auth: AuthService, private rota: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean>| boolean {

    if (!this.auth.isAdmin() && state.url.includes('novo')) {
      console.log('admin', this.auth.isAdmin());

      return false;
    }

    console.log('admin', this.auth.isAdmin());
    return true;
  }
}
