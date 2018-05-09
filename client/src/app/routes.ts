import { Routes, RouterModule } from '@angular/router';
import { UserLogedPage } from './UserLogedPage/user-loged-page.component'
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

export const routes: Routes = [
  {path: 'signup', component: AuthSignupComponent},
  {path: 'login', component: AuthLoginComponent},
  {path: '', component: UserLogedPage},
];

