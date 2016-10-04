import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SummonerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SummonerService {
  private data : any;
  constructor(private http: Http) {}

  load(summonerName: string) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/'+summonerName+'?api_key=RGAPI-38edb799-d38c-4721-8008-309adaab6da7')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}

