import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: String = '';
  sendUsername: String = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.userService.fbLogin().then(data => {
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err);
    });
  }

}
