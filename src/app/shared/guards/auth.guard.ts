/**
 * Release notes:
 *     20170525 - BoszeG
 *        AdminAuthGuard
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

export class AdminAuthGuard implements CanActivate {
  
  public constructor(protected _authService: AuthService) {
    //
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.user.email.search("admin") == -1)
      return false
    else
      return true;
  }

}