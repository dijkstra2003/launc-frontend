import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from 'src/environments/api-route.prod';

@Injectable({
  providedIn: 'root'
})
export class CampaignPageService {

  readonly campaignsDbUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(routes.apiHostname + 'campaign');
  }

}
