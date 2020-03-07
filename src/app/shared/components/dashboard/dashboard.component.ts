import { Component, OnInit } from '@angular/core';
import { UsersSandbox } from '../../../pages/users/users.sandbox';
import { Subscription } from 'rxjs';
import * as config from '../../../config/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public subscriptions: Subscription[] = [];
  public quantityUsers: number = 0;
  public dataPromise: any [] = [];
  public arrayPromises: number[] = [1,2,3,4,5,6,7,8,9,10];
  
  constructor(
    public userSandbox: UsersSandbox
  ) { }

  ngOnInit() {

    let urlDynamic = config.URL_SERVICES;
    debugger;
    this.arrayPromises.forEach((pr: any) => {
      this.dataPromise.push(`${urlDynamic}${pr}/todos`);
    });

    this.loadUsers();

    this.subscriptions.push(
      this.userSandbox.loadUsers$.subscribe((users: any) => {
        if (users) {
          this.quantityUsers = users.length;
        }
      })
    );
  }

  public loadUsers() {
    this.userSandbox.getUsers();
    this.userSandbox.getUserAll(this.dataPromise);
  }

}
