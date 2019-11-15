import { combineReducers } from 'redux';
import user from './user';
import ads from './ads';
import ad from './ad';
export default combineReducers({ user, ad, ads });
