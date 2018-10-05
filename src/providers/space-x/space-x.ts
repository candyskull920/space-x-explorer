import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Capsule } from '../../models/Capsule';
import { Observable } from 'rxjs/Observable';
import { Core } from '../../models/Core';
import { Dragon } from '../../models/Dragon';
import { Mission } from '../../models/Mission';
import { Launch } from '../../models/Launch';

@Injectable()
export class SpaceXProvider {

  private BASE_URL = 'https://api.spacexdata.com/v3/';

  constructor(public http: Http) { }

  getCapsules(): Observable<Capsule[]> {
    return this.http.get(this.BASE_URL + 'capsules')
      .pipe(map((resp: Response) => <Capsule[]>resp.json()));
  }

  getCores(): Observable<Core[]> {
    return this.http.get(this.BASE_URL + 'cores')
      .pipe(map((resp: Response) => <Core[]>resp.json()));
  }

  getDragons(): Observable<Dragon[]> {
    return this.http.get(this.BASE_URL + 'dragons')
      .pipe(map((resp: Response) => <Dragon[]>resp.json()));
  }

  getDragon(id: string): Observable<Dragon> {
    return this.http.get(this.BASE_URL + 'dragons/' + id)
      .pipe(map((resp: Response) => <Dragon>resp.json()));
  }

  getLaunches(): Observable<Launch[]> {
    return this.http.get(this.BASE_URL + 'launches')
      .pipe(map((resp: Response) => <Launch[]>resp.json()));
  }

  getMissions(): Observable<Mission[]> {
    return this.http.get(this.BASE_URL + 'missions')
      .pipe(map((resp: Response) => <Mission[]>resp.json()));
  }

}