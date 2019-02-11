import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { Users } from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
});

registerUser(user: any) {
  const url_api = "http://localhost:3000/auth/register";

  return this.http.post(url_api, user);
}

loginuser(email: string, password: string): Observable<any> {
  const url_api = "http://localhost:3000/auth/login";
  return this.http.post(url_api, {email, password});
}

logoutUser() {
  /*let accessToken = localStorage.getItem("accessToken");
  const url_api = `http://localhost:3000/user/logout?access_token=${accessToken}`;
  localStorage.removeItem("accessToken");
  localStorage.removeItem("currentUser");
  return this.htttp.post<Users>(url_api, { headers: this.headers });*/
}
}
