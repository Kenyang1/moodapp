import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  getStarted() {
    this.router.navigate(['/home']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
