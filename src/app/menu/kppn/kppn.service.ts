import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base/base.service';
import { Observable } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { KPPN } from './kppn';


@Injectable({
  providedIn: 'root'
})
export class KppnService extends BaseService  {

  constructor(private http: HttpClient) {
    super();

   }

   public getKPPN(): Observable<KPPN[]> {
    return this.http.get<KPPN[]>(this.URL_ROOT+'rkppn/getKPPN')
      .pipe(
        retry(3),
        catchError(this.handleError) // then handle the error
      );
  }
  

}
