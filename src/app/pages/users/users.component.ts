import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersSandbox } from './users.sandbox';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public subscriptions: Subscription[] = [];
  public dataSource =  new MatTableDataSource<any>();
  public displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  
  constructor(
    public userSandbox: UsersSandbox
  ) { }

  ngOnInit() {
    this.getUsers();

    this.subscriptions.push(
      this.userSandbox.loadUsers$.subscribe((users: any) => {
        if (users) {
          this.dataSource = users;
        }
      })
    );
  }

  public getUsers() {
    this.userSandbox.getUsers();
  }

  public setPaginationTable(pageEvent: Event) {
    debugger;
    console.log(pageEvent);
  }

}
