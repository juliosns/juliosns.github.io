import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from 'app/services/api-manager.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import {environment as env} from "../../../environments/environment"

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
  public loginObj = {};
  constructor(private translate: TranslateService, private route: ActivatedRoute, private api:ApiManagerService) { }

  ngOnInit() {
  }

  login(data) {
    console.log(data);
    this.api.postRequest(env.STORE_API_URL + "api/login-customer", data).then( (resp) => {
      console.log(resp);
      localStorage.setItem("customerData", JSON.stringify(resp.json()));
    });
  }
}
