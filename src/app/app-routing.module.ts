import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactFormComponent} from "./components/exos/reactiveForms/react-form/react-form.component";
import {authGuardGuard} from "./components/exos/reactiveForms/shared/guards/auth-guard.guard";
import {LoginComponent} from "./components/exos/reactiveForms/login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'form', component: ReactFormComponent, canActivate: [authGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
