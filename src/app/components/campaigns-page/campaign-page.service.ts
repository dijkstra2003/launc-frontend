import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignPageService {

  campaignList: any;

  constructor(private http : HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response =>{
      this.campaignList = response;
    });
  }
}
