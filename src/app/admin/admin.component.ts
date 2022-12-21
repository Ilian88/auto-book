import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from 'app/models/IUser';
import { loggedUser } from 'app/selectors/login.selector';
import { HttpService } from 'app/services/http.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: IUser[] | undefined;
  currentUser: IUser | undefined;
  usersForm = new FormControl();
  usersRolesForm = new FormControl();

  constructor(private http: HttpService, private router: Router,
    private store: Store) { }

  ngOnInit(): void {
    this.store.select(loggedUser).subscribe(user => this.currentUser = user);

    this.http.getAllUsers()
      .pipe(map(users => users.filter(user => user.username !== this.currentUser?.username)))
      .subscribe(users => this.users = users);
  }
  
  changeUserRole() {
    this.http.changeUserRole(this.usersForm.value, this.usersRolesForm.value)
    .subscribe(()=> this.router.navigate(['']));
  }

}
