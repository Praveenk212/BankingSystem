import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../../customerfunctionality.component';

@Component({
  selector: 'app-creditcardrequeststatus',
  templateUrl: './creditcardrequeststatus.component.html',
  styleUrls: ['./creditcardrequeststatus.component.css']
})
export class CreditcardrequeststatusComponent implements OnInit {

  constructor(public appcomponent: AppComponent, public customerfuncomp: CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

  requestid: any;
  submitted = false;
  display: any;

  check() {
    var flag = 0;
    for (var i = 0; i < this.appcomponent.accountDb.length; i++) {

      if ((this.appcomponent.accountDb[i].creditCardId == this.requestid) &&
        (this.appcomponent.accountDb[i].userName == this.customerfuncomp.username)) {
        if (this.appcomponent.accountDb[i].serviceIdForCreditCard == "0") {
          this.display = "Your request is under process";
        }
        if (
          this.appcomponent.accountDb[i].serviceIdForCreditCard == "1") {
          this.display = "Your credit card request is approved";
        }
        if (
          this.appcomponent.accountDb[i].serviceIdForCreditCard == "2") {
          this.display = "Your credit card request is rejected";
        }
        flag = 1;
      }
    }
    if (flag == 0) {
      window.alert("Request Id doesn't match")
    }
    else {
      this.submitted = true;
    }
  }

}
