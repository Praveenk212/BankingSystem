import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { account } from '../account';
import { userinfo } from '../userinfo';

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-newcustomeraccount',
  templateUrl: './newcustomeraccount.component.html',
  styleUrls: ['./newcustomeraccount.component.css']
})
export class NewcustomeraccountComponent implements OnInit {

  constructor(public appcomponent: AppComponent, public userinforservice:UserinfoService) { }

  ngOnInit(): void {
    this.appcomponent.loadUserData();
  }

 

  customerData = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
    custName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    emailId: new FormControl('', [Validators.email]),
    address: new FormControl('',Validators.pattern['[A-Za-z]']),
    aadharNo: new FormControl(''),
    phoneNo: new FormControl('')
  });


  // [Validators.pattern['[0-9]{12}]']]
  // [Validators.pattern['[7-9]{1}[0-9]{9}]']
 
  submit()
  {

     let userName=this.customerData.get('userName').value;
   let	passWord=this.customerData.get('passWord').value;
	let custName=this.customerData.get('custName').value;
	let age=this.customerData.get('age').value;
let	gender=this.customerData.get('gender').value;
	let emailId=this.customerData.get('emailId').value;
  let address=this.customerData.get('address').value;
	let aadharNo=this.customerData.get('aadharNo').value;
 let phoneNo=this.customerData.get('phoneNo').value;
      
      
      

    this.appcomponent.userInfoDb.push(new userinfo(userName,passWord,custName,age,
      gender,emailId,address,aadharNo,phoneNo));
     this.appcomponent.accountDb.push(new account(userName)) ;

    // this.tempaccount=new account(this.userName);
    // this.tempuser=new userinfo(this.userName,this.passWord,this.custName,this.age,
    //   this.gender,this.emailId,this.address,this.aadharNo,this.phoneNo);
    //  this.userinforservice.addUser(this.tempuser).subscribe(data=> console.log(data));
  }

  // addHotel(){
  //   console.log(this.hotelId);
  //   let hotel = new Hotel(this.hotelId,this.hotelName,this.hotelCity,this.hotelAddress,this.hotelDescription,this.hotelAvgRatePerNight,this.hotelPhone1,this.hotelPhone2,this.hotelRating,this.hotelEmail);
  //   this.ds.addHotel(hotel).subscribe(data => console.log(data));
  // }


}
