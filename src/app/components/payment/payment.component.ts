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
    var goalId = parseInt(sessionStorage.getItem("selectedCampaign"));
    var amount = (parseInt(euros) + (cents / 100)).toFixed(2);
    method = method.toLowerCase();
    
    this.paymentService.initiatePayment(amount, goalId, method).subscribe(success => {
      console.log(success);
    },
    error => {
      console.log(error);
    });
  }

}
