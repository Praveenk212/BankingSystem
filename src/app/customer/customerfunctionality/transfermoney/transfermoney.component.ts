import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../../customer.component';
import { AppComponent } from 'src/app/app.component';
import { account } from 'src/app/account';
import { transaction } from 'src/app/transaction';
import { CustomerfunctionalityComponent } from '../customerfunctionality.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})

// export class DatePipeComponent {
//   today: number = Date.now();
// }
export class TransfermoneyComponent implements OnInit {
 
 
  currentDate:any;

  constructor(public customercomponent:CustomerfunctionalityComponent,public appcomponent:AppComponent,
               private datepipe:DatePipe ) { 

                this.currentDate = datepipe.transform(Date.now(),'yyyy-MM-dd');
                 console.log(this.currentDate);
               }

  ngOnInit(): void {
  }

  date:DatePipe
   sameAccount: boolean;
   accountExist:boolean;
   senderUserName:any;
   amountLeft:any
   amount:any;
   receiveraccountNumber:any;
   senderAccNo:any;
   tranDto:transaction;
   tranDto1:transaction;
   Totalamount:any;

   

transferMoney() 
	{

  //   var sameAccount: boolean;
  //   var accountExist:boolean;
  //   var senderUserName:any;
  //   var amountLeft:any
  //   var senderAccNo:any;
  //  var tranDto:transaction;
  //  var tranDto1:transaction;
  //  var Totalamount:any;

    console.log(this.receiveraccountNumber+" "+this.amount)
    this.senderUserName=this.customercomponent.username;
		// Set<AccountDto> accountSet=new HashSet<AccountDto>();
		// accountSet.addAll(cDb.customerDb.keySet());
		//Set<AccountDto> accountSetTransferDb=new HashSet<AccountDto>();
		//accountSetTransferDb.addAll(tDb.transactionDb.keySet());
		this.accountExist=false;
    this.sameAccount=false;
    for(var i=0;i<this.appcomponent.accountDb.length;i++)
    {
      console.log("inside same account check");
      
      if(this.appcomponent.accountDb[i].userName==this.senderUserName  
        && this.appcomponent.accountDb[i].accNo==this.receiveraccountNumber)
			{
        this.sameAccount=true;
        console.log("sameaccounttotrue");
			}
		}

		for(var i=0;i<this.appcomponent.accountDb.length;i++)
    {
      console.log("inside account exist check");
      console.log(this.appcomponent.accountDb[i].accNo+" "+this.receiveraccountNumber)

			if(this.appcomponent.accountDb[i].accNo==this.receiveraccountNumber)
			{
        this.accountExist=true;
        console.log("account exist to true");
			}
		}

		if(this.sameAccount==true)
		{
      window.alert("Oops can't Transfer as sender and receiver account is same ")
		}
		else
		{
      console.log("Not the same account")

			if(this.accountExist)
			{
				this.senderAccNo=0;
        for(var i=0;i<this.appcomponent.accountDb.length;i++)
        {

          console.log(this.appcomponent.accountDb[i].userName+" "+this.senderUserName)
					if(this.appcomponent.accountDb[i].userName==this.senderUserName  )
					{
						
						if(this.appcomponent.accountDb[i].balance>=this.amount)
						{ 
              this.senderAccNo=this.appcomponent.accountDb[i].accNo;
							tranDto:transaction;
              this.amountLeft=(parseInt(this.appcomponent.accountDb[i].balance)-parseInt(this.amount));
              this.appcomponent.accountDb[i].balance=this.amountLeft;

              this.appcomponent.transactionDb.push(new transaction( this.appcomponent.accountDb[i].userName, this.amount, 
                 this.amountLeft,this.currentDate,0,this.receiveraccountNumber, this.senderAccNo));

                 console.log(this.appcomponent.transactionDb)

              window.alert(" Amount "+this.amount+" 	Transfered to "+this.receiveraccountNumber)
		
							
							for(var i=0;i<this.appcomponent.accountDb.length;i++)
               {

								if(this.appcomponent.accountDb[i].accNo==this.receiveraccountNumber)
								{
									
                   this.Totalamount=(parseInt(this.appcomponent.accountDb[i].balance)+parseInt(this.amount));
                   this.appcomponent.accountDb[i].balance=this.Totalamount;
                  this.appcomponent.transactionDb.push(new transaction( this.appcomponent.accountDb[i].userName,0, 
                    this.Totalamount,this.currentDate,this.amount,this.receiveraccountNumber, this.senderAccNo));
								}
							}
						}
						else
						{
							window.alert("Oops can't Transfer as amount is not sufficient ");
						}
					}
				}

			}
			else
			{
			window.alert("Accont "+ this.receiveraccountNumber +" 	Not Exist");
			}
		}
	}

}
