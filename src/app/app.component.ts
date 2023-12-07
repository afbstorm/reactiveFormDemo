import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) {
  }
  ngOnInit() {
    localStorage.getItem('isAuth') ? this._router.navigate(['/form']) : this._router.navigate(['/'])
  }
}
