import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { tokenKey } from "@angular/core/src/view";
import { tokenKey } from "@angular/core/src/view";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(credentials) {
    return this.httpClient
      .post<{ token: string }>("https://reqres.in/api/login", credentials)
      .pipe(
        map(result => {
          if (result && result.token) {
            localStorage.setItem("access_token", result.token);
            return true;
          }
          return false;
        })
      );
  }
  logOut() {
    localStorage.removeItem("access_token");
  }
  isLoggedIn() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem("access_token");
    if (!token) {
      return false;
    } else {
      // const decodedToken = helper.decodeToken(token);
      // const expirationDate = helper.getTokenExpirationDate(token);
      // const isExpired = helper.isTokenExpired(token);
      // console.log(isExpired);
      // return !isExpired;
      return true;
    }
  }
}
