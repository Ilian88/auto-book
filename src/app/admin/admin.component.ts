import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/models/IUser';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: IUser[] | undefined;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllUsers().subscribe(users => this.users = users);
  }

}
