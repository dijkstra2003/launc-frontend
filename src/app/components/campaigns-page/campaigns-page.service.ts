import { CampaignModel } from 'src/app/models/campaign-model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignsPageService {

  readonly campaignsDbUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  

  getCampaigns(): Observable<CampaignModel[]> {
    return this.http.get<CampaignModel[]>(this.campaignsDbUrl);
  }

  getCampaign(id: number): Observable<CampaignModel>{
    
    return this.http.get<CampaignModel>(this.campaignsDbUrl);
    
  }
}
