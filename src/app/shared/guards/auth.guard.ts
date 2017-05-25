/**
 * Release notes:
 *     v0.4 - 20170525 - BoszeG
 *        if user is undefined
 *     v0.3 - 20170525 - BoszeG
 *        @Injectable() added to AdminAuthGuard
 *     v0.2 - 20170525 - BoszeG
 *        AdminAuthGuard
 *     v0.1 - 20170523 - BoszeG
 *        base
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../shared.barrel';

@Injectable()
export class AuthGuard implements CanActivate {
  
  public constructor(protected _authService: AuthService) {
    //
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !!this._authService.user;
  }

}

@Injectable()
export class AdminAuthGuard implements CanActivate {
  
  public constructor(protected _authService: AuthService) {
    //
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if ( this._authService.user == undefined || this._authService.user.email.search("admin") == -1 )
      return false
    else
      return true;
  }

}