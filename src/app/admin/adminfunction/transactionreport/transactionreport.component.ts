import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-transactionreport',
  templateUrl: './transactionreport.component.html',
  styleUrls: ['./transactionreport.component.css']
})
export class TransactionreportComponent implements OnInit {

  constructor(public appcomponent:AppComponent) { }

  ngOnInit(): void {
  }

}
