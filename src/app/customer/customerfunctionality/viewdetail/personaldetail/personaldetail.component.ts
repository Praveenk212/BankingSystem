import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../../customerfunctionality.component';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {

  constructor(public appcomponent: AppComponent,
   public custfun:CustomerfunctionalityComponent ) { }

    
  ngOnInit()
   {
     
  }


}
