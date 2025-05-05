import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from 'src/app/customer/customerfunctionality/customerfunctionality.component';
import { userinfo } from 'src/app/userinfo';
import { account } from 'src/app/account';

@Component({
  selector: 'app-customeraccount',
  templateUrl: './customeraccount.component.html',
  styleUrls: ['./customeraccount.component.css']
})
export class CustomeraccountComponent implements OnInit {

  constructor(public appcomponent: AppComponent) { }


  userName:any;
	passWord:any;
	custName:any;
	age:any;
	gender:any;
	emailId:any;
  address:any;
	aadharNo:any;
  phoneNo:any;
 
  tempUser:userinfo;

  ngOnInit(): void {
  }
  addedSucessfully=false;

  submit()
  {
    this.appcomponent.userInfoDb.push(new userinfo(this.userName,this.passWord,this.custName,this.age,
      this.gender,this.emailId,this.address,this.aadharNo,this.phoneNo));
     this.appcomponent.accountDb.push(new account(this.userName)) ;
      console.log(this.appcomponent.userInfoDb);

      this.addedSucessfully=true;
      window.alert("Account Created SucessFully")
  }

}
