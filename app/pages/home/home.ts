import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SummonerService} from '../../providers/summoner-service/summoner-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers : [SummonerService]
})
export class HomePage {
  private summoner: any;
  private searchName: string;
  private revisionDate: string;
  constructor(private summonerService: SummonerService, private nav: NavController) {
    this.summoner = {};
  }

  loadSummoner(ev: any) {
    let name = ev.target.value;
    this.summonerService.load(name).then(data => {
      this.summoner = data[name];
      this.revisionDate = new Date(this.summoner.revisionDate).toISOString();
    });
  }

}

