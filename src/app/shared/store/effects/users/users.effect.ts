import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as store from '../..';
import * as userActions from '../../actions/Users/user.action';
import { UsuarioService } from 'src/app/shared/services/user.service';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private api: UsuarioService,
        private appState$: Store<store.State>) { }

    @Effect()
    loadUsers$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserTypes.LOAD),
        map((action: userActions.LoadAction) => action.payload),
        switchMap(state => {
            return this.api.loadUsers().pipe(
                map(user => {
                    return user  ? new userActions.LoadSuccessAction(user) : new userActions.LoadFailedAction(user);
                }),
                catchError(error => of(new userActions.LoadFailedAction(error)))
            )
        })
    );

    @Effect()
    loadUsersAll$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserTypes.LOAD_ALL_USERS),
        map((action: userActions.LoadUsersAllAction) => action.payload),
        switchMap(state => {
            return this.api.loadUserAll(state).then(data => {
                return data ? new userActions.LoadUserAllSuccessAction(data) : new userActions.LoadUsersAllFailedAction(data)
            })
            .catch(err => new userActions.LoadUsersAllFailedAction(err));
        })
    );

}