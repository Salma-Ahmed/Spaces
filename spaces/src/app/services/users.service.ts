import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private base_url = "https://reqres.in/api/users";
  private action: string;
  private isSubmitted: boolean;
  private img: string;
  private id: number;
  private name: number;
  constructor(private http: Http) {}
  getUsers() {
    return this.http.get(`${this.base_url}?page=1&per_page=5`);
  }

  createUser(user) {
    return this.http.post(this.base_url, JSON.stringify(user));
  }

  updateUser(user, userId) {
    return this.http.put(`${this.base_url}${userId}`, JSON.stringify(user));
  }
  deleteUser(userId) {
    return this.http.delete(`${this.base_url}${userId}`);
  }

  setAction(isSubmitted, action?, img?, id?, name?) {
    this.action = action;
    this.isSubmitted = isSubmitted;
    this.img = img;
    this.id = id;
    this.name = name;
  }
  getAction() {
    return {
      action: this.action,
      isSubmitted: this.isSubmitted,
      img: this.img,
      id: this.id,
      name: this.name
    };
  }
}
