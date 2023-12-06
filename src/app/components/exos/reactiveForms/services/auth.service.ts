import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  login (pseudo: string, password: string) {
    if (pseudo === 'test' && password === 'test') {
      this.isAuth.next(true)
    } else {
      this.isAuth.next(false)
    }
  }

}
