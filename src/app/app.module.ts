import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { WheelComponent } from './wheel/wheel.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
