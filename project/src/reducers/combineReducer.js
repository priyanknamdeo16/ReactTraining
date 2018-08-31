// To combine all reducers
import { combineReducers } from 'redux';
import customers from './customersReducer';
import tabs from './tabReducers';


export default combineReducers({
    customers,
    tabs
});
