import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { UserState } from '../../../store/state/user.state';
import { User } from '../../../store/models/User';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  @Select(UserState.getUsers) users$: Observable<User>

  constructor(private _store: Store) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.users$.subscribe(data=>{
      let tokenSate=data[0].token;
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer `+tokenSate
        }
      });
    })
  

    return next.handle(req);
  }
}