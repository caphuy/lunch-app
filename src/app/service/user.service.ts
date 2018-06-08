import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {
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
          resolve(result.authResponse.accessToken);
          return this.http.post('http://localhost:9000/auth/facebook', {access_token: result.authResponse.accessToken})
          .toPromise()
          .then(response => {
            const token = response.headers.get('x-auth-token');
            if (token) {
              localStorage.setItem('id_token', token);
            }
            resolve(response.json());
          })
          .catch(() => reject());
          // return result.authResponse.accessToken;
        } else {
          reject();
        }
      }, {scope: 'public_profile,email'});
    });
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser().then(user => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      return this.http.get('http://localhost:9000/api/auth/me').toPromise().then(response => {
        resolve(response.json());
      })
      .catch(() => {
        reject();
      });
    });
  }

}
