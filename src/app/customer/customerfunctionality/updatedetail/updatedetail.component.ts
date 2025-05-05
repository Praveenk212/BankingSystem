import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../customerfunctionality.component';

@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.css']
})
export class UpdatedetailComponent implements OnInit {

  isShow = false;

  constructor(public appcomponent: AppComponent,
    public custfun:CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

     detailSubmitted=false;
     paswordSubmitted=false;

                custName:any;
                age:any;
                gender:any;
                emailId:any;
                address:any;
                aadharNo:any;
                phoneNo:any;
                passWord:any;

  formupdate(userinfo)
  {

    this.custName=userinfo.custName;
    this.age=userinfo.age;
    this.gender=userinfo.gender;
    this.emailId=userinfo.emailId;
    this.address=userinfo.address;
    this.aadharNo=userinfo.aadharNo;
    this.phoneNo=userinfo.phoneNo;

    var x=document.getElementById("hide");
    if(x.style.display="none")
    {
      x.style.display="block";
    }
    else{
      x.style.display="none";
    }
  
  }

  updateDetail()
  {
    for(var i=0;i<this.appcomponent.userInfoDb.length;i++)
    {
      if(this.appcomponent.userInfoDb[i].userName==this.custfun.username)
      {
        this.appcomponent.userInfoDb[i].custName=this.custName;
        this.appcomponent.userInfoDb[i].age=this.age;
        this.appcomponent.userInfoDb[i].gender=this.gender;
        this.appcomponent.userInfoDb[i].emailId=this.emailId;
        this.appcomponent.userInfoDb[i].address=this.address;
        this.appcomponent.userInfoDb[i].aadharNo=this.aadharNo;
        this.appcomponent.userInfoDb[i].phoneNo=this.phoneNo;
      } 
    }
    this.detailSubmitted=true;
    window.alert("Updated");
  
  }

  updatePassWordForm(userinfo)
  {
    this.passWord=userinfo.passWord;

    var x=document.getElementById("hidepass");
    if(x.style.display="none")
    {
      x.style.display="block";
    }
    else{
      x.style.display="none";
    }
  }

  updatePassWord()
  {

    for(var i=0;i<this.appcomponent.userInfoDb.length;i++)
    {
      if(this.appcomponent.userInfoDb[i].userName==this.custfun.username)
      {
        this.appcomponent.userInfoDb[i].passWord=this.passWord;
      }
    }
    this.paswordSubmitted=true;
    window.alert("PassWord Updated");
  }



}
