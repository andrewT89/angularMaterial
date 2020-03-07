import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as store from '../../../shared/store';
import { Sandbox } from 'src/app/shared/sandbox/base.sandbox';

@Injectable()
export class DashboardSandbox extends Sandbox {

    // public loadUsers$ = this.appState$.select(store.usersData);
    // public loadUsersLoading$ = this.appState$.select(store.usersDataLoading);
    // public loadUsersLoaded$ = this.appState$.select(store.usersDataLoaded);
    // public loadUsersFailed$ = this.appState$.select(store.usersDataFailed);

    constructor(
        protected appState$: Store<store.State>,
    ) {
        super(appState$)
    }

}