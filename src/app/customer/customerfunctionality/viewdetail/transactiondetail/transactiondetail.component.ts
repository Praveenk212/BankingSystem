import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../../customerfunctionality.component';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {

  constructor(public appcomponent:AppComponent,public customerfunctionalitycomponent:CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

}
