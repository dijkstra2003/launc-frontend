import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';


@Injectable({
  providedIn: 'root'
})
export class CampaignPageService {

  readonly campaignsDbUrl = 'http://dev.api.launc.space/campaign/';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignsDbUrl);
  }

  getCampaignById(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(this.campaignsDbUrl + id);
  }

}
