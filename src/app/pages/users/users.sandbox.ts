import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as store from '../../shared/store';
import { Sandbox } from 'src/app/shared/sandbox/base.sandbox';
import * as UserActions from '../../shared/store/actions/Users/user.action';

@Injectable()
export class UsersSandbox extends Sandbox {

    public loadUsers$ = this.appState$.select(store.usersData);
    public loadUsersLoading$ = this.appState$.select(store.usersDataLoading);
    public loadUsersLoaded$ = this.appState$.select(store.usersDataLoaded);
    public loadUsersFailed$ = this.appState$.select(store.usersDataFailed);

    private promises: any [] = [];

    constructor(
        protected appState$: Store<store.State>,
    ) {
        super(appState$)
    }

    public getUsers() {
        this.appState$.dispatch( new UserActions.LoadAction() );
    }

    public getUserAll(promises: any) {
        this.appState$.dispatch( new UserActions.LoadUsersAllAction(promises) );
    }
}