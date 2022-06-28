import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MainService } from '@app/services/main/main.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private readonly _router: Router, private readonly _mainService: MainService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const file = this._mainService.fileTemp;

      if (!file) {
        this._router.navigateByUrl('register')
      }

    return true;
  }
  
}
