import { UtilsService } from './utils.service';
import { SpinService } from './spin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { WheelComponent } from './wheel/wheel.component';
import 'rxjs/add/operator/map';

const ROUTES = [
  {
    path: '',
    redirectTo: 'wheel',
    pathMatch: 'full'
  },
  {
    path: 'wheel',
    component: WheelComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SpinService, UtilsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
