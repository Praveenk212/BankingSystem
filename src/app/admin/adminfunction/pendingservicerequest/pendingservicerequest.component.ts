import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { account } from 'src/app/account';

@Component({
  selector: 'app-pendingservicerequest',
  templateUrl: './pendingservicerequest.component.html',
  styleUrls: ['./pendingservicerequest.component.css']
})
export class PendingservicerequestComponent implements OnInit {


  tempvalue="0";
  submitted=false
  approvedcredit=false;
  approvedchecque=false;

  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }
  approveorrejectcreditcard(tempaccount:account)
  {
    for(var i=0;i<this.appcomponent.accountDb.length;i++)
    {
      if(this.appcomponent.accountDb[i].userName==tempaccount.userName)
      {
        if(parseInt(this.appcomponent.accountDb[i].creditCardId)>0 )
        {
          if(parseInt(this.appcomponent.accountDb[i].monthlyIncome)>18000)
          {
            this.appcomponent.accountDb[i].serviceIdForCreditCard="1";
            window.alert("Credit card request Approved ")
          }
          else
          {
            this.appcomponent.accountDb[i].serviceIdForCreditCard="2";
            window.alert("Credit card request Rejected")
          } 
        }
      }
    }
    this.approvedcredit=true;
    this.submitted=true;
  }
  approveorrejectchecquebook(tempaccount:account)
  {
    for(var i=0;i<this.appcomponent.accountDb.length;i++)
    {
      if(this.appcomponent.accountDb[i].userName==tempaccount.userName)
      {
        if(parseInt(this.appcomponent.accountDb[i].checqueBookId)>0 )
        {
          this.appcomponent.accountDb[i].serviceIdForChecqueBook="11";
          window.alert("Checque Book request Approved ")
        }
      }
    }
    this.approvedchecque=true;
    this.submitted=true;
  }

}
