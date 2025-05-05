import { Component, OnInit } from '@angular/core';
import { CustomerfunctionalityComponent } from '../../customerfunctionality.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.css']
})
export class AccountdetailComponent implements OnInit {

  constructor(public appcomponent: AppComponent,
    public custfun:CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

}
