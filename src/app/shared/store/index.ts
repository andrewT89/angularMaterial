/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';

//Imports Customs Reducers
import * as formUsers from './reducers/Users/user.reducer';

export interface State {
  users: formUsers.State
}

export const reducers: ActionReducerMap<State> = {
  users: formUsers.reducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getUserState = createFeatureSelector<formUsers.State>('users');
export const usersData = createSelector(getUserState, formUsers.getUsersData);
export const usersDataLoading = createSelector(getUserState, formUsers.getUsersLoading);
export const usersDataLoaded = createSelector(getUserState, formUsers.getUsersLoaded);
export const usersDataFailed = createSelector(getUserState, formUsers.getUsersFailed);