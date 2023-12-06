import {Component, OnDestroy} from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Subscription } from 'rxjs';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  pseudo: string = '';
  password: string = '';
  isAuthSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) {
    this.isAuthSubscription = this._auth.isAuth.subscribe({
      next: value => {
        this.isAuthenticated = value;
        if (this.isAuthenticated) {
          localStorage.setItem('isAuth', 'auth');
          this._router.navigate(['/form'])
        }
      },
      error: err => {
        console.error(err)
      }
    })
  }
  authentication() {
    this._auth.login(this.pseudo, this.password);
  }

  ngOnDestroy() {
    if (this.isAuthSubscription) {
      this.isAuthSubscription.unsubscribe();
    }
  }
}
