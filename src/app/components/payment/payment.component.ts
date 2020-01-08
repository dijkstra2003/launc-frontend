import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }

  startPayment(euros, cents, method) {
    if (euros.length === 0 && cents.length === 0) {
      euros = 10;
      cents = 0;
    }

    if (cents.length === 0 && euros.length !== 0) {
      cents = 0;
    }

    if (euros.length === 0 && cents.length !== 0) {
      euros = 0;
    }

    const goalId = parseInt(sessionStorage.getItem('selectedCampaign'), 10);
    const amount = (parseInt(euros, 10) + (cents / 100)).toFixed(2);
    method = method.toLowerCase();

    this.paymentService.initiatePayment(goalId, amount, method).subscribe(success => {
      const payment = success as any;
      window.localStorage.setItem('payment-id', payment.paymentId);
      window.location.href = payment.url;
    },
    error => {
      console.log(error);
    });
  }

}
