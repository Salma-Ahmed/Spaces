import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url = "https://reqres.in/api/users?page=1&per_page=5";
  constructor(private http: Http) {}
  getUsers() {
    return this.http.get(this.url);
  }
}
