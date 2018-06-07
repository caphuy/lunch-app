import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
    FB.init({
      appId      : '500315193719940',
      status     : false,
      cookie     : false,
      xfbml      : false,
      version    : 'v2.8'
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
        if (result.authResponse) {
          return result.authResponse.accessToken;
        }
      }, {scope: 'public_profile,email'});
    });
  }

}
