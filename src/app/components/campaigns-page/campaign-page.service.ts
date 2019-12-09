import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignPageService {

  readonly campaignDbUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { }

  getCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(this.campaignDbUrl)
  }

}
