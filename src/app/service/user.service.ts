import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http, private authHttp: AuthHttp) {
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
          return this.http.post('http://localhost:9000/auth/facebook', {access_token: result.authResponse.accessToken})
          .toPromise()
          .then(response => {
            const token = response.headers.get('x-auth-token');
            if (token) {
              localStorage.setItem('id_token', token);
            }
            resolve(response.json());
          })
          .catch((err) => {
            reject(err);
          });
        } else {
          reject();
        }
      }, {scope: 'public_profile,email'});
    });
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:9000/api/signin', {username: username, password: password})
      .toPromise()
      .then(response => {
        const token = response.headers.get('x-auth-token');
        if (token) {
          localStorage.setItem('id_token', token);
        }
        resolve(response.json());
      })
      .catch((err) => {
        reject(err);
      });
    });
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser().then(data => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      return this.authHttp.get('http://localhost:9000/api/auth/me').toPromise().then(response => {
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
    });
  }

}
