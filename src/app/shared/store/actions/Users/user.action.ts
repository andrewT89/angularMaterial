import { Action } from '@ngrx/store';
import { type } from '../../../utility/common.functions';

export const UserTypes = {
    INIT: type('[Users] Init user'),
    LOAD: type('[Users] User Load'),
    LOAD_SUCCESS: type('[Users] User Load Success'),
    LOAD_FAIL: type('[Users] User Load Failed'),

    LOAD_ALL_USERS: type('[Users] Load All Users'),
    LOAD_ALL_USERS_SUCCESS: type('[Users] Load All Users Success'),
    LOAD_ALL_USERS_FAILED: type('[Users] Load All Users Failed')
}

export class InitAction implements Action {
    type = UserTypes.INIT;
  
    constructor(public payload: any = null) { }
  }

export class LoadAction implements Action {
    type = UserTypes.LOAD;

    constructor(public payload: any = null) {}
}

export class LoadSuccessAction implements Action {
    type = UserTypes.LOAD_SUCCESS;

    constructor(public payload: any) {}
}

export class LoadFailedAction implements Action {
    type = UserTypes.LOAD_FAIL;

    constructor(public payload: any) {}
}

/////

export class LoadUsersAllAction implements Action {
    type = UserTypes.LOAD_ALL_USERS;

    constructor(public payload: any) {}
}

export class LoadUserAllSuccessAction implements Action {
    type = UserTypes.LOAD_ALL_USERS_SUCCESS;

    constructor(public payload: any) {}
}

export class LoadUsersAllFailedAction implements Action {
    type = UserTypes.LOAD_ALL_USERS_FAILED;

    constructor(public payload: any) {}
}

export type Actions 
    = LoadAction
    | InitAction
    | LoadSuccessAction
    | LoadFailedAction
    | LoadUsersAllAction
    | LoadUserAllSuccessAction
    | LoadUsersAllFailedAction;