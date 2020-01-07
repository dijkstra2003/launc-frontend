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
    const token = localStorage.getItem('token');
    httpOptions.set('Content-Type', 'application/json');
    httpOptions.set('Authorization', 'Bearer ' + token);
    console.log(httpOptions);
    return this.http.post<Campaign>(this.campaignsDbUrl, campaign, { headers : httpOptions });
  }
}
