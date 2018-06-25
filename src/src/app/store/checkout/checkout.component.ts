import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    
  }
  sendPayment() {
    console.log("eae men");
    (document.getElementById("form-payment") as HTMLFormElement ).submit();
  }
}