import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminfunctionComponent } from './admin/adminfunction/adminfunction.component';
import { CustomerlistComponent } from './admin/adminfunction/customerlist/customerlist.component';
import { CustomeraccountComponent } from './admin/adminfunction/customeraccount/customeraccount.component';
import { TransactionreportComponent } from './admin/adminfunction/transactionreport/transactionreport.component';
import { PendingservicerequestComponent } from './admin/adminfunction/pendingservicerequest/pendingservicerequest.component';
import { CustomerfunctionalityComponent } from './customer/customerfunctionality/customerfunctionality.component';
import { AddmoneyComponent } from './admin/adminfunction/addmoney/addmoney.component';
import { TransfermoneyComponent } from './customer/customerfunctionality/transfermoney/transfermoney.component';
import { UpdatedetailComponent } from './customer/customerfunctionality/updatedetail/updatedetail.component';
import { RequestforserviceComponent } from './customer/customerfunctionality/requestforservice/requestforservice.component';
import { StatusofservicerequestComponent } from './customer/customerfunctionality/statusofservicerequest/statusofservicerequest.component';
import { NewcustomeraccountComponent } from './newcustomeraccount/newcustomeraccount.component';
import { PersonaldetailComponent } from './customer/customerfunctionality/viewdetail/personaldetail/personaldetail.component';
import { AccountdetailComponent } from './customer/customerfunctionality/viewdetail/accountdetail/accountdetail.component';
import { ViewdetailComponent } from './customer/customerfunctionality/viewdetail/viewdetail.component';
import { UserinfoService } from './userinfo.service';
import { TransactiondetailComponent } from './customer/customerfunctionality/viewdetail/transactiondetail/transactiondetail.component';
import { CreditcardrequestComponent } from './customer/customerfunctionality/requestforservice/creditcardrequest/creditcardrequest.component';
import { ChecquebookrequestComponent } from './customer/customerfunctionality/requestforservice/checquebookrequest/checquebookrequest.component';
import { ChecquebookrequeststatusComponent } from './customer/customerfunctionality/statusofservicerequest/checquebookrequeststatus/checquebookrequeststatus.component';
import { CreditcardrequeststatusComponent } from './customer/customerfunctionality/statusofservicerequest/creditcardrequeststatus/creditcardrequeststatus.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    AdminfunctionComponent,
    CustomerlistComponent,
    CustomeraccountComponent,
    TransactionreportComponent,
    PendingservicerequestComponent,
    CustomerfunctionalityComponent,
    AddmoneyComponent,
    TransfermoneyComponent,
    UpdatedetailComponent,
    RequestforserviceComponent,
    StatusofservicerequestComponent,
    NewcustomeraccountComponent,
    PersonaldetailComponent,
    AccountdetailComponent,
    ViewdetailComponent,
    TransactiondetailComponent,
    CreditcardrequestComponent,
    ChecquebookrequestComponent,
    ChecquebookrequeststatusComponent,
    CreditcardrequeststatusComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [UserinfoService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
