import { createSelector } from 'reselect';
import deep from 'deep-get-set';

import { APP_LOADING, APP_LOAD_SUCCESS } from '../actions/app.actions';

const initialState = {
    appLoaded: false,
    appLoading: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_LOADING: {
            return {
                ...state,
                appLoading: true,
                appLoaded: false,
            };
        }
        case APP_LOAD_SUCCESS: {
            return {
                ...state,
                appLoading: false,
                appLoaded: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default appReducer;

export const getApp = createSelector(
    (state) => deep(state, 'app'),
    (app) => app
);

export const getAppLoading = createSelector(getApp, (app) =>
    deep(app, 'appLoading')
);

export const getAppLoaded = createSelector(getApp, (app) =>
    deep(app, 'appLoaded')
);
