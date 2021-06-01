import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: IInfoPage = {};
  team: any[] = [];
       loaded     = true;

  constructor( private http: HttpClient ) 
  {   
    this.getInfoPage();
    this.getTeam();
  }

  private getInfoPage()
  {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp:IInfoPage) =>{
        this.info   = resp;
        this.loaded = false;
      });
  }

  private getTeam()
  {
    this.http.get('https://angular-html-c7a96-default-rtdb.firebaseio.com/team.json').subscribe( (resp: any)=>{
      this.team = resp;
    });
  }
}
