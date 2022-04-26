import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username:string='';
password:string='';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
onSubmit(){

}
}