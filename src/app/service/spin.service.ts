import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpinService {

  constructor(private http: Http) { }

  spin() {
    return this.http.get('/api/spin').pipe(map(res => res.json()));
  }

}
