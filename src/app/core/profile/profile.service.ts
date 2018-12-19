import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import BACKEND_URLS from '@app/shared/backend-urls';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${JSON.parse(localStorage.getItem('credentials'))['token']}`
    })
  };
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * getIdea
   */
  public getUserDetails(username: string) {
    return this.http.get(`${BACKEND_URLS.USER_DETAILS}${username}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
