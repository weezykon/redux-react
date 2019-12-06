import counterReducer from './counter';
import { combineReducers } from 'redux';
import loggedReducer from './isLoggedin';

const reducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedReducer
})

export default reducers;