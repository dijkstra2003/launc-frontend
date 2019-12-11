import { Observable } from 'rxjs';
import { map, find } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampaignModel } from 'src/app/models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignsPageService {

  readonly campaignsDbUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  

  getCampaigns(): Observable<CampaignModel[]> {
    return this.http.get<CampaignModel[]>(this.campaignsDbUrl);
  }
  
  getSingleCampaign(): Observable<any[]>{
    return this.http.get<any[]>(this.campaignsDbUrl);
  } 
}
