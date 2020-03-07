import * as actions from '../../actions/Users/user.action';

export interface State {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
    data: any
}

const INITIAL_STATE: State = {
    loading: false,
    loaded: false,
    failed: false,
    data: null
};

export function reducer(state = INITIAL_STATE, action: actions.Actions): State {
    if (!action) { return state; }

    switch (action.type) {
        case actions.UserTypes.INIT: {
            return Object.assign({}, state, INITIAL_STATE);
        }

        case actions.UserTypes.LOAD: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case actions.UserTypes.LOAD_SUCCESS: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                failed: false,
                data: action.payload
            });
        }

        case actions.UserTypes.LOAD_FAIL: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                failed: { status: true, data: action.payload },
                data: null
            });
        }

        ////

        case actions.UserTypes.LOAD_ALL_USERS: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        }

        case actions.UserTypes.LOAD_ALL_USERS_SUCCESS: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                failed: false,
                data: action.payload
            });
        }

        case actions.UserTypes.LOAD_ALL_USERS_FAILED: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                failed: { status: true, data: action.payload },
                data: null
            });
        }

        default: {
            return state;
        }
    }
}

export const getUsersData = (state: State) => state.data;
export const getUsersLoading = (state: State) => state.loading;
export const getUsersLoaded = (state: State) => state.loaded;
export const getUsersFailed = (state: State) => state.failed;

export const getUsersDataAll = (state: State) => state.data;
export const getUsersLoadingAll = (state: State) => state.loading;
export const getUsersLoadedAll = (state: State) => state.loaded;
export const getUsersFailedAll = (state: State) => state.failed;