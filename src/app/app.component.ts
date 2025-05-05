import { Component, OnInit } from '@angular/core';
import { userinfo } from './userinfo';
import { UserinfoService } from './userinfo.service';
import { AccountService } from './account.service';
import { account } from './account';
import { transaction } from './transaction';
import { TransactionreportComponent } from './admin/adminfunction/transactionreport/transactionreport.component';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserinfoService]
})
export class AppComponent implements OnInit {

  title = 'Online Banking System';

  public userInfoDb: userinfo[] = [];
  public accountDb:account[]=[];
  public transactionDb:transaction[]=[];
  public userinfo;

  constructor(private userInfoservice:UserinfoService,private account:AccountService,private transactionservice:TransactionService) { }

  ngOnInit()
  {
    this.loadUserData();
  }
  loadUserData()
  {
    this.userInfoservice.getUser().subscribe((data:any)=>{this.userInfoDb=data;})
    this.account.getaccount().subscribe((data:any)=>{this.accountDb=data;})
    this.transactionservice.getTransaction().subscribe((data:any)=>{this.transactionDb=data;})
  }


  


}
