import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import navPropsReducer from './reducers/NavReducer';

const logger = createLogger({
    predicate: (getState, action) => __DEV__
});

export default (initialState = {}) => (
    createStore(
        combineReducers({
            navProps: navPropsReducer,
        }),
        initialState,
        applyMiddleware(logger, promiseMiddleware)
    )
);