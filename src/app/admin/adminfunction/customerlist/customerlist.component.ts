import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from 'src/app/customer/customerfunctionality/customerfunctionality.component';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

}
