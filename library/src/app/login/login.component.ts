import { AuthService } from './../services/auth.service';
import { UserEntity } from './../entities/user.entity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: UserEntity;

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.user = {
        name: 'hully',
        password: 'hully',
        age: 26
    };
  }

  login(user: UserEntity) {
    this.auth.login(user);
    this.router.navigateByUrl('');
  }
}
