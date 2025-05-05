import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminfunctionComponent } from './admin/adminfunction/adminfunction.component';
import { CustomerlistComponent } from './admin/adminfunction/customerlist/customerlist.component';
import { TransactionreportComponent } from './admin/adminfunction/transactionreport/transactionreport.component';
import { CustomeraccountComponent } from './admin/adminfunction/customeraccount/customeraccount.component';
import { PendingservicerequestComponent } from './admin/adminfunction/pendingservicerequest/pendingservicerequest.component';
import { CustomerfunctionalityComponent } from './customer/customerfunctionality/customerfunctionality.component';
import { AddmoneyComponent } from './admin/adminfunction/addmoney/addmoney.component';
import { RequestforserviceComponent } from './customer/customerfunctionality/requestforservice/requestforservice.component';
import { StatusofservicerequestComponent } from './customer/customerfunctionality/statusofservicerequest/statusofservicerequest.component';
import { TransfermoneyComponent } from './customer/customerfunctionality/transfermoney/transfermoney.component';
import { UpdatedetailComponent } from './customer/customerfunctionality/updatedetail/updatedetail.component';
import { NewcustomeraccountComponent } from './newcustomeraccount/newcustomeraccount.component';
import { ViewdetailComponent } from './customer/customerfunctionality/viewdetail/viewdetail.component';
import { AccountdetailComponent } from './customer/customerfunctionality/viewdetail/accountdetail/accountdetail.component';
import { PersonaldetailComponent } from './customer/customerfunctionality/viewdetail/personaldetail/personaldetail.component';
import { TransactiondetailComponent } from './customer/customerfunctionality/viewdetail/transactiondetail/transactiondetail.component';
import { CreditcardrequestComponent } from './customer/customerfunctionality/requestforservice/creditcardrequest/creditcardrequest.component';
import { ChecquebookrequestComponent } from './customer/customerfunctionality/requestforservice/checquebookrequest/checquebookrequest.component';
import { ChecquebookrequeststatusComponent } from './customer/customerfunctionality/statusofservicerequest/checquebookrequeststatus/checquebookrequeststatus.component';
import { CreditcardrequeststatusComponent } from './customer/customerfunctionality/statusofservicerequest/creditcardrequeststatus/creditcardrequeststatus.component';



const routes: Routes = [
  {
    path: 'admin', component: AdminComponent},

    {
      path: 'admin/adminfunction', component: AdminfunctionComponent,
      children: [
        { path: 'addmoney', component: AddmoneyComponent },
        { path: 'customerlist', component: CustomerlistComponent },
        { path: 'transactionreport', component: TransactionreportComponent },
        { path: 'customeraccount', component: CustomeraccountComponent },
        { path: 'pendingservicerequest', component: PendingservicerequestComponent }
      ]
    },
  {
    path: 'customer', component: CustomerComponent,
  },

  {
    path: 'customer/customerfunctionality/:username', component: CustomerfunctionalityComponent,

    children: [
      { path: 'requestforservice', component: RequestforserviceComponent ,
       
      children:[
        {path: 'creditcardrequest', component: CreditcardrequestComponent },
       { path: 'checquebookrequest', component: ChecquebookrequestComponent} ,

      ]
    
    },
      { path: 'statusofservicerequest', component: StatusofservicerequestComponent,
      children:[
        {path:'creditcardrequeststatus' ,component:CreditcardrequeststatusComponent},
        {path:'checquebookrequeststatus' ,component:ChecquebookrequeststatusComponent}
      ]
    },
      { path: 'transfermoney', component: TransfermoneyComponent },
      { path: 'updatedetail', component: UpdatedetailComponent },
      { path: 'viewdetail', component: ViewdetailComponent ,

      children:[
        { path: 'accountdetail', component: AccountdetailComponent },
        { path: 'personaldetail', component: PersonaldetailComponent },
        { path: 'transactiondetail', component: TransactiondetailComponent }

      ]
    },

    ]
  },
  { path: 'newcustomeraccount', component: NewcustomeraccountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {CustomerfunctionalityComponent;
  TransactiondetailComponent;PersonaldetailComponent;AccountdetailComponent;
  ViewdetailComponent;UpdatedetailComponent;TransfermoneyComponent;StatusofservicerequestComponent;
  RequestforserviceComponent;CustomerComponent;PendingservicerequestComponent;
  CustomeraccountComponent;TransactionreportComponent;CustomerlistComponent;
  AddmoneyComponent;AdminfunctionComponent;AdminComponent
                                }
