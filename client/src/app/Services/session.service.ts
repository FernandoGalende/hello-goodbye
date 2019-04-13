import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Router } from "@angular/router";
import { environment }  from '../../environments/environment';

const  BASEURL:string= environment.BASEURL;

@Injectable()
export class SessionService {
  user: object;
  userEvent: EventEmitter<any> =  new EventEmitter();
  options: any = { withCredentials: true };
  myEmotion: string;

  constructor(private http: Http, private router: Router) {
    this.isLogged().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  signup(user) {

    return this.http
      .post(`${BASEURL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  handleUser(user?: object) {
    this.user = user;
    this.userEvent.emit(this.user)
    return this.user;
  }

  login(username, password) {
    return this.http
      .post(`${BASEURL}/api/login`, { username, password }, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .get(`${BASEURL}/api/logout`, this.options)
      .map(res => {
        return this.handleUser()
      })
      .catch(this.handleError);
  }

  isLogged() {
    return this.http
      .get(`${BASEURL}/api/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

}
