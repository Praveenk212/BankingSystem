import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {

  constructor(private appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  amount: any;
  accountNumber: any;

  addedSucessfully=false;

  addMoney() 
  {
    var flag = 0;
    if (parseInt(this.amount) > 0) {

      for (var i = 0; i < this.appcomponent.accountDb.length; i++) {
        if (this.appcomponent.accountDb[i].accNo == this.accountNumber) {
          console.log(this.appcomponent.accountDb[i].balance + " " + this.amount)
          this.appcomponent.accountDb[i].balance = parseInt(this.appcomponent.accountDb[i].balance) + (parseInt(this.amount));
          flag = 1;
        }
      }
    }
    else {
      flag = 1;
      window.alert("Amount entered is not correct")
    }
    if (flag = 1) 
    {
      this.addedSucessfully=true;
      window.alert("Amount " + this.amount + " Added Sucessufully to " + this.accountNumber);
    }
    else {
      window.alert("Detail entered is incorrect");
    }
  }

}
