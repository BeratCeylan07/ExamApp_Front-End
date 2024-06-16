import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {


  private _ENDPOINTURL = 'https://localhost:7016/api/Auth/LoginAction/Login';

  constructor(private _http: HttpClient,private _router: Router) { }
  
  getLogin(obj: any): Observable<any> {
    return this._http.post<any>(this._ENDPOINTURL,obj);
    
  }        
}
