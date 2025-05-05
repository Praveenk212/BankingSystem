import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  username:any;
  password:any;

  Login(event)
  {
    console.log(this.username)
    if(this.username=='admin' && this.password=='admin')
    {
      console.log(this.username)
      this.router.navigate(['admin/adminfunction'])
    }
    else
    {
  window.alert("Invalid Admin login credential")
    }
  }

}
