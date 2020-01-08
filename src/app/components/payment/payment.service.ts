import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { routes } from 'src/environments/api-route.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {}

  initiatePayment(GoalId, Amount, paymentMethod) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('JwtToken')
      })
    };

    return this.http.post(routes.apiHostname + '/payment/' + paymentMethod, {GoalId, Amount}, httpOptions);
  }

  paymentStatus(paymentId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('JwtToken')
      })
    };

    return this.http.get(routes.apiHostname + '/payment/' + paymentId, httpOptions);
  }
}
