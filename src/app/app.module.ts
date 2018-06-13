import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { UtilsService} from './util/utils.service';
import { SpinService } from './service/spin.service';
import { UserService } from './service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WheelComponent } from './wheel/wheel.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnonymousGuard } from './guard/anonymous-guard';
import { AuthGuard } from './guard/auth-guard';
import 'rxjs/add/operator/map';


const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'wheel',
    component: WheelComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
];

export function getAuthHttp(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-auth-token',
    noTokenScheme: true,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, RequestOptions]
    },
    AuthGuard,
    AnonymousGuard,
    SpinService,
    UtilsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
