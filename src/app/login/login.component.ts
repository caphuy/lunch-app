import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  heroForm: FormGroup;

  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(await this.userService.fbLogin());
  }

}
