import { Component, OnInit } from '@angular/core';
import { Users } from "./models/users";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public usserLogged:Users;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.getLogged();
  }

  getLogged(){
    console.log(this.authService.getUserLoggedIn());
    this.usserLogged=JSON.parse(this.authService.getUserLoggedIn());
    console.log("Userlogger",this.usserLogged);
  }
  title = 'proyectoscrum';
}
