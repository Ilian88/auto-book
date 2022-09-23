import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly homeButton = 'Home'
  readonly loginButton = 'Login';
  readonly registerButton = 'Register';
  readonly logoutButton = 'Logout';

  constructor() { }

  ngOnInit(): void {
  }

}
