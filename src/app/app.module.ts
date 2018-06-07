import { UtilsService } from './utils.service';
import { SpinService } from './service/spin.service';
import { UserService } from './service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WheelComponent } from './wheel/wheel.component';
import { LoginComponent } from './login/login.component';
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SpinService, UtilsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
