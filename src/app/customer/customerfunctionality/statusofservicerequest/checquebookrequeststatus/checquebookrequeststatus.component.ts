import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../../customerfunctionality.component';

@Component({
  selector: 'app-checquebookrequeststatus',
  templateUrl: './checquebookrequeststatus.component.html',
  styleUrls: ['./checquebookrequeststatus.component.css']
})
export class ChecquebookrequeststatusComponent implements OnInit {

  constructor(public appcomponent: AppComponent, public customerfuncomp: CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

  requestid: any;
  submitted = false;
  display: any;

  check() {
    var flag = 0;
    for (var i = 0; i < this.appcomponent.accountDb.length; i++) {

      if ((this.appcomponent.accountDb[i].checqueBookId == this.requestid) &&
        (this.appcomponent.accountDb[i].userName == this.customerfuncomp.username)) {
        if ( this.appcomponent.accountDb[i].serviceIdForChecqueBook == "11") {
          this.display = "Your checque book request is approved";
          console.log("11");
        }
        if ( this.appcomponent.accountDb[i].serviceIdForChecqueBook == "0") {
          this.display = "Your checque book request is under process";
          console.log("11");
        }
        flag=1;
        console.log("11"+"flag=1");
      }
    }
    if(flag==0)
    {
      window.alert("Request Id doesn't match")
    }
    else
    {
      this.submitted = true;
    }
  }

}
