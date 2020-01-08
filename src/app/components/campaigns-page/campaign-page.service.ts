import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';
import { routes } from 'src/environments/api-route.prod';

@Injectable({
  providedIn: 'root'
})
export class CampaignPageService {

  readonly campaignsDbUrl = routes.apiHostname + '/campaign/';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignsDbUrl);
  }

  getCampaignById(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(this.campaignsDbUrl + id);
  }

  createCampaign(campaign: Campaign) {
    const httpOptions = new HttpHeaders();
    const token = localStorage.getItem('JwtToken');
    httpOptions.append('Content-Type', 'application/json');
    httpOptions.append('Authorization', 'Bearer '.concat(token));
    return this.http.post<Campaign>(this.campaignsDbUrl, campaign, { headers : httpOptions });
  }
}
