// To combine all reducers
import { combineReducers } from 'redux';
import customers from './customersReducer';
import admin from './manageAdminReducer';
import tabs from './tabReducers';


export default combineReducers({
    customers,
    admin,
    tabs
});
