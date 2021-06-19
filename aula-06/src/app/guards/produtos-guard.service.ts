import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class ProdutosGuardService implements CanActivateChild {

  constructor(private auth: AuthService, private rota: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (this.auth.isUsuarioAutenticado()) {
      return true;
    }

    this.rota.navigate(['/login']);
    return false;
  }

}
