import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { userinfo } from '../userinfo';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  public username: any;
  public password: any;

  Login(event) {
    console.log(this.username)
    var flag = 0;
    for (var i = 0; i < this.appcomponent.userInfoDb.length; i++) {
      // var user=this.appcomponent.userInfoDb[i].userName;
      // var pass=this.appcomponent.userInfoDb[i].passWord;
      if (this.username == this.appcomponent.userInfoDb[i].userName &&
        this.password == this.appcomponent.userInfoDb[i].passWord) {
        console.log(this.appcomponent.userInfoDb[i].userName)
        console.log(this.appcomponent.userInfoDb[i].passWord)
        flag = 1;
        this.router.navigate(['customer/customerfunctionality',this.username]);
      }
    }
    if (flag == 0) {
      window.alert("Invalid customer login credential")
    }
  }

  newUser() {
    this.router.navigate(['newcustomeraccount'])
  }


}
