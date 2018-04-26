import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLogin:boolean =false;
  userClaims:any;

  constructor(  private authService: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('userToken')!=null){this.isLogin=true;}
    else{this.isLogin=false;}
    
      this.authService.getUserClaims().subscribe( (data:any)=> {
      this.userClaims=data;
    });
  }

}
