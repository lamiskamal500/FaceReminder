import {createStore, combineReducers} from 'redux';
import userReducer from './reducer';
const rootReducer = combineReducers({user: userReducer});
const configureStore = createStore(rootReducer);

export const store= createStore(rootReducer);
