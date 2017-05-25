/**
 * Release notes:
 *     20170525 - BoszeG
 *        AdminService methods from task.service
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { ApiService, ApiResponseConfig } from '../../shared/shared.barrel';
import { User } from '../../user/user.barrel';

@Injectable()
export class AdminService {

  public constructor(private _apiService: ApiService) {
    //
  }

  public list(responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Get',
        url: 'user'
      },
      responseConfig
    );
  }

  public create(user: User, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Post',
        url: 'user',
        body: user
      },
      responseConfig
    )
  }

  public update(user: User, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Patch',
        url: 'user/' + user.id,
        body: user
      },
      responseConfig
    )
  }

  public delete(user: User, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Delete',
        url: 'user/' + user.id
      },
      responseConfig
    );
  }

}
