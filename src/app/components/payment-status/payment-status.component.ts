import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent implements OnInit {

  public status: 'OPEN' | 'CANCELED' | 'PENDING' | 'AUTHORIZED' | 'EXPIRED' | 'FAILED' | 'PAID';

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {

    const paymentStatus = Number.parseInt(window.localStorage.getItem('payment-id'), 10);

    this.paymentService.paymentStatus(paymentStatus).toPromise().then(status => {
      this.status = status.status;
    });
  }


}
